import type { Session } from "@supabase/supabase-js";
import { useLogout } from "./useLogout";
import { getLogoutStatusText } from "./getLogoutStatusText";

interface LogoutButtonProps {
  session: Session | null;
  isLoading: boolean;
  onError: (message: string) => void;
}

export function LogoutButton({
  session,
  isLoading,
  onError,
}: LogoutButtonProps) {
  const { isLoggingOut, logout } = useLogout(onError);

  return (
    <>
      {session && (
        <button
          onClick={logout}
          disabled={isLoading || isLoggingOut}
          className="text-xs font-medium ml-4 cursor-pointer hover:opacity-60 disabled:cursor-not-allowed"
        >
          {getLogoutStatusText(session, isLoggingOut)}
        </button>
      )}
    </>
  );
}
