import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { appendSubmission } from "@/lib/storage";
import { zodErrors, contactSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = contactSchema.parse(body);
    const id = await appendSubmission("contact.json", payload);

    return NextResponse.json({
      success: true,
      message: "Thank you. Our team will get back to you shortly.",
      id
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please review the form and try again.",
          errors: zodErrors(error)
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while saving your message."
      },
      { status: 500 }
    );
  }
}
