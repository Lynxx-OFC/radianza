import { motion } from "framer-motion";
import { Mail, Github, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-32"
    >
      <div className="max-w-6xl w-full text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[6px] text-cyan-400">
            Contact
          </p>

          <h2 className="text-5xl font-black mt-4">
            Let's Build Something Awesome 🚀
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-8">
            Have a project, idea, or just want to chat?
            Feel free to reach out through any platform below.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          <a
            href="mailto:safarudinradiana@gmail.com"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.35)] transition"
          >
            <Mail size={40} className="mx-auto text-cyan-400 mb-5" />

            <h3 className="text-xl font-bold">
              Email
            </h3>

            <p className="text-slate-400 mt-2">
              mailto:safarudinradiana@gmail.com
            </p>

          </a>

          <a
            href="https://gitHub.com/"
            target="_blank"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.35)] transition"
          >
            <Github size={40} className="mx-auto text-cyan-400 mb-5" />

            <h3 className="text-xl font-bold">
              GitHub
            </h3>

            <p className="text-slate-400 mt-2">
              gitHub.com/radianza
            </p>

          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.35)] transition"
          >
            <Instagram size={40} className="mx-auto text-cyan-400 mb-5" />

            <h3 className="text-xl font-bold">
              Instagram
            </h3>

            <p className="text-slate-400 mt-2">
              @radianza_
            </p>

          </a>

          <a
            href="#"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.35)] transition"
          >
            <MessageCircle size={40} className="mx-auto text-cyan-400 mb-5" />

            <h3 className="text-xl font-bold">
              Discord
            </h3>

            <p className="text-slate-400 mt-2">
              radianza
            </p>

          </a>

        </div>

      </div>
    </section>
  );
}