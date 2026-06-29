import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]"
        >
          <div className="text-center">

            <motion.h1
              initial={{ scale: .8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: .8 }}
              className="text-6xl md:text-8xl font-black tracking-[12px] text-white"
            >
              RADIANZA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: .5,
                duration: .5
              }}
              className="mt-6 text-cyan-400 tracking-[6px]"
            >
              INITIALIZING...
            </motion.p>

            <div className="w-72 h-2 bg-white/10 rounded-full mt-10 overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.8
                }}
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
              />

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}