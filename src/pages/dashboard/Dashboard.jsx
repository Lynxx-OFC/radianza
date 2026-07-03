import Welcome from "../../components/dashboard/Welcome";
import Stats from "../../components/dashboard/Stats";
import Analytics from "../../components/dashboard/Analytics";
import Modules from "../../components/dashboard/Modules";
import QuickActions from "../../components/dashboard/QuickActions";
import Activity from "../../components/dashboard/Activity";

export default function Dashboard() {
  return (
    <>
      <Welcome />

      <Stats />

      <Analytics />

      <QuickActions />

      <Modules />

      <Activity />
    </>
  );
}