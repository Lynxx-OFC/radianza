import { motion } from "framer-motion";
import {
  Globe,
  Bot,
  Server,
  Cloud,
} from "lucide-react";

const skills = [
  {
    icon: <Globe size={36} />,
    title: "Website Developer",
    desc: "React, Tailwind CSS, JavaScript, Modern UI",
  },
  {
    icon: <Bot size={36} />,
    title: "Bot Developer",
    desc: "Discord Bot, WhatsApp Bot, Telegram Bot",
  },
  {
    icon: <Server size={36} />,
    title: "Game Server",
    desc: "Minecraft Server, Plugins, Hosting",
  },
  {
    icon: <Cloud size={36} />,
    title: "Cloud & Deployment",
    desc: "Cloudflare, Vercel, DNS Management",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-32"
    >
      <div className="max-w-7xl w-full">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400">
            Skills
          </p>

          <h2 className="text-5xl font-black mt-4">
            What I Do
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition duration-300 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.35)]"
            >

              <div className="text-cyan-400 mb-6 group-hover:scale-110 transition">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {skill.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {skill.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}