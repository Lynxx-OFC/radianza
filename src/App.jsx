import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Bot from "./pages/Bot";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/dashboard/Dashboard";
import Modules from "./pages/dashboard/Modules";
import Commands from "./pages/dashboard/Commands";
import Analytics from "./pages/dashboard/Analytics";
import Settings from "./pages/dashboard/Settings";
import Premium from "./pages/dashboard/Premium";
import Logs from "./pages/dashboard/Logs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Old Bot Page */}
        <Route path="/bot" element={<Bot />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="modules" element={<Modules />} />
          <Route path="commands" element={<Commands />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="logs" element={<Logs />} />
          <Route path="premium" element={<Premium />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}