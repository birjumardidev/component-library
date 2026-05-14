import { createClient } from "@supabase/supabase-js";

// Read Vite-provided env vars (must start with VITE_)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Minimal stub used when env vars are missing
const stub = {
  from: () => ({
    select: async () => ({ data: [], error: null }),
    insert: async () => ({ data: null, error: null }),
    update: async () => ({ data: null, error: null }),
    delete: async () => ({ data: null, error: null }),
  }),
  auth: {
    signIn: async () => ({
      data: null,
      error: new Error("Supabase not configured"),
    }),
    signOut: async () => ({
      data: null,
      error: new Error("Supabase not configured"),
    }),
  },
  storage: {
    from: () => ({
      upload: async () => ({
        data: null,
        error: new Error("Supabase not configured"),
      }),
    }),
  },
};

if (!supabaseUrl || !supabaseKey) {
  console.warn(
    "Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY environment variables.\n" +
      "Add them to a local .env.local (ignored by git) or set them in your hosting provider.",
  );
}

const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : stub;

export { supabase };
