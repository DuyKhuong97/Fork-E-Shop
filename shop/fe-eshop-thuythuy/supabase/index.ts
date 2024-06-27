import { createClient } from "@supabase/supabase-js";

const key =
  process.env.SUPABASE_PROJECT_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4Z2JteXBla2N3eXplb2xkbWh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5Mzg2NDQsImV4cCI6MjAwMDUxNDY0NH0.uT8up-rZGL3F8gRQrB_VS4Ff02ET9GQKCQ_zumRfWfM";
const url =
  process.env.SUPABASE_PROJECT_URL ||
  "https://hxgbmypekcwyzeoldmhx.supabase.co";
const supabase = createClient(url, key);

export default supabase;
