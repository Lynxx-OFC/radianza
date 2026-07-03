import { useState } from "react";
import {
  Shield,
  Bell,
  Moon,
  Bot,
  Lock,
  Save,
} from "lucide-react";

export default function Settings() {
  const [settings, setSettings] = useState({
    automod: true,
    welcome: true,
    notifications: false,
    darkmode: true,
    publicBot: true,
  });

  const toggle = (key) => {
    setSettings({
      ...settings,
      [key]: !settings[key],
    });
  };

  const Item = ({ icon: Icon, title, desc, value, onClick }) => (
    <div className="flex items-center justify-between bg-slate-900 border border-white/10 rounded-2xl p-5">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
          <Icon className="text-blue-400" size={22} />
        </div>

        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-400">{desc}</p>
        </div>
      </div>

      <button
        onClick={onClick}
        className={`w-14 h-8 rounded-full transition relative ${
          value ? "bg-blue-600" : "bg-slate-700"
        }`}
      >
        <div
          className={`absolute top-1 w-6 h-6 rounded-full bg-white transition ${
            value ? "left-7" : "left-1"
          }`}
        />
      </button>
    </div>
  );

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Configure your Discord bot preferences.
        </p>
      </div>

      <div className="space-y-5">

        <Item
          icon={Shield}
          title="Auto Moderation"
          desc="Automatically detect spam and bad words."
          value={settings.automod}
          onClick={() => toggle("automod")}
        />

        <Item
          icon={Bot}
          title="Welcome System"
          desc="Send welcome messages."
          value={settings.welcome}
          onClick={() => toggle("welcome")}
        />

        <Item
          icon={Bell}
          title="Notifications"
          desc="Receive dashboard notifications."
          value={settings.notifications}
          onClick={() => toggle("notifications")}
        />

        <Item
          icon={Moon}
          title="Dark Theme"
          desc="Use dark appearance."
          value={settings.darkmode}
          onClick={() => toggle("darkmode")}
        />

        <Item
          icon={Lock}
          title="Public Bot"
          desc="Allow everyone to invite the bot."
          value={settings.publicBot}
          onClick={() => toggle("publicBot")}
        />

      </div>

      <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl flex items-center gap-2">
        <Save size={18} />
        Save Changes
      </button>
    </>
  );
}