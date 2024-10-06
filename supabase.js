import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ibtqqypbjddszazggxmp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlidHFxeXBiamRkc3phemdneG1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2ODIyNDUsImV4cCI6MjAzODI1ODI0NX0.at4Xeh-p-biNnzT-Vu9qS6X6xT9VDkRqEpmilQsfH6M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
