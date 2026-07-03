import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Boxes,
  Terminal,
  BarChart3,
  Settings,
  Crown,
  LifeBuoy,
  ChevronLeft,
  ChevronRight,
  Bot,
  Plus,
} from "lucide-react";

const menus = [
  {
    title: "Overview",
    items: [
      {
        icon: LayoutDashboard,
        name: "Dashboard",
        path: "/dashboard",
      },
    ],
  },

  {
    title: "Management",
    items: [
      {
        icon: Boxes,
        name: "Modules",
        path: "/dashboard/modules",
      },
      {
        icon: Terminal,
        name: "Commands",
        path: "/dashboard/commands",
      },
      {
        icon: BarChart3,
        name: "Analytics",
        path: "/dashboard/analytics",
      },
      {
        icon: Settings,
        name: "Settings",
        path: "/dashboard/settings",
      },
    ],
  },

  {
    title: "More",
    items: [
      {
        icon: Crown,
        name: "Premium",
        path: "/dashboard/premium",
      },
      {
        icon: LifeBuoy,
        name: "Logs",
        path: "/dashboard/logs",
      },
    ],
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      animate={{
        width: collapsed ? 90 : 290,
      }}
      transition={{
        duration: 0.25,
      }}
      className="sticky top-0 h-screen bg-[#090E18] border-r border-white/5 flex flex-col"
    >
      {/* Logo */}

      <div className="p-6 border-b border-white/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Bot size={22} />
            </div>

            {!collapsed && (
              <div>
                <h1 className="text-xl font-bold text-white">
                  Radianza
                </h1>

                <p className="text-xs text-gray-500">
                  Discord Dashboard
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-500 hover:text-white transition"
          >
            {collapsed ? (
              <ChevronRight size={18} />
            ) : (
              <ChevronLeft size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Invite */}

      {!collapsed && (
        <div className="p-5">
          <button className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 flex items-center justify-center gap-2 font-semibold hover:scale-[1.02] transition">
            <Plus size={18} />
            Invite Bot
          </button>
        </div>
      )}

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto px-4">
        {menus.map((group) => (
          <div key={group.title} className="mb-7">
            {!collapsed && (
              <p className="text-xs uppercase text-gray-500 mb-3 px-2 tracking-wider">
                {group.title}
              </p>
            )}

            {group.items.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) =>
                    `w-full flex items-center ${
                      collapsed ? "justify-center" : "gap-4"
                    } px-4 py-3 rounded-2xl mb-2 transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
                        : "text-gray-400 hover:bg-slate-800 hover:text-white"
                    }`
                  }
                >
                  <Icon size={20} />

                  {!collapsed && (
                    <span className="font-medium">
                      {item.name}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </div>
        ))}
      </div>

      {/* Server Card */}

      {!collapsed && (
        <div className="px-5">
          <div className="rounded-2xl bg-slate-900 border border-white/10 p-4">
            <p className="text-xs text-gray-500">
              Current Server
            </p>

            <h2 className="font-semibold mt-1">
              Radianza Community
            </h2>

            <p className="text-xs text-blue-400 mt-3">
              1,824 Members
            </p>
          </div>
        </div>
      )}

      {/* Profile */}

      <div className="border-t border-white/5 mt-5 p-5">
        <div
          className={`flex items-center ${
            collapsed ? "justify-center" : "gap-3"
          }`}
        >
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-blue-500"
          />

          {!collapsed && (
            <div>
              <h2 className="font-semibold">
                Tot
              </h2>

              <p className="text-xs text-gray-500">
                Administrator
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  );
}