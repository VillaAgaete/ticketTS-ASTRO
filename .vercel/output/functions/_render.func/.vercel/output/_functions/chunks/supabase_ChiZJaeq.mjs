import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://mghqqijimtvnhyywczej.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1naHFxaWppbXR2bmh5eXdjemVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyNTIzMzQsImV4cCI6MjA0MjgyODMzNH0.jaCIWpROFFrkSZH5Zq_5Qxtl2Cxqg67PEsUIqyldcVs";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase as s };
