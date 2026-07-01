import type { Session } from "@supabase/supabase-js";
import { LogoutIcon } from "../../../assets/logout";

export function getLogoutStatusText(session: Session | null, isLoggingOut: boolean) {
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
