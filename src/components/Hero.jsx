import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Aurora */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -60, 80, 0],
            scale: [1, 1.2, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-60 -top-60 w-[700px] h-[700px] rounded-full bg-blue-600/30 blur-[170px]"
        />

        <motion.div
          animate={{
            x: [0, -120, 60, 0],
            y: [0, 80, -60, 0],
            scale: [1, .9, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-60 bottom-[-250px] w-[700px] h-[700px] rounded-full bg-cyan-500/30 blur-[170px]"
        />

      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="text-center max-w-5xl"
      >

        <p className="uppercase tracking-[8px] text-blue-400 mb-4">
          Welcome
        </p>

        <h1 className="text-7xl md:text-9xl font-black">

          <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent">
            RADIANZA
          </span>

        </h1>

        <div className="mt-8">

          <p className="text-slate-400 mb-3">
            I'm a
          </p>

          <TypeAnimation
            sequence={[
              "Website Developer",2000,
              "Bot Developer",2000,
              "Game Server Developer",2000,
              "JavaScript Developer",2000,
              "Creative Coder",2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-4xl md:text-5xl font-bold text-cyan-400"
          />

        </div>

        <p className="mt-8 text-slate-300 text-lg max-w-2xl mx-auto leading-8">
          Building modern websites, automation bots,
          game servers and cloud deployments with
          React, Node.js and Tailwind CSS.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <button className="group bg-white text-black rounded-2xl px-8 py-4 font-bold hover:scale-105 transition">

            View Projects

            <ArrowRight
              className="inline ml-2 group-hover:translate-x-1 transition"
              size={18}
            />

          </button>

          <button className="border border-white/20 bg-white/5 backdrop-blur-xl rounded-2xl px-8 py-4 hover:bg-white/10 transition">
            Contact Me
          </button>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-3 gap-8 mt-20">

          <div>
            <h2 className="text-4xl font-black text-cyan-400">
              10+
            </h2>

            <p className="text-slate-400">
              Projects
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-cyan-400">
              20+
            </h2>

            <p className="text-slate-400">
              Bots
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-cyan-400">
              5+
            </h2>

            <p className="text-slate-400">
              Servers
            </p>
          </div>

        </div>

      </motion.div>
    </section>
  );
}