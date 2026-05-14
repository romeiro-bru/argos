import { Link, useLocation } from "react-router-dom";

interface RoutesInterface {
    path: string,
    meta: {
        label: string
    }
}

export const appRoutes = {
  HOME: {
    path: "/",
    meta: {
      label: "Home",
      icon: (<img className="w-8" src="favicon.png" />)
    }
  },
  FAVORITES: {
    path: "/favorites",
    meta: {
        label: "Favorites"
    }
  }

};

export function Sidebar() {   
  const location = useLocation();
  const isActive = (route: RoutesInterface) =>
    location.pathname.startsWith(route.path);

  return (
    <nav className="flex flex-col items-center w-40 text-[var(--text)] bg-[var(--primary-color)]">
      {/* HOME */}
      <Link
        className="flex items-center w-full px-3 mt-3"
        to={appRoutes.HOME.path}
      >
       {appRoutes.HOME.meta.icon}
        <span className="ml-2 text-sm font-bold">Argos</span>
      </Link>

      <div className="w-full px-2">
        <div className="flex flex-col w-full mt-3 border-t border-gray-700">
          {Object.values(appRoutes).map((route) => {
            return (
              <div key={route.path} className="w-full">
                {/* ITEM PRINCIPAL */}
                <Link
                  to={route.path}
                  className={`flex items-center w-full px-3 py-2 mt-2 rounded hover:bg-gray-700 hover:text-[var(--text-hover)] ${
                    isActive(route)
                      ? "bg-gray-700 text-[var(--text-hover)]"
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