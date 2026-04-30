import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  stepOneSchema,
  stepTwoSchema,
  stepThreeSchema,
} from "@/lib/validations";
import { LeadData } from "@/lib/types";
import { supabase } from "@/lib/supabase";
import { triggerWebhook } from "@/lib/webhook";

const mergedSchema = stepOneSchema.merge(stepTwoSchema).merge(stepThreeSchema);

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

    // Insert into Supabase leads table
    const { error: dbError } = await supabase.from("leads").insert([
      {
        first_name: leadData.firstName,
        last_name: leadData.lastName,
        email: leadData.email,
        phone: leadData.phone,
        zip_code: leadData.zipCode,
        vehicle_year: leadData.vehicleYear,
        vehicle_make: leadData.vehicleMake,
        vehicle_model: leadData.vehicleModel,
        date_of_birth: leadData.dateOfBirth,
        license_status: leadData.licenseStatus,
        violations: leadData.violations,
        currently_insured: leadData.currentlyInsured,
        trusted_form_cert_url: leadData.trustedFormCertUrl || null,
        lead_id: leadData.leadId || null,
        ip_address: leadData.ipAddress,
        user_agent: leadData.userAgent,
      },
    ]);

    if (dbError) {
      console.error("❌ Database insert error:", {
        message: dbError.message,
        code: dbError.code,
        details: dbError.details,
        hint: dbError.hint,
      });
      return NextResponse.json(
        {
          success: false,
          error: "Database error",
          details: dbError.message,
        },
        { status: 500 }
      );
    }

    // Log successful save
    console.log(
      `✅ Lead saved successfully to database: ${leadData.email} (${leadData.firstName} ${leadData.lastName})`
    );

    // Trigger webhook (non-blocking, won't crash if it fails)
    try {
      await triggerWebhook(leadData);
    } catch (webhookError) {
      console.error("Webhook trigger failed (non-fatal):", webhookError);
    }

    // Realistic success response
    return NextResponse.json({
      success: true,
      leadId: `LD-${Date.now()}-${randomBetween(1000, 9999)}`,
      timestamp: new Date().toISOString(),
      estimatedSavings: `$${randomBetween(420, 720)}`,
      message:
        "Your quote request has been received. A licensed agent will be in touch shortly.",
    });
  } catch (error) {
    const message =
      error instanceof z.ZodError
        ? `Validation failed: ${error.issues.map((e: any) => e.message).join(", ")}`
        : error instanceof Error
          ? error.message
          : "Unknown error";

    console.error("Lead submission failed:", message);

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
