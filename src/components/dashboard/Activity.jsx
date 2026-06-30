const logs=[

"Bot restarted",

"Commands synchronized",

"Moderation enabled",

"Welcome updated",

"Economy configured"

];

export default function Activity(){

    return(

        <section className="mt-10">

            <h2 className="text-2xl font-bold mb-6">

                Recent Activity

            </h2>

            <div className="bg-slate-900 rounded-2xl border border-white/10">

                {logs.map((log,index)=>(

                    <div
                    key={index}
                    className="p-5 border-b border-white/5 last:border-none">

                        {log}

                    </div>

                ))}

            </div>

        </section>

    )

}