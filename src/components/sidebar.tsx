import { Link, useLocation } from "react-router-dom";
import { appRoutes } from "../routes";

interface RoutesInterface {
  path: string;
  meta: {
    label: string;
  };
}

export function Sidebar() {
  const location = useLocation();
  const isActive = (route: RoutesInterface) => {
    if (route.path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith("/" + route.path);
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
          <span className="flex items-center gap-2 mt-auto pb-8 ml-2 text-xs font-medium">
            <img src="/user.png" className="h-6" />
            Minha conta
          </span>
        </div>
      </div>
    </nav>
  );
}
