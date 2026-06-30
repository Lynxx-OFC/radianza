import { motion } from "framer-motion";

export default function Card({
    children,
    className=""
}){

    return(

        <motion.div

            whileHover={{
                y:-4
            }}

            className={`
                bg-slate-900/70
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-6
                transition-all
                hover:border-blue-500/40
                hover:shadow-[0_0_30px_rgba(59,130,246,.18)]
                ${className}
            `}

        >

            {children}

        </motion.div>

    )

}