import { supabase } from "../../../../supabase-client";

export function loginUser(email: string, password: string) {
  return supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export function signupUser(name: string, email: string, password: string) {
  return supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });
}
