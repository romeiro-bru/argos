import { supabase } from "../../../../supabase-client";

function loginUser(email: string, password: string) {
  return supabase.auth.signInWithPassword({
    email,
    password,
  });
}

function signupUser(name: string, email: string, password: string) {
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

export const service = {
  signupUser,
  loginUser,
};
