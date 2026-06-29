import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-32"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Kiri */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 tracking-[6px] uppercase mb-4">
            About Me
          </p>

          <h2 className="text-5xl font-black mb-8">
            Passionate Developer
          </h2>

          <p className="text-slate-300 leading-8 text-lg">
            Hi! I'm <span className="text-cyan-400 font-bold">Radianza</span>.
            I enjoy building modern websites, Discord bots, WhatsApp bots,
            Telegram bots, and Minecraft servers.
          </p>

          <p className="text-slate-400 mt-6 leading-8">
            I love learning new technologies and creating projects that are
            useful, fast, and visually appealing.
          </p>
        </motion.div>

        {/* Kanan */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-3xl bg-cyan-500 blur-3xl opacity-30"></div>

            <div className="relative h-80 w-80 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center">

              <span className="text-8xl">
                👨‍💻
              </span>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}