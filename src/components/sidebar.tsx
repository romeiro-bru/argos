import { Link, useLocation, useNavigate } from "react-router-dom";
import { appRoutes } from "../routes";
import { supabase } from "../../supabase-client";
import { useUserSupabase } from "../context/userSupabaseContext";
import type { Session } from "@supabase/supabase-js";
import { useState } from "react";

interface RoutesInterface {
  path: string;
  meta: {
    label: string;
  };
}

function getButtonText(session: Session | null, isLoaggingOut: boolean) {
  if (session && isLoaggingOut) return "Saindo...";
  if (session) return "logout";
  return "login";
}

export function Sidebar() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { userName, isLoading, session } = useUserSupabase();

  const handleSessionButton = () =>
    session ? handleLogout() : navigate(appRoutes.SIGN_UP.path);

  async function handleLogout() {
    setIsLoggingOut(true);
    try {
      await supabase.auth.signOut();
    } finally {
      setIsLoggingOut(false);
    }
  }

  const isActive = (route: RoutesInterface) => {
    if (route.path === "/") {
      return location.pathname === "/";
    }
    // Remove parâmetros dinâmicos da rota (tudo depois de ":")
    const routeBase = route.path.split(":")?.[0] || route.path;
    return location.pathname.startsWith(routeBase);
  };

  return (
    <nav className="flex flex-col items-center w-40 text-[var(--text)] bg-[var(--primary-color)]">
      {/* HOME */}

      <Link to={appRoutes.LANDING.path}>
        <div className="flex items-center mt-4">
          <span className="ml-4 text-2xl font-bold">Argos</span>
          {appRoutes.LANDING.meta.icon}
        </div>
      </Link>

      <div className="flex flex-col flex-1 w-full px-2">
        <div className="flex flex-col w-full mt-3 border-t border-gray-700 flex-1">
          {Object.values(appRoutes)
            .filter((route) => route.meta.showInSidebar)
            .map((route) => {
              return (
                <div key={route.path} className="w-full">
                  {/* ITEM PRINCIPAL */}
                  <Link
                    to={route.path}
                    className={`flex items-center w-full px-3 py-2 mt-2 rounded hover:bg-[var(--bg-hover)] hover:text-[var(--text-hover)] ${
                      isActive(route)
                        ? "bg-[var(--bg-hover)] text-[var(--text-hover)]"
                        : ""
                    }`}
                  >
                    <span className="ml-2 text-sm font-medium">
                      {route.meta.label}
                    </span>
                  </Link>
                </div>
              );
            })}

          <button
            onClick={handleSessionButton}
            disabled={isLoading}
            className="text-sm font-medium border-1 border-[var(--bg-hover)] rounded-lg py-1 mt-2 cursor-pointer hover:opacity-60 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {getButtonText(session, isLoggingOut)}
          </button>
          <span className="flex items-center gap-2 mt-auto pb-8 ml-2 text-xs font-semibold">
            {userName ? (
              <>
                <div className="bg-[var(--primary-color-light)] text-[var(--text)] px-2 py-1 rounded-full">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <span className="truncate">Minha conta</span>
              </>
            ) : (
              <>
                <img src="/user.png" className="h-6" />
                <span>Minha conta</span>
              </>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
}
