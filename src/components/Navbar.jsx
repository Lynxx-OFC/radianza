import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10"
    >
      <div className="flex items-center justify-between h-20 px-6 lg:px-16">

        {/* Logo */}
        <h1 className="text-2xl font-black tracking-[6px] bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          RADIANZA
        </h1>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm">

          <a
            href="#home"
            className="hover:text-cyan-400 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-cyan-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>

          <Link
            to="/topup"
            className="hover:text-cyan-400 transition"
          >
            Topup
          </Link>

        </div>

      </div>
    </motion.nav>
  );
}