import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-[#070B14] text-white overflow-hidden">

      {/* Sidebar */}

      <Sidebar />

      {/* Content */}

      <div className="flex flex-1 flex-col overflow-hidden">

        {/* Header */}

        <div className="border-b border-white/5 bg-[#070B14]/80 backdrop-blur-xl px-8 py-5">

          <Header />

        </div>

        {/* Main */}

        <main className="flex-1 overflow-y-auto px-8 py-8">

          <Outlet />

        </main>

      </div>

    </div>
  );
}