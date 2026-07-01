import { useState } from "react";
import { supabase } from "../../../supabase-client";
import type { Session } from "@supabase/supabase-js";
import { LogoutIcon } from "../../assets/logout";
import { appRoutes } from "../../routes";
import { useNavigate } from "react-router-dom";

interface LogoutButtonProps {
  session: Session | null;
  isLoading: boolean;
  onError: (message: string) => void;
}

interface HandleLogoutProps {
  setIsLoggingOut: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: ReturnType<typeof useNavigate>;
  onError: (message: string) => void;
}

export async function handleLogout({
  setIsLoggingOut,
  navigate,
  onError,
}: HandleLogoutProps) {
  setIsLoggingOut(true);
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      onError(error.message || "Erro ao fazer logout. Tente novamente.");
      return;
    }

    navigate(appRoutes.LANDING.path);
  } catch (error) {
    onError(
      error instanceof Error
        ? error.message
        : "Erro inesperado ao fazer logout. Tente novamente."
    );
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

export function LogoutButton({ session, isLoading, onError }: LogoutButtonProps) {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {session && (
        <button
          onClick={() =>
            handleLogout({
              setIsLoggingOut,
              navigate,
              onError,
            })
          }
          disabled={isLoading || isLoggingOut}
          className="text-xs font-medium ml-4 cursor-pointer hover:opacity-60 disabled:cursor-not-allowed"
        >
          {getButtonText(session, isLoggingOut)}
        </button>
      )}
    </>
  );
}
