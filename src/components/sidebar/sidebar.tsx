import { Link, useLocation } from "react-router-dom";
import { appRoutes } from "../../routes";
import { useUserSupabase } from "../../context/userSupabaseContext";
import { isActive } from "./isActive";
import { LogoutButton } from "./logoutButton";
import { AccountBadge } from "./accountBadge";
import { ErrorModal } from "../modalError";
import { useState } from "react";

export function Sidebar() {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { userName, isLoading, session } = useUserSupabase();
  const { pathname } = useLocation();

  return (
    <nav className="flex flex-col items-center w-40 text-[var(--text)] bg-[var(--primary-color)]">
      <Link to={appRoutes.LANDING.path}>
        <div className="flex items-center mt-4">
          <span className="ml-4 text-2xl font-bold">Argos</span>
          {appRoutes.LANDING.meta.icon}
        </div>
      </Link>

      <div className="flex flex-col flex-1 w-full px-2">
        <div className="flex flex-col w-full">
          {Object.values(appRoutes)
            .filter((route) => route.meta.showInSidebar)
            .map((route) => {
              return (
                <div key={route.path} className="w-full">
                  {/* ITEM PRINCIPAL */}
                  <Link
                    to={route.path}
                    className={`flex items-center w-full px-3 py-2 mt-2 rounded hover:bg-[var(--bg-hover)] hover:text-[var(--text-hover)] ${
                      isActive({ route, pathname })
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

          <AccountBadge userName={userName} />
          <LogoutButton 
            session={session} 
            isLoading={isLoading} 
            onError={(message) => {
              setErrorMessage(message);
              setShowError(true);
            }}
          />
        </div>
      </div>

      <ErrorModal
        isOpen={showError}
        onClose={() => setShowError(false)}
        title="Erro ao fazer logout"
        message={errorMessage}
        actionLabel="Tentar novamente"
        onAction={() => setShowError(false)}
      />
    </nav>
  );
}
