export default function Badge({

    children,

    color="green"

}){

    const colors={

        green:"bg-green-500/20 text-green-400",

        blue:"bg-blue-500/20 text-blue-400",

        red:"bg-red-500/20 text-red-400"

    }

    return(

        <span
            className={`
            px-3
            py-1
            rounded-full
            text-xs
            font-medium
            ${colors[color]}
            `}
        >

            {children}

        </span>

    )

}