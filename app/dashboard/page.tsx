import { supabase } from "@/lib/supabase";
import { Lead } from "@/lib/types";
import ExportButton from "@/components/dashboard/ExportButton";
import { redirect } from "next/navigation";

export default async function Dashboard({
  searchParams,
}: {
  searchParams: Promise<{ pwd?: string }>;
}) {
  const params = await searchParams;
  const pwd = params.pwd;
  const correctPassword = process.env.DASHBOARD_PASSWORD || "trc2025";

  // Password check
  if (pwd !== correctPassword) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Dashboard
            </h1>
            <p className="text-gray-500 text-center mb-6">
              Enter your password to access the leads dashboard
            </p>

            <form method="GET" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="pwd"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a56db]"
                  placeholder="Enter password"
                  autoFocus
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#1a56db] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Access Dashboard
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Fetch leads from Supabase
  const { data: leads, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-600 font-semibold">Error loading leads:</p>
          <p className="text-gray-600">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Leads Dashboard</h1>
            <ExportButton leads={leads ?? []} />
          </div>
          <p className="text-gray-600 mt-2">
            Total leads: <span className="font-bold text-[#1a56db]">{leads?.length || 0}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!leads || leads.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-500">No leads yet</p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                        Phone
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                        ZIP
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                        Vehicle
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                        Insured
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                        TrustedForm
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                        LeadID
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {(leads ?? []).map((lead: Lead) => (
                      <tr key={lead.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {lead.first_name} {lead.last_name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {lead.email}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {lead.phone}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {lead.zip_code}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {lead.vehicle_year} {lead.vehicle_make}{" "}
                          {lead.vehicle_model}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                          {lead.currently_insured === "yes" ? (
                            <span className="text-green-600">✓ Yes</span>
                          ) : (
                            <span className="text-red-600">✗ No</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {lead.trusted_form_cert_url ? (
                            <span className="text-green-600 font-bold">✓</span>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {lead.lead_id || "—"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {new Date(lead.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {(leads ?? []).map((lead: Lead) => (
                <div
                  key={lead.id}
                  className="bg-white rounded-lg shadow p-4 space-y-3"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {lead.first_name} {lead.last_name}
                      </h3>
                      <p className="text-sm text-gray-600">{lead.email}</p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500">Phone</p>
                      <p className="font-medium text-gray-900">{lead.phone}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">ZIP</p>
                      <p className="font-medium text-gray-900">{lead.zip_code}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Vehicle</p>
                      <p className="font-medium text-gray-900 text-xs">
                        {lead.vehicle_year} {lead.vehicle_make}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Insured</p>
                      <p
                        className={`font-medium ${
                          lead.currently_insured === "yes"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {lead.currently_insured === "yes" ? "Yes" : "No"}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-200 flex justify-between text-xs">
                    <span>
                      TrustedForm:{" "}
                      {lead.trusted_form_cert_url ? (
                        <span className="text-green-600 font-bold">✓</span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </span>
                    <span>LeadID: {lead.lead_id || "—"}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
