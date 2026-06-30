import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Activity,
  Bot,
  Zap,
} from "lucide-react";

export default function Welcome() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mb-10"
    >
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#0f172a] p-10">

        {/* Glow */}

        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

          {/* LEFT */}

          <div className="max-w-2xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 backdrop-blur">

              <Sparkles size={16} />

              <span className="text-sm">

                Radianza Dashboard v2

              </span>

            </div>

            <h1 className="text-5xl font-black leading-tight lg:text-6xl">

              Manage your
              <br />

              Discord Bot
              <span className="text-cyan-300">

                {" "}
                effortlessly.

              </span>

            </h1>

            <p className="mt-6 max-w-xl text-blue-100 text-lg">

              Configure modules, monitor analytics,
              manage commands, and control every aspect
              of your Discord bot from one modern dashboard.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 transition hover:scale-105">

                Open Dashboard

                <ArrowRight size={18} />

              </button>

              <button className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur transition hover:bg-white/20">

                Documentation

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="grid w-full max-w-md grid-cols-2 gap-5">

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">

              <Bot
                className="mb-4 text-cyan-300"
                size={34}
              />

              <h3 className="text-4xl font-bold">

                152

              </h3>

              <p className="mt-2 text-blue-100">

                Servers

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">

              <ShieldCheck
                className="mb-4 text-green-300"
                size={34}
              />

              <h3 className="text-4xl font-bold">

                99.9%

              </h3>

              <p className="mt-2 text-blue-100">

                Uptime

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">

              <Activity
                className="mb-4 text-yellow-300"
                size={34}
              />

              <h3 className="text-4xl font-bold">

                24ms

              </h3>

              <p className="mt-2 text-blue-100">

                Ping

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">

              <Zap
                className="mb-4 text-pink-300"
                size={34}
              />

              <h3 className="text-4xl font-bold">

                18K

              </h3>

              <p className="mt-2 text-blue-100">

                Users

              </p>

            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
}