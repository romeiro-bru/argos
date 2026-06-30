import { useState } from "react";
import { supabase } from "../../../supabase-client";
import type { Session } from "@supabase/supabase-js";
import { LogoutIcon } from "../../assets/logout";

interface LogoutButtonProps {
  session: Session | null;
  isLoading: boolean;
}

interface HandleLogoutProps {
  setIsLoggingOut: React.Dispatch<React.SetStateAction<boolean>>;
}

export async function handleLogout({ setIsLoggingOut }: HandleLogoutProps) {
  setIsLoggingOut(true);
  try {
    await supabase.auth.signOut();
  } finally {
    setIsLoggingOut(false);
  }
}

function getButtonText(session: Session | null, isLoggingOut: boolean) {
  if (session && isLoggingOut) {
    return (
      <div className="flex gap-2 items-center">
        <LogoutIcon width="15" />
        Saindo...
      </div>
    );
  }

  if (session) {
    return (
      <div className="flex gap-2 items-center">
        <LogoutIcon width="15" />
        Sair
      </div>
    );
  }
  return;
}

export function LogoutButton({ session, isLoading }: LogoutButtonProps) {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  return (
    <>
      {session && (
        <button
          onClick={() => handleLogout({ setIsLoggingOut })}
          disabled={isLoading || isLoggingOut}
          className="text-xs font-medium ml-4 cursor-pointer hover:opacity-60 disabled:cursor-not-allowed"
        >
          {getButtonText(session, isLoggingOut)}
        </button>
      )}
    </>
  );
}
