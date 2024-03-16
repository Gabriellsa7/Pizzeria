import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://waxufuwmyohdpeovmzjn.supabase.co";
const SERVICE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndheHVmdXdteW9oZHBlb3ZtempuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3MDQ1MTQsImV4cCI6MjAyNDI4MDUxNH0.PEBkg9EFdGLNlHEOW5_uK2CXpJkCUQXwFSgxp1D1Jtc";

export const supabase = createClient(SUPABASE_URL, SERVICE_KEY);
