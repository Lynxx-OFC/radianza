import React, { useState, useEffect } from 'react';

export default function BotWaDashboard() {
    const [botData, setBotData] = useState({
        status: 'Offline',
        name: 'CiaaBot',
        totalGroups: 0,
        ram: '0 / 0 GB',
        uptime: 0,
        profilePicture: '/profile.png', // Mengambil dari folder public
        commands: [
            { name: "help", description: "Menampilkan daftar perintah bot." },
            { name: "play", description: "Memutar musik/media." },
            { name: "tt", description: "Download video TikTok." },
            { name: "ig", description: "Download konten Instagram." },
            { name: "x", description: "Download konten dari X (Twitter)." },
            { name: "yt", description: "Download video YouTube." },
            { name: "s", description: "Mengubah gambar menjadi stiker." }
        ]
    });
    
    const [isDisconnected, setIsDisconnected] = useState(false);

    useEffect(() => {
        const fetchBotData = async () => {
            try {
                const response = await fetch('https://api.radianza.my.id/api/dashboard');
                const data = await response.json();
                // Kita override manual list command agar selalu sesuai keinginanmu
                setBotData(prev => ({
                    ...data,
                    commands: [
                        { name: "help", description: "Menampilkan daftar perintah bot." },
                        { name: "play", description: "Memutar musik/media." },
                        { name: "tt", description: "Download video TikTok." },
                        { name: "ig", description: "Download konten Instagram." },
                        { name: "x", description: "Download konten dari X (Twitter)." },
                        { name: "yt", description: "Download video YouTube." },
                        { name: "s", description: "Mengubah gambar menjadi stiker." }
                    ]
                }));
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
        <div className="bg-[#18191C] text-gray-200 min-h-screen flex p-8">
            <main className="flex-1 max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-6 mb-8 bg-[#202225] p-6 rounded-lg border border-[#2f3136]">
                    <img src={botData.profilePicture} className="w-20 h-20 rounded-full border-2 border-indigo-500" alt="Bot" />
                    <div>
                        <h1 className="text-3xl font-bold text-white">{botData.name}</h1>
                        <p className={isDisconnected ? "text-red-500" : "text-green-500"}>
                            {isDisconnected ? 'Bot Offline' : 'Bot Online'}
                        </p>
                    </div>
                </div>

                {/* Commands Grid */}
                <div className="bg-[#202225] p-6 rounded-lg border border-[#2f3136]">
                    <h2 className="text-xl font-bold text-white mb-6">Daftar Command</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {botData.commands.map((cmd, i) => (
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