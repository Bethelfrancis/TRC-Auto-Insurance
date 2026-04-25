"use client";

import { useEffect } from "react";

export default function Jornaya() {
  useEffect(() => {
    // Inject Jornaya LeadiD script
    const script = document.createElement("script");
    script.src = "https://load.leadid.com/lead.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return <input type="hidden" id="leadid_token" name="leadid_token" />;
}
