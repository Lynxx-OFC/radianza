import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", users: 320 },
  { day: "Tue", users: 510 },
  { day: "Wed", users: 430 },
  { day: "Thu", users: 720 },
  { day: "Fri", users: 640 },
  { day: "Sat", users: 910 },
  { day: "Sun", users: 850 },
];

export default function Analytics() {
  return (
    <section className="mb-10">

      <div className="flex justify-between items-end mb-6">

        <div>

          <h2 className="text-3xl font-bold">

            Analytics

          </h2>

          <p className="text-gray-400 mt-2">

            Weekly server activity

          </p>

        </div>

        <button className="px-5 py-3 rounded-xl bg-slate-900 border border-white/10 hover:border-blue-500 transition">

          Last 7 Days

        </button>

      </div>

      <div className="rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-white/10 p-6">

        <ResponsiveContainer width="100%" height={350}>

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="colorUsers"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#3B82F6"
                  stopOpacity={0.8}
                />

                <stop
                  offset="100%"
                  stopColor="#3B82F6"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#334155"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="day"
              stroke="#94A3B8"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="users"
              stroke="#3B82F6"
              fill="url(#colorUsers)"
              strokeWidth={3}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </section>
  );
}