/**
 * Clean tracking utilities (NO scripts, NO SDK dependency)
 */

export function getTrustedFormCert(): string | null {
  if (typeof window === "undefined") return null;

  const url = new URLSearchParams(window.location.search).get(
    "xxTrustedFormCertUrl"
  );

  return url || null;
}

export function getLeadId(): string | null {
  if (typeof window === "undefined") return null;

  const token = new URLSearchParams(window.location.search).get(
    "leadid_token"
  );

  return token || null;
}

export function debugTrackingValues() {
  if (typeof window === "undefined") return;

  console.log("🔍 Tracking Debug:", {
    trustedForm: getTrustedFormCert(),
    leadId: getLeadId(),
    url: window.location.href,
  });
}