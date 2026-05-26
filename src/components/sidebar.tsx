import { Link, useLocation } from "react-router-dom";
import { appRoutes } from "./routes";

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

      <div className="flex items-center mt-4">
        <span className="ml-4 text-2xl font-bold">Argos</span>
        {appRoutes.HOME.meta.icon}
      </div>

      <div className="w-full px-2">
        <div className="flex flex-col w-full mt-3 border-t border-gray-700">
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
        </div>
      </div>
    </nav>
  );
}
