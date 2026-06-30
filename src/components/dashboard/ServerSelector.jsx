import { ChevronDown, Shield } from "lucide-react";

export default function ServerSelector() {

    return (

        <button className="flex items-center gap-3 bg-slate-900 border border-white/10 rounded-2xl px-5 py-3 hover:border-blue-500 transition">

            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">

                <Shield size={20} />

            </div>

            <div className="text-left">

                <p className="text-sm text-gray-400">

                    Selected Server

                </p>

                <h3 className="font-semibold">

                    Radianza Community

                </h3>

            </div>

            <ChevronDown size={18}/>

        </button>

    );

}