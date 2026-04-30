"use client";

/**
 * Jornaya LeadiD is URL-based tracking (not JS SDK)
 * Only renders hidden input for compatibility
 */

export default function Jornaya() {
  return (
    <input
      type="hidden"
      name="leadid_token"
      id="leadid_token"
    />
  );
}