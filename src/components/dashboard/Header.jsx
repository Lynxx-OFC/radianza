import { motion } from "framer-motion";
import {
  Bell,
  Search,
  Moon,
  Settings,
  ChevronDown,
  Shield,
  Sparkles,
  Wifi,
  Command,
} from "lucide-react";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mb-8"
    >
      <div className="flex items-center justify-between gap-6">

        {/* LEFT */}

        <div className="flex items-center gap-5">

          {/* Server */}

          <button className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl px-5 py-3 hover:border-blue-500 transition-all">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 shadow-lg shadow-blue-500/20">

              <Shield size={22} />

            </div>

            <div className="text-left">

              <p className="text-xs text-gray-500">

                Current Server

              </p>

              <h2 className="font-semibold text-white">

                Radianza Community

              </h2>

            </div>

            <ChevronDown
              size={18}
              className="text-gray-500 group-hover:text-white transition"
            />

          </button>

          {/* Status */}

          <div className="hidden lg:flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-2">

            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

            <span className="text-sm text-green-300">

              All Systems Operational

            </span>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-4">

          {/* Search */}

          <div className="relative hidden lg:block">

            <Search
              size={18}
              className="absolute left-4 top-3.5 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search modules..."
              className="w-80 rounded-2xl border border-white/10 bg-slate-900/70 py-3 pl-12 pr-5 outline-none backdrop-blur-xl transition-all focus:border-blue-500"
            />

          </div>

          {/* Ping */}

          <div className="hidden xl:flex items-center gap-2 rounded-xl bg-slate-900 border border-white/10 px-4 py-3">

            <Wifi size={16} className="text-green-400" />

            <span className="text-sm">

              24 ms

            </span>

          </div>

          {/* Commands */}

          <div className="hidden xl:flex items-center gap-2 rounded-xl bg-slate-900 border border-white/10 px-4 py-3">

            <Command size={16} className="text-blue-400" />

            <span className="text-sm">

              74 Commands

            </span>

          </div>

          {/* Notification */}

          <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 hover:border-blue-500 transition">

            <Bell size={18} />

            <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500" />

          </button>

          {/* Theme */}

          <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 hover:border-blue-500 transition">

            <Moon size={18} />

          </button>

          {/* Settings */}

          <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 hover:border-blue-500 transition">

            <Settings size={18} />

          </button>

          {/* Profile */}

          <button className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900 px-3 py-2 transition hover:border-blue-500">

            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="profile"
              className="h-12 w-12 rounded-full border-2 border-blue-500"
            />

            <div className="hidden text-left lg:block">

              <h3 className="font-semibold text-white">

                Tot

              </h3>

              <div className="flex items-center gap-2">

                <Sparkles
                  size={13}
                  className="text-yellow-400"
                />

                <p className="text-xs text-gray-400">

                  Administrator

                </p>

              </div>

            </div>

          </button>

        </div>

      </div>
    </motion.header>
  );
}