import { motion } from "framer-motion";
import { ArrowUpRight, Code2, LayoutGrid, Server, ShoppingBag } from "lucide-react";
import Badge from "./ui/Badge";

const projects = [
  {
    title: "Halman Portfolio",
    subtitle: "Personal brand showcase",
    description:
      "Modern portfolio website with smooth animations, responsive layouts, and a polished developer brand experience.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/yourusername/portfolio",
    label: "Web",
    icon: <LayoutGrid size={28} className="text-cyan-400" />,
  },
  {
    title: "Discord Bot Dashboard",
    subtitle: "Server automation control panel",
    description:
      "Admin panel for Discord bots with module toggles, slash commands, and real-time status monitoring.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/discord-dashboard",
    label: "Dashboard",
    icon: <Code2 size={28} className="text-violet-400" />,
  },
  {
    title: "Game Server Platform",
    subtitle: "Community server launch",
    description:
      "Complete game server setup with custom plugins, role permissions, and cloud performance tuning.",
    tech: ["PaperMC", "MySQL", "Docker"],
    link: "https://github.com/yourusername/game-server",
    label: "Infrastructure",
    icon: <Server size={28} className="text-orange-400" />,
  },
  {
    title: "E-commerce Redesign",
    subtitle: "Conversion-focused UX",
    description:
      "Interactive landing page redesign created to boost engagement and improve checkout flow for game stores.",
    tech: ["Figma", "React", "Tailwind"],
    link: "https://github.com/yourusername/ecommerce-ui",
    label: "Design",
    icon: <ShoppingBag size={28} className="text-emerald-400" />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-32 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400">Projects</p>

          <h2 className="text-5xl font-black mt-4">Featured Projects</h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-8">
            A selection of recent work that shows how I build polished web experiences, bot tools,
            and server solutions for real clients and communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.35)] transition"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="rounded-2xl bg-white/10 p-4">{project.icon}</div>
                <Badge color="blue">{project.label}</Badge>
              </div>

              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-400 mb-6 leading-7">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-cyan-300 font-semibold hover:text-white transition"
              >
                View Code
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}