import {
  Server,
  Users,
  Wifi,
  Zap,
} from "lucide-react";

import StatCard from "./StatCard";

export default function Stats() {
  return (
    <section className="mb-10">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">

            Statistics

          </h2>

          <p className="mt-1 text-gray-400">

            Real-time overview of your Discord bot.

          </p>

        </div>

        <button className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 hover:border-blue-500 transition">

          Refresh

        </button>

      </div>

      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">

        <StatCard
          title="Servers"
          value="152"
          icon={Server}
          color="text-blue-400"
          bg="bg-blue-500/10"
          change="+15%"
        />

        <StatCard
          title="Users"
          value="18.2K"
          icon={Users}
          color="text-cyan-400"
          bg="bg-cyan-500/10"
          change="+31%"
        />

        <StatCard
          title="Ping"
          value="24ms"
          icon={Wifi}
          color="text-green-400"
          bg="bg-green-500/10"
          change="-4%"
        />

        <StatCard
          title="Commands"
          value="74"
          icon={Zap}
          color="text-yellow-400"
          bg="bg-yellow-500/10"
          change="+12%"
        />

      </div>

    </section>
  );
}