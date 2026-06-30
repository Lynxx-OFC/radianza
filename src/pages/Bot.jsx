import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import Welcome from "../components/dashboard/Welcome";
import Stats from "../components/dashboard/Stats";
import QuickActions from "../components/dashboard/QuickActions";
import Modules from "../components/dashboard/Modules";
import Activity from "../components/dashboard/Activity";
import Analytics from "../components/dashboard/Analytics";

export default function Bot() {
  return (
    <div className="flex bg-[#070B14] text-white min-h-screen">

      <Sidebar />

      <main className="flex-1 p-10 overflow-y-auto">

        <Header />

        <Welcome />

        <Stats />

        <Analytics />

        <QuickActions />

        <Modules />

        <Activity />

      </main>

    </div>
  );
}