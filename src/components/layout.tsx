import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 px-4 py-8">
        <Outlet />
      </div>
    </div>
  );
}
