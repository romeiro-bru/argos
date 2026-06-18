import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col px-4 pt-8">
        <div className="flex-1">
          <Outlet />
        </div>
        <footer className="border-t border-gray-300 mt-12 py-4">
          <ul className="flex justify-between items-center text-xs">
            <li className="flex flex-wrap items-center gap-2 font-semibold">
              <img src="/favicon.png" className="h-6" />
              Argos
            </li>
            <div className="flex flex-wrap gap-4">
              <li>Sobre</li>
              <li>Parceiros</li>
              <li>Privacidade</li>
              <li>Contato</li>
            </div>
          </ul>
        </footer>
      </div>
    </div>
  );
}
