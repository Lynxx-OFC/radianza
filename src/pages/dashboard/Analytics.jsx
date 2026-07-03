import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Users,
  Activity,
  MessageCircle,
  Bot,
} from "lucide-react";

const data = [
  { day: "Mon", users: 120, commands: 320 },
  { day: "Tue", users: 170, commands: 420 },
  { day: "Wed", users: 250, commands: 510 },
  { day: "Thu", users: 290, commands: 640 },
  { day: "Fri", users: 360, commands: 710 },
  { day: "Sat", users: 470, commands: 880 },
  { day: "Sun", users: 540, commands: 1010 },
];

const cards = [
  {
    title: "Members",
    value: "12,483",
    icon: Users,
  },
  {
    title: "Commands",
    value: "38,420",
    icon: Bot,
  },
  {
    title: "Messages",
    value: "128,942",
    icon: MessageCircle,
  },
  {
    title: "Uptime",
    value: "99.98%",
    icon: Activity,
  },
];

export default function Analytics() {
  return (
    <>
      <div className="mb-10">

        <h1 className="text-4xl font-bold">

          Analytics

        </h1>

        <p className="text-gray-400 mt-2">

          Server statistics and bot performance.

        </p>

      </div>

      {/* Stats */}

      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5 mb-8">

        {cards.map((card) => {

          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="bg-slate-900 border border-white/10 rounded-3xl p-6"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-400">

                    {card.title}

                  </p>

                  <h2 className="text-3xl font-bold mt-2">

                    {card.value}

                  </h2>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">

                  <Icon className="text-blue-400" />

                </div>

              </div>

            </div>
          );

        })}

      </div>

      {/* Chart */}

      <div className="bg-slate-900 border border-white/10 rounded-3xl p-6">

        <h2 className="text-xl font-semibold mb-6">

          Weekly Activity

        </h2>

        <div className="h-[420px]">

          <ResponsiveContainer>

            <AreaChart data={data}>

              <defs>

                <linearGradient id="users" x1="0" y1="0" x2="0" y2="1">

                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />

                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />

                </linearGradient>

              </defs>

              <CartesianGrid stroke="#1E293B" />

              <XAxis stroke="#64748B" dataKey="day" />

              <YAxis stroke="#64748B" />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="commands"
                stroke="#3B82F6"
                fill="url(#users)"
                strokeWidth={3}
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>
    </>
  );
}