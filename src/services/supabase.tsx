import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mpliqcagpctlbqxwualw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wbGlxY2FncGN0bGJxeHd1YWx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyMzgxNzEsImV4cCI6MjA0MDgxNDE3MX0.wob3DHJrkR6UBx8leCI0wWWUsF0hvxf7SL9d0uppjOM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
