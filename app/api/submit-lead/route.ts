import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  stepOneSchema,
  stepTwoSchema,
  stepThreeSchema,
} from "@/lib/validations";
import { LeadData } from "@/lib/types";

const mergedSchema = stepOneSchema.merge(stepTwoSchema).merge(stepThreeSchema);

/** Simulates network + CRM processing time */
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Random int between min and max (inclusive) */
function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate with merged schemas
    const validatedData = mergedSchema.parse(body);

    // Extract IP & user agent
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    // Build complete lead data
    const leadData: LeadData = {
      ...validatedData,
      ipAddress: ip,
      userAgent,
    };

    // Simulate realistic CRM processing delay (1–1.5s)
    await sleep(randomBetween(1000, 1500));

    // Log the lead
    console.log("Lead submitted:", leadData);

    // Realistic success response — looks like a real CRM/ping-post response
    return NextResponse.json({
      success: true,
      leadId: `LD-${Date.now()}-${randomBetween(1000, 9999)}`,
      timestamp: new Date().toISOString(),
      estimatedSavings: `$${randomBetween(420, 720)}`,
      message: "Your quote request has been received. A licensed agent will be in touch shortly.",
    });
  } catch (error) {
    const message =
      error instanceof z.ZodError
        ? `Validation failed: ${error.issues.map((e: any) => e.message).join(", ")}`
        : error instanceof Error
          ? error.message
          : "Unknown error";

    console.error("Lead submission failed:", message);

    // Realistic error delay too — real APIs don't fail instantly
    await sleep(400);

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
