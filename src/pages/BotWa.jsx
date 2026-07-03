import React, { useState, useEffect } from 'react';

export default function BotWaDashboard() {
    const [botData, setBotData] = useState({
        status: 'Offline',
        name: 'CiaaBot',
        totalGroups: 0,
        ram: '0 / 0 GB',
        uptime: 0,
        profilePicture: 'https://cdn-icons-png.flaticon.com/512/4712/4712038.png',
        commands: [
            { name: "use", description: "Menjalankan fungsi utama bot." },
            { name: "ping", description: "Mengecek latensi bot." },
            { name: "status", description: "Melihat detail kondisi bot." }
        ]
    });
    
    const [isDisconnected, setIsDisconnected] = useState(false);

    useEffect(() => {
        const fetchBotData = async () => {
            try {
                const response = await fetch('https://api.radianza.my.id/api/dashboard');
                const data = await response.json();
                setBotData(data);
                setIsDisconnected(false);
            } catch (err) {
                setIsDisconnected(true);
            }
        };
        fetchBotData();
        const interval = setInterval(fetchBotData, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#18191C] text-gray-200 min-h-screen flex">
            {/* Sidebar Ala MEE6 */}
            <aside className="w-64 bg-[#202225] p-6 hidden md:block border-r border-[#18191C]">
                <div className="flex items-center gap-3 mb-10">
                    <img src={botData.profilePicture} className="w-10 h-10 rounded-full" alt="Bot" />
                    <span className="font-bold text-white">CiaaBot</span>
                </div>
                <nav className="space-y-4">
                    <div className="text-indigo-400 font-semibold cursor-pointer">Dashboard</div>
                    <div className="text-gray-500 cursor-pointer hover:text-white">Commands</div>
                    <div className="text-gray-500 cursor-pointer hover:text-white">Leaderboard</div>
                    <div className="text-gray-500 cursor-pointer hover:text-white">Settings</div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-white">Dashboard Bot</h1>
                    <div className={`px-4 py-1 rounded-md text-xs font-bold uppercase ${botData.status === 'Online' && !isDisconnected ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                        {isDisconnected ? 'Disconnected' : botData.status}
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-[#202225] p-6 rounded-lg border-l-4 border-indigo-500">
                        <div className="text-gray-400 text-xs uppercase mb-1">Total Groups</div>
                        <div className="text-2xl font-bold text-white">{botData.totalGroups}</div>
                    </div>
                    <div className="bg-[#202225] p-6 rounded-lg border-l-4 border-blue-500">
                        <div className="text-gray-400 text-xs uppercase mb-1">Server RAM</div>
                        <div className="text-2xl font-bold text-white">{botData.ram}</div>
                    </div>
                    <div className="bg-[#202225] p-6 rounded-lg border-l-4 border-purple-500">
                        <div className="text-gray-400 text-xs uppercase mb-1">Uptime</div>
                        <div className="text-2xl font-bold text-white">{Math.floor(botData.uptime/3600)}j {Math.floor((botData.uptime%3600)/60)}m</div>
                    </div>
                </div>

                {/* Commands Section */}
                <div className="bg-[#202225] p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-white mb-6">Available Commands</h2>
                    <div className="space-y-4">
                        {botData.commands.map((cmd, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-[#18191C] rounded-md border border-[#2f3136]">
                                <span className="font-mono text-indigo-400">/{cmd.name}</span>
                                <span className="text-sm text-gray-400">{cmd.description}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}