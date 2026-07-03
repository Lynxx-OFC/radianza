import {
  Search,
  Plus,
  Edit3,
  Power,
  Terminal,
} from "lucide-react";

const commands = [
  {
    name: "/ban",
    category: "Moderation",
    status: true,
  },
  {
    name: "/kick",
    category: "Moderation",
    status: true,
  },
  {
    name: "/warn",
    category: "Moderation",
    status: false,
  },
  {
    name: "/clear",
    category: "Moderation",
    status: true,
  },
  {
    name: "/rank",
    category: "Leveling",
    status: true,
  },
  {
    name: "/play",
    category: "Music",
    status: false,
  },
];

export default function Commands() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">

        <div>

          <h1 className="text-4xl font-bold">

            Commands

          </h1>

          <p className="text-gray-400 mt-2">

            Manage every command available in your bot.

          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl flex items-center gap-2">

          <Plus size={18} />

          Add Command

        </button>

      </div>

      {/* Search */}

      <div className="relative mb-8">

        <Search
          size={18}
          className="absolute left-4 top-4 text-gray-500"
        />

        <input
          placeholder="Search command..."
          className="w-full bg-slate-900 border border-white/10 rounded-2xl py-4 pl-12 pr-5 outline-none focus:border-blue-500"
        />

      </div>

      {/* Table */}

      <div className="rounded-3xl bg-slate-900 border border-white/10 overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-800">

            <tr>

              <th className="text-left p-5">Command</th>

              <th className="text-left">Category</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {commands.map((cmd) => (

              <tr
                key={cmd.name}
                className="border-t border-white/5 hover:bg-slate-800/40 transition"
              >

                <td className="p-5">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">

                      <Terminal
                        size={18}
                        className="text-blue-400"
                      />

                    </div>

                    <span className="font-semibold">

                      {cmd.name}

                    </span>

                  </div>

                </td>

                <td>

                  <span className="text-gray-400">

                    {cmd.category}

                  </span>

                </td>

                <td className="text-center">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      cmd.status
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >

                    {cmd.status ? "Enabled" : "Disabled"}

                  </span>

                </td>

                <td>

                  <div className="flex justify-center gap-3">

                    <button className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center">

                      <Edit3 size={18} />

                    </button>

                    <button className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center">

                      <Power size={18} />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </>
  );
}