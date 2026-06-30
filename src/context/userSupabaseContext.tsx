import React, { createContext, useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "../../supabase-client";

interface UserContextType {
  session: Session | null;
  userName: string | null;
  isLoading: boolean;
}

export const UserSupabaseContext = createContext<UserContextType | null>(null);

export function UserSupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = useState<Session | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const extractUserName = (userSession: Session | null): string | null => {
    return userSession?.user?.user_metadata?.name ?? null;
  };

  
  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        setSession(session);
        setUserName(extractUserName(session));
      })
      .catch((error) => {
        console.error("Erro ao buscar sessão:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUserName(extractUserName(session));
      }
    );

    return () => subscription?.unsubscribe();
  }, []);

  const value: UserContextType = {
    session,
    userName,
    isLoading,
  };

  return (
    <UserSupabaseContext.Provider value={value}>
      {children}
    </UserSupabaseContext.Provider>
  );
}

// Hook customizado para usar o context
export function useUserSupabase() {
  const context = React.useContext(UserSupabaseContext);
  if (!context) {
    throw new Error("useUserSupabase deve ser usado dentro de UserSupabaseProvider");
  }
  return context;
}
