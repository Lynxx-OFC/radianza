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
          <div className="flex flex-col items-center">

            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black tracking-[12px] text-white"
            >
              RADIANZA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
              className="mt-6 w-80 text-center text-cyan-400 tracking-[8px]"
            >
              INITIALIZING...
            </motion.p>

            <div className="mt-8 w-80">
              <div className="h-2 rounded-full bg-slate-700 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"
                />

              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}