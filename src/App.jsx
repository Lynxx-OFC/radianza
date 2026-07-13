import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Bot from "./pages/Bot";
import Login from "./pages/Login";

// IMPORT DASHBOARD BOT WA KAMU DI SINI
import BotWaDashboard from "./pages/BotWa"; // Pastikan nama file di folder src/pages/BotWa.jsx sama persis ukurannya

import DashboardLayout from "./layouts/DashboardLayout";
import Topup from "./pages/Topup";

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

        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/bot" element={<Bot />} />
        
        {/* JALUR BARU UNTUK DASHBOARD BOT WA KAMU */}
        <Route path="/botwa" element={<BotWaDashboard />} />
        <Route path="/topup" element={<Topup />} />
        
        <Route path="/login" element={<Login />} />

        {/* PROTECTED (dashboard nanti) */}
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