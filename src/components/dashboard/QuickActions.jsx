import {
    Bot,
    RefreshCcw,
    Plus,
    Settings
} from "lucide-react";

const actions=[

{
    title:"Invite Bot",
    icon:Bot
},

{
    title:"Setup Server",
    icon:Settings
},

{
    title:"Sync Commands",
    icon:RefreshCcw
},

{
    title:"Create Module",
    icon:Plus
}

];

export default function QuickActions(){

    return(

        <section className="mt-10">

            <h2 className="text-2xl font-bold mb-6">

                Quick Actions

            </h2>

            <div className="grid lg:grid-cols-4 gap-5">

                {actions.map((item)=>{

                    const Icon=item.icon;

                    return(

                        <button
                        key={item.title}
                        className="bg-slate-900 border border-white/10 rounded-2xl p-6 hover:bg-slate-800 transition">

                            <Icon className="mb-4 text-blue-400"/>

                            <p>

                                {item.title}

                            </p>

                        </button>

                    )

                })}

            </div>

        </section>

    )

}