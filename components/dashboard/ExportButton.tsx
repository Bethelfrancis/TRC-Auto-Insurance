"use client";

import { Lead } from "@/lib/types";

interface ExportButtonProps {
  leads: Lead[];
}

export default function ExportButton({ leads }: ExportButtonProps) {
  const handleExportCSV = () => {
    if (!leads || leads.length === 0) {
      alert("No leads to export");
      return;
    }

    const headers = [
      "Name",
      "Email",
      "Phone",
      "ZIP",
      "Vehicle",
      "Currently Insured",
      "TrustedForm",
      "Jornaya Token",
      "Date Submitted",
    ];

    const rows = leads.map((lead: Lead) => [
      `${lead.first_name} ${lead.last_name}`,
      lead.email,
      lead.phone,
      lead.zip_code,
      `${lead.vehicle_year} ${lead.vehicle_make} ${lead.vehicle_model}`,
      lead.currently_insured,
      lead.trusted_form_cert_url ? "✓" : "✗",
      lead.lead_id || "N/A",
      new Date(lead.created_at).toLocaleDateString(),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        row.map((cell) => `"${cell}"`).join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExportCSV}
      className="px-4 py-2 bg-[#1a56db] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
    >
      📥 Export CSV
    </button>
  );
}
