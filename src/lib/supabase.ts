import { createClient } from '@supabase/supabase-js';

// Hardcoded Supabase configuration for troubleshooting
const supabaseUrl = 'https://wekwtribwbybapoudcnh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indla3d0cmlid2J5YmFwb3VkY25oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2NDg2NTgsImV4cCI6MjA5MTIyNDY1OH0.uxh5NaTiYDrMFT1XDE6HTGveNuOHASsfVSGOX-rDiKg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
