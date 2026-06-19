import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { Footer } from "./footer";
export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col px-4 pt-8">
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
