import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { appendSubmission } from "@/lib/storage";
import { orderSchema, zodErrors } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = orderSchema.parse(body);
    const id = await appendSubmission("orders.json", payload);

    return NextResponse.json({
      success: true,
      message:
        "Your order inquiry has been received. We will contact you to confirm delivery details.",
      id
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please review your checkout details and try again.",
          errors: zodErrors(error)
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while saving your order inquiry."
      },
      { status: 500 }
    );
  }
}
