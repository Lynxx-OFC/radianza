import { useState } from "react";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Sparkles,
  CreditCard,
  ShieldCheck,
  Clock3,
  Shield,
  Gift,
  Wallet,
  Zap,
} from "lucide-react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const games = [
  {
    name: "Mobile Legends",
    tag: "MLBB",
    color: "from-violet-500 to-fuchsia-500",
    description: "Diamond bundle, skins, dan battle points.",
  },
  {
    name: "Free Fire",
    tag: "FF",
    color: "from-orange-500 to-amber-400",
    description: "Diamond top-up dengan pengiriman instan.",
  },
  {
    name: "PUBG Mobile",
    tag: "PUBG",
    color: "from-sky-500 to-cyan-400",
    description: "UC paket royale pass dan crates.",
  },
  {
    name: "Genshin Impact",
    tag: "Genshin",
    color: "from-cyan-500 to-indigo-500",
    description: "Primogem bundle untuk wish berikutnya.",
  },
];

const packages = [
  {
    label: "Starter Pack",
    amount: "50 Diamonds",
    price: "Rp 25.000",
    bonus: "+5 Bonus",
    badge: "Best for pemula",
  },
  {
    label: "Popular Pack",
    amount: "120 Diamonds",
    price: "Rp 55.000",
    bonus: "+12 Bonus",
    badge: "Best seller",
  },
  {
    label: "Pro Pack",
    amount: "250 Diamonds",
    price: "Rp 108.000",
    bonus: "+28 Bonus",
    badge: "Paling value",
  },
  {
    label: "Legend Pack",
    amount: "520 Diamonds",
    price: "Rp 215.000",
    bonus: "+55 Bonus",
    badge: "Top pick",
  },
];

const payments = [
  { label: "OVO", description: "E-wallet cepat", color: "from-cyan-500 to-blue-500" },
  { label: "Bank Transfer", description: "BCA/Mandiri/BRI", color: "from-slate-700 to-slate-900" },
  { label: "ShopeePay", description: "Bayar pakai ShopeePay", color: "from-orange-400 to-amber-500" },
  { label: "Pulsa", description: "Telkomsel/XL/Indosat", color: "from-emerald-500 to-lime-400" },
];

export default function Topup() {
  const [activeGame, setActiveGame] = useState(0);
  const [activePackage, setActivePackage] = useState(1);
  const [activePayment, setActivePayment] = useState(0);

  const selectedGame = games[activeGame];
  const selectedPackage = packages[activePackage];
  const selectedPayment = payments[activePayment];

  return (
    <main className="min-h-screen bg-[#070B14] text-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-slate-900/95 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.45fr_1fr] items-start">
          <section>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/70 px-4 py-2 text-sm text-cyan-200 border border-cyan-500/20 mb-6">
              <Sparkles className="w-4 h-4" /> Modern Game Topup
            </span>

            <h1 className="text-5xl sm:text-6xl font-black leading-tight">
              Top-up game favoritmu dengan cepat, aman, dan tanpa ribet.
            </h1>

            <p className="mt-6 max-w-2xl text-slate-400 text-lg leading-8">
              Layanan top-up premium untuk Mobile Legends, Free Fire, PUBG Mobile, Genshin Impact, dan lebih banyak lagi.
              Pilih game, paket, dan metode pembayaran dalam satu pengalaman checkout yang cepat.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Card className="p-6 bg-slate-900/70 border-white/10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-300 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="font-semibold text-lg">Aman</h2>
                <p className="mt-2 text-slate-400 text-sm">Pembayaran terenkripsi dengan verifikasi otomatis.</p>
              </Card>
              <Card className="p-6 bg-slate-900/70 border-white/10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-300 mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h2 className="font-semibold text-lg">Instan</h2>
                <p className="mt-2 text-slate-400 text-sm">Top-up diproses segera, langsung masuk ke akunmu.</p>
              </Card>
              <Card className="p-6 bg-slate-900/70 border-white/10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-300 mb-4">
                  <Clock3 className="w-5 h-5" />
                </div>
                <h2 className="font-semibold text-lg">Support 24/7</h2>
                <p className="mt-2 text-slate-400 text-sm">Tim siap membantu kapan pun kamu butuh bantuan.</p>
              </Card>
            </div>

            <div className="mt-16 rounded-[40px] border border-white/10 bg-slate-950/80 p-8">
              <div className="flex flex-wrap items-center gap-3 justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Game</p>
                  <h2 className="mt-4 text-3xl font-bold">Pilih game yang kamu mainkan</h2>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
                  <span className="font-semibold text-white">Selected</span> • {selectedGame.name}
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {games.map((game, index) => (
                  <button
                    key={game.name}
                    onClick={() => setActiveGame(index)}
                    className={`group rounded-[28px] border p-6 text-left transition ${
                      activeGame === index
                        ? "border-cyan-400/70 bg-cyan-500/10 shadow-[0_20px_60px_rgba(56,189,248,.14)]"
                        : "border-white/10 bg-slate-900/70 hover:border-cyan-400/30 hover:bg-slate-900/90"
                    }`}
                  >
                    <div className={`inline-flex items-center justify-center rounded-3xl p-4 text-white shadow-lg shadow-slate-950/20 bg-gradient-to-br ${game.color}`}>
                      <Gamepad2 className="w-6 h-6" />
                    </div>
                    <div className="mt-6">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-xl font-semibold">{game.name}</h3>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200">{game.tag}</span>
                      </div>
                      <p className="mt-3 text-slate-400 text-sm leading-6">{game.description}</p>
                    </div>
                    <div className="mt-8 flex items-center justify-between text-sm text-slate-300">
                      <span>Instan</span>
                      <span className={activeGame === index ? "text-cyan-300 font-semibold" : "text-slate-400"}>Pilih</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_auto]">
              <div className="rounded-[40px] border border-white/10 bg-slate-950/80 p-8">
                <div className="flex items-center gap-4 text-cyan-300">
                  <Gift className="w-5 h-5" />
                  <span className="uppercase tracking-[0.25em] text-sm text-cyan-300/90">Paket Top-up</span>
                </div>
                <h3 className="mt-5 text-3xl font-bold">Pilih paket terbaikmu</h3>
                <p className="mt-4 text-slate-400 leading-7">Setiap paket dirancang untuk memenuhi kebutuhan gaya bermainmu, dari hemat hingga bonus ekstra.</p>

                <div className="mt-8 space-y-4">
                  {packages.map((pack, index) => (
                    <button
                      key={pack.label}
                      onClick={() => setActivePackage(index)}
                      className={`w-full rounded-3xl border p-5 text-left transition ${
                        activePackage === index
                          ? "border-cyan-400/70 bg-cyan-500/10 shadow-[0_20px_70px_rgba(56,189,248,.14)]"
                          : "border-white/10 bg-slate-900/70 hover:border-cyan-400/30 hover:bg-slate-900/90"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-lg">{pack.label}</p>
                          <p className="mt-2 text-sm text-slate-400">{pack.amount}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold">{pack.price}</p>
                          <p className="text-sm text-cyan-300">{pack.bonus}</p>
                        </div>
                      </div>
                      <p className="mt-4 rounded-2xl bg-white/5 px-3 py-2 text-sm text-slate-300">{pack.badge}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-[40px] border border-white/10 bg-slate-950/80 p-8">
                <div className="flex items-center gap-4 text-blue-400">
                  <Wallet className="w-5 h-5" />
                  <span className="uppercase tracking-[0.25em] text-sm text-blue-300/90">Pembayaran</span>
                </div>
                <h3 className="mt-5 text-3xl font-bold">Metode pembayaran</h3>
                <p className="mt-4 text-slate-400 leading-7">Pilih metode yang paling nyaman untukmu. Semua opsi diproses cepat dan aman.</p>

                <div className="mt-8 grid gap-4">
                  {payments.map((payment, index) => (
                    <button
                      key={payment.label}
                      onClick={() => setActivePayment(index)}
                      className={`rounded-3xl border p-5 text-left transition ${
                        activePayment === index
                          ? "border-cyan-400/70 bg-cyan-500/10 shadow-[0_20px_70px_rgba(56,189,248,.14)]"
                          : "border-white/10 bg-slate-900/70 hover:border-cyan-400/30 hover:bg-slate-900/90"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold text-lg">{payment.label}</p>
                          <p className="mt-2 text-sm text-slate-400">{payment.description}</p>
                        </div>
                        <span className={`inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-gradient-to-br ${payment.color} text-slate-950`}>
                          <CreditCard className="w-5 h-5" />
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="rounded-[40px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-500/10"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Order summary</p>
                  <h2 className="mt-3 text-3xl font-bold">Ringkasan Top-up</h2>
                </div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-500 text-slate-950">
                  <Gamepad2 className="w-6 h-6" />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm text-slate-400">Game</p>
                  <p className="mt-2 text-xl font-semibold">{selectedGame.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{selectedGame.tag} • Instan</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm text-slate-400">Paket</p>
                  <p className="mt-2 text-xl font-semibold">{selectedPackage.label}</p>
                  <p className="mt-1 text-sm text-slate-500">{selectedPackage.amount} • {selectedPackage.bonus}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm text-slate-400">Pembayaran</p>
                  <p className="mt-2 text-xl font-semibold">{selectedPayment.label}</p>
                  <p className="mt-1 text-sm text-slate-500">{selectedPayment.description}</p>
                </div>
                <div className="rounded-[32px] bg-cyan-500/10 p-5 border border-cyan-500/20">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Total</span>
                    <span className="text-xl font-bold text-white">{selectedPackage.price}</span>
                  </div>
                  <div className="mt-4 rounded-3xl bg-slate-950/80 px-4 py-4 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <Clock3 className="w-4 h-4 text-cyan-300" />
                      <span>Estimasi konfirmasi: Instan / 1-5 menit</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="mt-8 w-full rounded-3xl px-6 py-4" variant="primary">
                Checkout sekarang
              </Button>
            </motion.div>

            <Card className="p-8">
              <div className="flex items-center gap-4 text-cyan-300">
                <Shield className="w-5 h-5" />
                <span className="uppercase tracking-[0.25em] text-sm text-cyan-300/90">Keunggulan</span>
              </div>
              <div className="mt-6 space-y-5 text-slate-400 text-sm leading-7">
                <p className="rounded-3xl bg-slate-900/80 p-4">- Pembayaran terverifikasi dan refund mudah jika diperlukan.</p>
                <p className="rounded-3xl bg-slate-900/80 p-4">- Pembelian diproses otomatis, tanpa antre, langsung masuk.</p>
                <p className="rounded-3xl bg-slate-900/80 p-4">- Layanan support 24/7 siap bantu masalah top-up kapan saja.</p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
