import { LeadData } from "@/lib/types";

export async function triggerWebhook(lead: LeadData) {
  try {
    const webhookUrl = process.env.CRM_WEBHOOK_URL;

    if (!webhookUrl) {
      console.log("CRM_WEBHOOK_URL not configured, skipping webhook");
      return;
    }

    const payload = {
      contact: {
        firstName: lead.firstName || "",
        lastName: lead.lastName || "",
        email: lead.email || "",
        phone: lead.phone || "",
      },
      customFields: {
        zipCode: lead.zipCode || "",
        vehicleYear: lead.vehicleYear || "",
        vehicleMake: lead.vehicleMake || "",
        vehicleModel: lead.vehicleModel || "",
        currentlyInsured: lead.currentlyInsured || "",
        violations: lead.violations || "",
        trustedFormCertUrl: lead.trustedFormCertUrl || "",
        leadId: lead.leadId || "",
      },
      source: "TRC AutoShield Landing Page",
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log("✅ Webhook sent successfully", { leadEmail: lead.email });
    } else {
      console.warn("⚠️ Webhook returned non-200 status", {
        status: response.status,
        leadEmail: lead.email,
      });
    }
  } catch (error) {
    console.error("❌ Webhook error (non-fatal):", {
      error: error instanceof Error ? error.message : String(error),
      leadEmail: lead.email,
    });
  }
}
