"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ClearLeadsButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pwd = searchParams.get("pwd") || "";

  const handleClearLeads = async () => {
    if (!window.confirm("Are you sure you want to delete ALL leads? This cannot be undone.")) {
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/clear-leads", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pwd }),
      });

      if (!response.ok) {
        alert("Failed to clear leads");
        return;
      }

      alert("All leads cleared successfully");
      router.refresh();
    } catch (error) {
      console.error("Error:", error);
      alert("Error clearing leads");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleClearLeads}
      disabled={isLoading}
      className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? "Clearing..." : "Clear All Leads"}
    </button>
  );
}
