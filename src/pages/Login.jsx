import { motion } from "framer-motion";
import {
  Bot,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#070B14] text-white flex items-center justify-center px-6 overflow-hidden relative">

      {/* Background Blur */}

      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[180px] rounded-full -top-40 -left-40" />

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full -bottom-40 -right-40" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        className="relative z-10 grid lg:grid-cols-2 gap-14 items-center max-w-7xl w-full"
      >

        {/* Left */}

        <div>

          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">

            <Bot size={18} />

            <span className="text-sm">

              Radianza Dashboard

            </span>

          </div>

          <h1 className="text-6xl font-black leading-tight">

            Manage Your

            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">

              Discord Server

            </span>

          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-8 max-w-xl">

            Configure modules, commands, automod,
            analytics and everything about your Discord bot
            from one modern dashboard.

          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">

              <CheckCircle2 className="text-green-400" />

              Auto Moderation

            </div>

            <div className="flex items-center gap-4">

              <CheckCircle2 className="text-green-400" />

              Slash Commands

            </div>

            <div className="flex items-center gap-4">

              <CheckCircle2 className="text-green-400" />

              Analytics Dashboard

            </div>

            <div className="flex items-center gap-4">

              <CheckCircle2 className="text-green-400" />

              Premium Modules

            </div>

          </div>

        </div>

        {/* Right */}

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 shadow-2xl"
        >

          <div className="flex justify-center mb-8">

            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl shadow-blue-500/30">

              <ShieldCheck size={42} />

            </div>

          </div>

          <h2 className="text-3xl font-bold text-center">

            Welcome Back

          </h2>

          <p className="text-gray-400 text-center mt-3">

            Login using your Discord account.

          </p>

          <button
            className="w-full mt-10 bg-[#5865F2] hover:bg-[#4752C4] transition rounded-2xl py-4 flex items-center justify-center gap-3 font-semibold text-lg"
          >
            <img
              src="https://cdn.simpleicons.org/discord/ffffff"
              className="w-6 h-6"
              alt=""
            />

            Continue with Discord

            <ArrowRight size={20} />

          </button>

          <div className="my-8 border-t border-white/10" />

          <div className="grid grid-cols-2 gap-5">

            <div className="rounded-2xl bg-slate-800 p-5">

              <Bot className="text-blue-400 mb-4" />

              <h3 className="font-semibold">

                Smart Bot

              </h3>

              <p className="text-gray-400 text-sm mt-2">

                Powerful moderation system.

              </p>

            </div>

            <div className="rounded-2xl bg-slate-800 p-5">

              <Zap className="text-yellow-400 mb-4" />

              <h3 className="font-semibold">

                Fast Setup

              </h3>

              <p className="text-gray-400 text-sm mt-2">

                Configure everything in minutes.

              </p>

            </div>

          </div>

          <p className="text-center text-gray-500 text-sm mt-8">

            By continuing you agree to our Terms of Service.

          </p>

        </motion.div>

      </motion.div>

    </div>
  );
}