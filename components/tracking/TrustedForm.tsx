"use client";

/**
 * TrustedForm is URL-based tracking (not script-based)
 * We only keep this for semantic form compatibility
 */

export default function TrustedForm() {
  return (
    <input
      type="hidden"
      name="xxTrustedFormCertUrl"
      id="xxTrustedFormCertUrl"
    />
  );
}