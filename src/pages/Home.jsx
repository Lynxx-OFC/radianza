import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Stats from "../components/Stats";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1800);

  return () => clearTimeout(timer);
}, []);
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      
      <LoadingScreen loading={loading} />
      
      <Navbar />

      {/* Aurora Background */}
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
          className="absolute -left-60 -top-60 h-[700px] w-[700px] rounded-full bg-blue-600/30 blur-[170px]"
        />

        <motion.div
          animate={{
            x: [0, -120, 60, 0],
            y: [0, 80, -60, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-60 bottom-[-250px] h-[700px] w-[700px] rounded-full bg-cyan-500/30 blur-[170px]"
        />

        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500 blur-[150px]"
        />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* Stars */}
<div className="absolute inset-0 -z-10">
  {[...Array(80)].map((_, i) => (
    <span
      key={i}
      className="star"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 5}s`,
      }}
    />
  ))}
</div>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Stats />
      <Contact />

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        ↓
      </motion.div>

    </main>
  );
}