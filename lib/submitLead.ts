import { LeadData } from "./types";

export async function submitLead(data: LeadData) {
  const response = await fetch("/api/submit-lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to submit lead: ${response.statusText}`);
  }

  return response.json();
}
