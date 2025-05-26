import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vihdejdhouasksfmldlv.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpaGRlamRob3Vhc2tzZm1sZGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyODcwNTAsImV4cCI6MjA2Mzg2MzA1MH0._3z56pwXSXSEU9icEKrbavVwwqxKwVUi771SHtz7SWQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
