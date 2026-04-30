import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

// Debug: Check if environment variables are properly set
if (!supabaseUrl) {
  console.error(
    "❌ NEXT_PUBLIC_SUPABASE_URL is missing! Check your .env.local file."
  );
}

if (!supabaseServiceRoleKey) {
  console.error(
    "❌ SUPABASE_SERVICE_ROLE_KEY is missing! Check your .env.local file."
  );
}

// Debug: Validate URL format (should be https://xxxx.supabase.co, NOT include /rest/v1)
if (supabaseUrl && supabaseUrl.includes("/rest/v1")) {
  console.warn(
    "⚠️ WARNING: NEXT_PUBLIC_SUPABASE_URL contains '/rest/v1'. It should only be 'https://xxxx.supabase.co'"
  );
}

console.log("🔧 Supabase initialized with URL:", supabaseUrl?.split(".supabase.co")[0] + ".supabase.co");

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
