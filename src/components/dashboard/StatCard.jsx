import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "text-blue-400",
  bg = "bg-blue-500/10",
  change = "+12%",
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.2 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl"
    >
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative flex justify-between">

        <div>

          <p className="text-sm text-gray-400">

            {title}

          </p>

          <h2 className="mt-3 text-4xl font-bold">

            {value}

          </h2>

          <div className="mt-5 flex items-center gap-2">

            <ArrowUpRight
              size={15}
              className="text-green-400"
            />

            <span className="text-sm text-green-400">

              {change}

            </span>

            <span className="text-sm text-gray-500">

              this week

            </span>

          </div>

        </div>

        <div
          className={`h-14 w-14 rounded-2xl ${bg} flex items-center justify-center`}
        >

          <Icon
            size={28}
            className={color}
          />

        </div>

      </div>

      <div className="mt-6 h-2 rounded-full bg-slate-800">

        <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

      </div>

    </motion.div>
  );
}