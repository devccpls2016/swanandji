import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { appendSubmission } from "@/lib/storage";
import { gauSevaSchema, zodErrors } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = gauSevaSchema.parse(body);
    const id = await appendSubmission("gau-seva.json", payload);

    return NextResponse.json({
      success: true,
      message: "Your Gau Seva request has been received with gratitude.",
      id
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please review the Gau Seva form and try again.",
          errors: zodErrors(error)
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while saving your Gau Seva request."
      },
      { status: 500 }
    );
  }
}
