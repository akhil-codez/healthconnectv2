// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pvoucwwtmrgpvxjunyyf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2b3Vjd3d0bXJncHZ4anVueXlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3NjYxMjQsImV4cCI6MjA1OTM0MjEyNH0.Gc6R_0UoiVi0b6DamkBy8cgaKa6X0VkiwWF2A19XF-E";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);