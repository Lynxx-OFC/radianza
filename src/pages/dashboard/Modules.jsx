import { useState } from "react";
import {
  Shield,
  Bot,
  Music,
  Trophy,
  Bell,
  Ticket,
  ChevronRight,
} from "lucide-react";

const defaultModules = [
  {
    id: 1,
    name: "Moderation",
    description: "Protect your server with AutoMod & punishments.",
    icon: Shield,
    enabled: true,
    color: "text-blue-400",
  },
  {
    id: 2,
    name: "Welcome",
    description: "Welcome & goodbye messages for new members.",
    icon: Bot,
    enabled: true,
    color: "text-cyan-400",
  },
  {
    id: 3,
    name: "Music",
    description: "Music player & voice channel controls.",
    icon: Music,
    enabled: false,
    color: "text-purple-400",
  },
  {
    id: 4,
    name: "Leveling",
    description: "XP system, ranks and rewards.",
    icon: Trophy,
    enabled: true,
    color: "text-yellow-400",
  },
  {
    id: 5,
    name: "Notifications",
    description: "Automatic alerts and announcements.",
    icon: Bell,
    enabled: false,
    color: "text-green-400",
  },
  {
    id: 6,
    name: "Tickets",
    description: "Support ticket management system.",
    icon: Ticket,
    enabled: true,
    color: "text-pink-400",
  },
];

export default function Modules() {
  const [modules, setModules] = useState(defaultModules);

  const toggleModule = (id) => {
    setModules((prev) =>
      prev.map((module) =>
        module.id === id
          ? { ...module, enabled: !module.enabled }
          : module
      )
    );
  };

  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold">
            Modules
          </h1>

          <p className="text-gray-400 mt-2">
            Enable or disable Discord bot features.
          </p>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
        {modules.map((module) => {
          const Icon = module.icon;

          return (
            <div
              key={module.id}
              className="bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-blue-500 transition duration-300"
            >
              <div className="flex items-center justify-between mb-6">

                <div
                  className={`w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center ${module.color}`}
                >
                  <Icon size={26} />
                </div>

                <button
                  onClick={() => toggleModule(module.id)}
                  className={`w-14 h-8 rounded-full transition relative ${
                    module.enabled
                      ? "bg-blue-600"
                      : "bg-slate-700"
                  }`}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 rounded-full bg-white transition ${
                      module.enabled
                        ? "left-7"
                        : "left-1"
                    }`}
                  />
                </button>
              </div>

              <h2 className="text-xl font-semibold mb-2">
                {module.name}
              </h2>

              <p className="text-gray-400 text-sm leading-6 mb-6">
                {module.description}
              </p>

              <div className="flex items-center justify-between">

                <span
                  className={`text-sm font-medium ${
                    module.enabled
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {module.enabled
                    ? "Enabled"
                    : "Disabled"}
                </span>

                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
                  Configure
                  <ChevronRight size={16} />
                </button>

              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}