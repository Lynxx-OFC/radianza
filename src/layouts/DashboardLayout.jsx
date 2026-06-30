import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#070B14] text-white flex">
      <Sidebar />

      <div className="flex-1 overflow-hidden">
        <Header />

        <main className="p-8 overflow-y-auto h-[calc(100vh-88px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}