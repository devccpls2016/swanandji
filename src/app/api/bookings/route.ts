import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { appendSubmission } from "@/lib/storage";
import { bookingSchema, zodErrors } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = bookingSchema.parse(body);
    const id = await appendSubmission("bookings.json", payload);

    return NextResponse.json({
      success: true,
      message: "Booking inquiry received. We will confirm availability soon.",
      id
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please review the booking details and try again.",
          errors: zodErrors(error)
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while saving your booking inquiry."
      },
      { status: 500 }
    );
  }
}
