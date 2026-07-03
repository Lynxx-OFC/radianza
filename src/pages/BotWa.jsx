import React, { useState, useEffect } from 'react';

export default function BotWaDashboard() {
    const [botData, setBotData] = useState({
        status: 'Offline',
        name: 'CiaaBot',
        totalGroups: 0,
        ram: '0 / 0 GB',
        uptime: 0,
        profilePicture: '/profile.png'
    });
    
    const [isDisconnected, setIsDisconnected] = useState(false);

    // List command yang kamu mau
    const commands = [
        { name: "help", description: "Menampilkan daftar perintah bot." },
        { name: "play", description: "Memutar musik/media." },
        { name: "tt", description: "Download video TikTok." },
        { name: "ig", description: "Download konten Instagram." },
        { name: "x", description: "Download konten dari X (Twitter)." },
        { name: "yt", description: "Download video YouTube." },
        { name: "s", description: "Mengubah gambar menjadi stiker." }
    ];

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
        <div className="bg-[#18191C] text-gray-200 min-h-screen p-8">
            <main className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center gap-6 mb-8 bg-[#202225] p-6 rounded-lg border border-[#2f3136]">
                    <img src={botData.profilePicture} className="w-24 h-24 rounded-full border-2 border-indigo-500" alt="Bot" />
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl font-bold text-white">{botData.name}</h1>
                        <p className={!isDisconnected && botData.status === 'Online' ? "text-green-500" : "text-red-500"}>
                            {isDisconnected ? 'Bot Offline' : botData.status}
                        </p>
                    </div>
                    <a href="https://wa.me/628211485074" target="_blank" rel="noreferrer" 
                       className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold transition-all">
                        Chat Bot WA
                    </a>
                </div>

                {/* Stats Section (RAM, Status, Groups) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-[#202225] p-6 rounded-lg border border-[#2f3136]">
                        <div className="text-gray-400 text-xs uppercase mb-1">RAM Usage</div>
                        <div className="text-xl font-bold text-white">{isDisconnected ? '-' : botData.ram}</div>
                    </div>
                    <div className="bg-[#202225] p-6 rounded-lg border border-[#2f3136]">
                        <div className="text-gray-400 text-xs uppercase mb-1">Total Groups</div>
                        <div className="text-xl font-bold text-white">{isDisconnected ? 0 : botData.totalGroups}</div>
                    </div>
                    <div className="bg-[#202225] p-6 rounded-lg border border-[#2f3136]">
                        <div className="text-gray-400 text-xs uppercase mb-1">Active Time</div>
                        <div className="text-xl font-bold text-white">{isDisconnected ? '0j' : Math.floor(botData.uptime/3600) + 'j ' + Math.floor((botData.uptime%3600)/60) + 'm'}</div>
                    </div>
                </div>

                {/* Commands Section */}
                <div className="bg-[#202225] p-6 rounded-lg border border-[#2f3136]">
                    <h2 className="text-xl font-bold text-white mb-6">Daftar Command</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {commands.map((cmd, i) => (
                            <div key={i} className="p-4 bg-[#18191C] rounded-md border border-[#2f3136] hover:border-indigo-500 transition-all">
                                <div className="font-bold text-indigo-400">.{cmd.name}</div>
                                <div className="text-sm text-gray-400">{cmd.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}