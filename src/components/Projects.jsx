import { motion } from "framer-motion";
import { Globe, Bot, Server } from "lucide-react";

const projects = [
  {
    icon: <Globe size={40} />,
    title: "Portfolio Website",
    description:
      "Modern portfolio built with React, Tailwind CSS, and Framer Motion.",
    tech: ["React", "Tailwind", "Vite"],
  },
  {
    icon: <Bot size={40} />,
    title: "Discord Bot",
    description:
      "Moderation, Economy, Ticket, Music, Slash Commands.",
    tech: ["Discord.js", "Node.js", "MongoDB"],
  },
  {
    icon: <Server size={40} />,
    title: "Minecraft Server",
    description:
      "Public Minecraft server with plugins, permissions and optimization.",
    tech: ["PaperMC", "LuckPerms", "MySQL"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-32 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400">
            Projects
          </p>

          <h2 className="text-5xl font-black mt-4">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.35)] transition"
            >

              <div className="text-cyan-400 mb-6">
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-6 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">

                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}