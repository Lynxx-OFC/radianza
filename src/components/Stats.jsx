import { motion } from "framer-motion";

const stats = [
  {
    number: "50+",
    title: "Projects Completed",
  },
  {
    number: "15+",
    title: "Bots Developed",
  },
  {
    number: "1.6M+",
    title: "Commands Processed",
  },
  {
    number: "4+",
    title: "Public Game Servers",
  },
];

export default function Stats() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >

          {stats.map((item,index)=>(
            <motion.div
              key={index}
              whileHover={{
                y:-8,
                scale:1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.35)] transition"
            >

              <h2 className="text-6xl font-black text-cyan-400">
                {item.number}
              </h2>

              <p className="mt-4 text-slate-400">
                {item.title}
              </p>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}