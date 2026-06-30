export default function Button({

    children,

    variant="primary",

    className=""

}){

    const styles={

        primary:
        "bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105",

        secondary:
        "bg-slate-800 hover:bg-slate-700",

        danger:
        "bg-red-500 hover:bg-red-600"

    }

    return(

        <button

            className={`
            px-5
            py-3
            rounded-xl
            font-medium
            transition-all
            ${styles[variant]}
            ${className}
            `}

        >

            {children}

        </button>

    )

}