import { motion } from "framer-motion";
import {
  Settings2,
  ChevronRight,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";

export default function ModuleCard({
  title,
  description,
  enabled,
  icon: Icon,
  usage = 75,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: .2 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-6"
    >
      {/* Glow */}

      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative">

        {/* Header */}

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">

              <Icon
                size={26}
                className="text-blue-400"
              />

            </div>

            <div>

              <h2 className="font-bold text-lg">

                {title}

              </h2>

              <p className="text-gray-400 text-sm">

                {description}

              </p>

            </div>

          </div>

          {enabled ? (
            <ToggleRight
              size={36}
              className="text-green-400"
            />
          ) : (
            <ToggleLeft
              size={36}
              className="text-gray-500"
            />
          )}

        </div>

        {/* Usage */}

        <div className="mt-6">

          <div className="flex justify-between mb-2">

            <span className="text-sm text-gray-400">

              Usage

            </span>

            <span className="text-sm">

              {usage}%

            </span>

          </div>

          <div className="h-2 rounded-full bg-slate-800">

            <div
              style={{
                width: `${usage}%`,
              }}
              className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
            />

          </div>

        </div>

        {/* Footer */}

        <div className="mt-6 flex justify-between items-center">

          <span
            className={`text-sm px-3 py-1 rounded-full ${
              enabled
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >

            {enabled ? "Enabled" : "Disabled"}

          </span>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-xl">

            <Settings2 size={16} />

            Configure

            <ChevronRight size={15} />

          </button>

        </div>

      </div>

    </motion.div>
  );
}