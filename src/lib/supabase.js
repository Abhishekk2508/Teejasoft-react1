import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// db password: GpQSPBUW4/cn?wN

// anon
// public:
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhcnpiaG1pYXV6YWJoZXl2bHRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2ODc3ODAsImV4cCI6MjA4ODI2Mzc4MH0.24QrlthNORM_TXXEQYBUvUUePrKdw9Lw_xeyi7hMbzA
// project url: https://larzbhmiauzabheyvltk.supabase.co