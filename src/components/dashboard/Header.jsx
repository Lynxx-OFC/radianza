import {
  Bell,
  Search,
  Moon,
  Settings,
  Menu,
} from "lucide-react";
import { motion } from "framer-motion";
import ServerSelector from "./ServerSelector";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-between"
    >
      {/* Left */}

      <div className="flex items-center gap-5">

        <button className="w-11 h-11 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center hover:border-blue-500 transition">

          <Menu size={18} />

        </button>

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-3.5 text-gray-500"
          />

          <input
            placeholder="Search modules, commands..."
            className="w-[380px] bg-slate-900 border border-white/10 rounded-2xl py-3 pl-12 pr-5 outline-none focus:border-blue-500 transition"
          />

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Notifications */}

        <button className="relative w-11 h-11 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center hover:border-blue-500 transition">

          <Bell size={18} />

          <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />

        </button>

        {/* Theme */}

        <button className="w-11 h-11 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center hover:border-blue-500 transition">

          <Moon size={18} />

        </button>

        {/* Settings */}

        <button className="w-11 h-11 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center hover:border-blue-500 transition">

          <Settings size={18} />

        </button>

        {/* Server Selector */}

        <ServerSelector />

        {/* Profile */}

        <button className="flex items-center gap-3 rounded-2xl bg-slate-900 border border-white/10 px-3 py-2 hover:border-blue-500 transition">

          <div className="relative">

            <img
              src="https://i.pravatar.cc/150"
              alt="profile"
              className="w-11 h-11 rounded-full"
            />

            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-slate-900" />

          </div>

          <div className="text-left">

            <h3 className="font-semibold">

              Tot

            </h3>

            <p className="text-xs text-gray-400">

              Administrator

            </p>

          </div>

        </button>

      </div>
    </motion.header>
  );
}