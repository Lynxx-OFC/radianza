import {
  Shield,
  Music4,
  Trophy,
  MessageSquare,
  ScrollText,
  Gavel,
} from "lucide-react";

import ModuleCard from "./ModuleCard";

const modules = [
  {
    title: "Moderation",
    description: "Auto moderation & anti spam",
    enabled: true,
    usage: 92,
    icon: Gavel,
  },
  {
    title: "Welcome",
    description: "Welcome new members",
    enabled: true,
    usage: 81,
    icon: MessageSquare,
  },
  {
    title: "Leveling",
    description: "XP & Rank System",
    enabled: true,
    usage: 68,
    icon: Trophy,
  },
  {
    title: "Logs",
    description: "Track server activity",
    enabled: true,
    usage: 95,
    icon: ScrollText,
  },
  {
    title: "Music",
    description: "Play music in VC",
    enabled: false,
    usage: 15,
    icon: Music4,
  },
  {
    title: "Security",
    description: "Protect your server",
    enabled: true,
    usage: 88,
    icon: Shield,
  },
];

export default function Modules() {
  return (
    <section className="mb-10">

      <div className="flex justify-between items-end mb-6">

        <div>

          <h2 className="text-3xl font-bold">

            Modules

          </h2>

          <p className="text-gray-400 mt-2">

            Configure every feature of your bot.

          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl">

          View All

        </button>

      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">

        {modules.map((module) => (

          <ModuleCard
            key={module.title}
            {...module}
          />

        ))}

      </div>

    </section>
  );
}