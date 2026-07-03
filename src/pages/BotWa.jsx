import React, { useState, useEffect } from 'react';

export default function BotWaDashboard() {
    // State untuk menyimpan data statistik dari API bot
    const [botData, setBotData] = useState({
        status: 'Offline',
        name: '-',
        totalGroups: 0,
        ram: '0 / 0 GB',
        uptime: 0
    });
    
    // State untuk memantau apakah koneksi ke tunnel laptop berhasil atau putus
    const [isDisconnected, setIsDisconnected] = useState(false);

    // Fungsi helper mengubah detik menjadi format Jam, Menit, Detik
    const formatUptime = (seconds) => {
        if (!seconds) return '0j 0m 0d';
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);
        return `${h}j ${m}m ${s}d`;
    };

    useEffect(() => {
        const fetchBotData = async () => {
            try {
                // Mengambil data dari Cloudflare Tunnel yang mengarah ke laptopmu
                const response = await fetch('https://api.radianza.my.id/api/dashboard');
                if (!response.ok) throw new Error('Network response was not ok');
                
                const data = await response.json();
                setBotData(data);
                setIsDisconnected(false);
            } catch (err) {
                console.error('Gagal sinkronisasi data dari laptop:', err);
                setIsDisconnected(true);
            }
        };

        // Eksekusi pertama saat halaman dimuat
        fetchBotData();

        // Interval untuk auto-refresh data setiap 3 detik (Real-time)
        const interval = setInterval(fetchBotData, 3000);

        // Bersihkan interval saat komponen di-unmount agar tidak memakan memori browser
        return () => clearInterval(interval);
    }, []);

    // Menentukan status indikator bot di navbar
    const isOnline = botData.status === 'Online' && !isDisconnected;

    return (
        <div class="bg-slate-900 text-white min-h-screen flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
            
            {/* Header / Navbar */}
            <nav class="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <div class="bg-indigo-600 p-2 rounded-xl text-xl text-white">
                        <i class="fa-solid fa-robot"></i>
                    </div>
                    <span class="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        CiaaBot Live
                    </span>
                </div>
                
                {/* Badge Status */}
                <div class="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
                    <span class={`w-3 h-3 rounded-full ${
                        isDisconnected ? 'bg-rose-500' : isOnline ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-rose-500'
                    }`}></span>
                    <span class={`text-sm font-medium ${
                        isDisconnected ? 'text-rose-400' : isOnline ? 'text-emerald-400' : 'text-slate-400'
                    }`}>
                        {isDisconnected ? 'Disconnect' : isOnline ? 'Online' : 'Offline'}
                    </span>
                </div>
            </nav>

            {/* Dashboard Utama */}
            <main class="max-w-6xl w-full mx-auto p-6 flex-grow flex flex-col justify-center">
                <div class="text-center mb-10">
                    <h1 class="text-3xl md:text-4xl font-extrabold mb-3">Dashboard Bot WhatsApp</h1>
                    <p class="text-slate-400 max-w-md mx-auto text-sm md:text-base">
                        Data statistik ter-update secara otomatis langsung dari server lokal laptop kamu, Radianza.
                    </p>
                </div>

                {/* Grid Statistik Layout */}
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    
                    {/* Card 1: Nama Bot */}
                    <div class="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all group">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-slate-400 text-sm font-medium">Nama Bot</span>
                            <div class="text-indigo-400 bg-indigo-500/10 p-2 rounded-xl text-lg group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                <i class="fa-solid fa-id-badge"></i>
                            </div>
                        </div>
                        <div class="text-2xl font-bold tracking-tight text-slate-300">
                            {isDisconnected ? '-' : botData.name}
                        </div>
                    </div>

                    {/* Card 2: Total Grup */}
                    <div class="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all group">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-slate-400 text-sm font-medium">Total Grup</span>
                            <div class="text-purple-400 bg-purple-500/10 p-2 rounded-xl text-lg group-hover:bg-purple-600 group-hover:text-white transition-all">
                                <i class="fa-solid fa-users"></i>
                            </div>
                        </div>
                        <div class="text-3xl font-bold tracking-tight">
                            {isDisconnected ? 0 : botData.totalGroups}
                        </div>
                    </div>

                    {/* Card 3: RAM Laptop */}
                    <div class="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all group">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-slate-400 text-sm font-medium">RAM Laptop</span>
                            <div class="text-emerald-400 bg-emerald-500/10 p-2 rounded-xl text-lg group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                <i class="fa-solid fa-memory"></i>
                            </div>
                        </div>
                        <div class="text-xl font-bold tracking-tight text-slate-300">
                            {isDisconnected ? '0 / 0 GB' : botData.ram}
                        </div>
                    </div>

                    {/* Card 4: Uptime Aktif */}
                    <div class="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-amber-500/50 transition-all group">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-slate-400 text-sm font-medium">Aktif Selama</span>
                            <div class="text-amber-400 bg-amber-500/10 p-2 rounded-xl text-lg group-hover:bg-amber-600 group-hover:text-white transition-all">
                                <i class="fa-solid fa-clock"></i>
                            </div>
                        </div>
                        <div class="text-2xl font-bold tracking-tight text-slate-300">
                            {isDisconnected ? '0j 0m 0d' : formatUptime(botData.uptime)}
                        </div>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer class="text-center py-6 text-sm text-slate-500 border-t border-slate-800/60 bg-slate-950/20">
                © 2026 radianza.my.id · Powered by CiaaBot
            </footer>

        </div>
    );
}