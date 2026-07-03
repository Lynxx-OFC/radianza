import {
  Shield,
  UserPlus,
  Trash2,
  Terminal,
  Clock3,
  Search,
} from "lucide-react";

const logs = [
  {
    icon: UserPlus,
    color: "text-green-400",
    title: "Member Joined",
    user: "AsepGaming",
    time: "2 minutes ago",
  },
  {
    icon: Shield,
    color: "text-blue-400",
    title: "Moderator Action",
    user: "Tot",
    time: "8 minutes ago",
  },
  {
    icon: Trash2,
    color: "text-red-400",
    title: "Message Deleted",
    user: "NightBot",
    time: "15 minutes ago",
  },
  {
    icon: Terminal,
    color: "text-yellow-400",
    title: "Command Executed",
    user: "/ban @user",
    time: "22 minutes ago",
  },
  {
    icon: Shield,
    color: "text-cyan-400",
    title: "AutoMod Triggered",
    user: "Spam detected",
    time: "40 minutes ago",
  },
];

export default function Logs() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            Activity Logs
          </h1>

          <p className="text-gray-400 mt-2">
            Recent activities from your Discord bot.
          </p>
        </div>
      </div>

      {/* Search */}

      <div className="relative mb-8">

        <Search
          size={18}
          className="absolute left-4 top-4 text-gray-500"
        />

        <input
          placeholder="Search activity..."
          className="w-full bg-slate-900 border border-white/10 rounded-2xl py-4 pl-12 pr-5 outline-none focus:border-blue-500"
        />

      </div>

      {/* Timeline */}

      <div className="space-y-5">

        {logs.map((log, index) => {
          const Icon = log.icon;

          return (
            <div
              key={index}
              className="bg-slate-900 border border-white/10 rounded-2xl p-5 flex items-center justify-between hover:border-blue-500 transition"
            >
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center">

                  <Icon
                    className={log.color}
                    size={24}
                  />

                </div>

                <div>

                  <h3 className="font-semibold">

                    {log.title}

                  </h3>

                  <p className="text-sm text-gray-400">

                    {log.user}

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2 text-gray-500">

                <Clock3 size={16} />

                {log.time}

              </div>

            </div>
          );
        })}

      </div>
    </>
  );
}