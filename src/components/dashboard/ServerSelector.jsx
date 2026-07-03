import { useState } from "react";
import { ChevronDown, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const servers = [
  {
    id: "1",
    name: "Radianza Community",
    members: "1,824 Members",
  },
  {
    id: "2",
    name: "Anime Indonesia",
    members: "8,132 Members",
  },
  {
    id: "3",
    name: "Gaming Hub",
    members: "12,981 Members",
  },
  {
    id: "4",
    name: "Developer Lounge",
    members: "5,421 Members",
  },
];

export default function ServerSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(servers[0]);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-2xl bg-slate-900 border border-white/10 px-4 py-2 hover:border-blue-500 transition"
      >
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
          <Shield size={18} />
        </div>

        <div className="text-left">
          <p className="text-xs text-gray-400">
            Server
          </p>

          <h2 className="font-semibold">
            {selected.name}
          </h2>
        </div>

        <ChevronDown
          size={16}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute mt-3 w-80 rounded-2xl bg-slate-900 border border-white/10 overflow-hidden z-50 shadow-2xl"
          >
            {servers.map((server) => (
              <button
                key={server.id}
                onClick={() => {
                  setSelected(server);
                  setOpen(false);
                }}
                className="w-full px-5 py-4 hover:bg-slate-800 transition text-left"
              >
                <h3 className="font-semibold">
                  {server.name}
                </h3>

                <p className="text-sm text-gray-400">
                  {server.members}
                </p>
              </button>
            ))}
          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}