import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../../supabase-client";
import { appRoutes } from "../../../routes";

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
        : "Erro inesperado ao fazer logout. Tente novamente.",
    );
  } finally {
    setIsLoggingOut(false);
  }
}

export function useLogout(onError: (message: string) => void) {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  const logout = () => handleLogout({ setIsLoggingOut, navigate, onError });

  return { isLoggingOut, logout };
}
