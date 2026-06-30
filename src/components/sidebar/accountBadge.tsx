import { Link } from "react-router-dom";
import { appRoutes } from "../../routes";

export function AccountBadge({ userName }: { userName: string | null }) {
  return (
    <span className="flex items-center gap-2 mt-1 ml-2 text-xs font-semibold mt-3 py-4 border-t border-gray-700 flex-1">
      {userName ? (
        <>
          <div className="bg-[var(--primary-color-light)] text-[var(--text)] px-2 py-1 rounded-full">
            {userName.charAt(0).toUpperCase()}
          </div>
          <span className="truncate">Minha conta</span>
        </>
      ) : (
        <Link to={appRoutes.SIGN_UP.path} className="flex items-center gap-2">
          <img src="/user.png" className="h-6" />
          <span>Login</span>
        </Link>
      )}
    </span>
  );
}