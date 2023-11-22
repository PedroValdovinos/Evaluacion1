import { createClient } from '@supabase/supabase-js';

// Configura las credenciales de Supabase
const supabaseUrl = 'https://nxflmixyuutemaaqytpk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54ZmxtaXh5dXV0ZW1hYXF5dHBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1OTc2NTYsImV4cCI6MjAxMzE3MzY1Nn0.NMiNIGOchmzvUT8uUouxBB7DADQzqe30HHvlA5-v76c';

// Crea un cliente Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };