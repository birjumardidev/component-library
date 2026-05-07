import { createClient } from '@supabase/supabase-js'

// Replace with your actual credentials from Step 1
const supabaseUrl = 'https://aghytijzirgzbplpaolg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnaHl0aWp6aXJnemJwbHBhb2xnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2NDk0NTAsImV4cCI6MjA5MTIyNTQ1MH0.YEUkKheWGG2JsV5HWGWHUCZQhMGuYYITU60AjG3_12Y'

export const supabase = createClient(supabaseUrl, supabaseKey)
