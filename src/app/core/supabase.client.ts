import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://graawvkceantfwenbqen.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyYWF3dmtjZWFudGZ3ZW5icWVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1Mjc3MjUsImV4cCI6MjA2MzEwMzcyNX0.YpijYA0_jRSJUc49TDiNaVOGH2gP7zVF448duUDuhN4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);