"use client";

import { useEffect } from "react";

export default function TrustedForm() {
  useEffect(() => {
    // Inject TrustedForm script
    const script = document.createElement("script");
    script.src = "https://api.trustedform.com/trustedform.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <input
      type="hidden"
      id="xxTrustedFormCertUrl"
      name="xxTrustedFormCertUrl"
    />
  );
}
