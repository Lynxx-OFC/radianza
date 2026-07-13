import { motion } from "framer-motion";
import { Gamepad2, Sparkles, CreditCard, ShieldCheck, ArrowRight } from "lucide-react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const games = [
  {
    name: "Mobile Legends",
    tag: "MLBB",
    color: "from-violet-500 to-fuchsia-500",
    description: "Diamond bundle, skins, and battle points.",
  },
  {
    name: "Free Fire",
    tag: "FF",
    color: "from-orange-500 to-amber-400",
    description: "Diamond top-up with instant delivery.",
  },
  {
    name: "PUBG Mobile",
    tag: "PUBG",
    color: "from-sky-500 to-cyan-400",
    description: "UC packages for royale pass & crates.",
  },
  {
    name: "Genshin Impact",
    tag: "Genshin",
    color: "from-cyan-500 to-indigo-500",
    description: "Primogem bundles for your next wish.",
  },
];

const packages = [
  { label: "Starter Pack", amount: "50 Diamonds", price: "Rp 25.000", bonus: "+5 Bonus" },
  { label: "Popular Pack", amount: "120 Diamonds", price: "Rp 55.000", bonus: "+12 Bonus" },
  { label: "Pro Pack", amount: "250 Diamonds", price: "Rp 108.000", bonus: "+28 Bonus" },
  { label: "Legend Pack", amount: "520 Diamonds", price: "Rp 215.000", bonus: "+55 Bonus" },
];

export default function Topup() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-slate-900/90 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
          <section>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/70 px-4 py-2 text-sm text-cyan-200 border border-cyan-500/20 mb-6">
              <Sparkles className="w-4 h-4" /> Modern Game Topup
            </span>

            <h1 className="text-5xl sm:text-6xl font-black leading-tight">
              Top-up cepat untuk semua game favoritmu.
            </h1>

            <p className="mt-6 max-w-xl text-slate-400 text-lg leading-8">
              Pilih game, paket, dan metode pembayaran dalam satu dashboard modern. Proses cepat, desain elegan, dan dukungan 24/7.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-300 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="font-semibold text-lg">Pembayaran Aman</h2>
                <p className="mt-2 text-slate-400 text-sm">Semua transaksi terenkripsi dan terverifikasi.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-300 mb-4">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h2 className="font-semibold text-lg">Metode Lengkap</h2>
                <p className="mt-2 text-slate-400 text-sm">Transfer bank, e-wallet, pulsa, dan kartu kredit tersedia.</p>
              </div>
            </div>

            <Button className="mt-10 px-8 py-4 rounded-3xl shadow-[0_20px_70px_rgba(59,130,246,.16)]" variant="primary">
              Mulai Top Up Sekarang
            </Button>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[40px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-500/10"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Radianza Topup</p>
                <h2 className="mt-3 text-3xl font-bold">Ringkasan pesanan</h2>
              </div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-500 text-slate-950">
                <Gamepad2 className="w-6 h-6" />
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-sm text-slate-400">Game</p>
                <p className="mt-2 text-xl font-semibold">Mobile Legends</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-sm text-slate-400">Paket</p>
                <p className="mt-2 text-xl font-semibold">Popular Pack - 120 Diamonds</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-sm text-slate-400">Total</p>
                <p className="mt-2 text-3xl font-black">Rp 55.000</p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-slate-900/70 p-5 border border-cyan-500/10">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Estimasi konfirmasi</span>
                <span>1-5 menit</span>
              </div>
              <div className="mt-4 rounded-2xl bg-slate-950/90 p-4">
                <p className="text-sm text-slate-300">Cukup pilih game dan paket, lalu lanjutkan ke pembayaran. Semua top-up diproses instan.</p>
              </div>
            </div>

            <Button className="mt-8 w-full px-6 py-4 rounded-3xl" variant="primary">
              Checkout sekarang
            </Button>
          </motion.div>
        </div>

        <section className="mt-20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Popular Games</p>
              <h2 className="mt-4 text-4xl font-extrabold">Pilih Game & Paket Top-up</h2>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 px-5 py-3 text-sm text-slate-300">
              <span className="font-semibold text-white">Live processing</span> • 3 juta pembeli
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {games.map((game) => (
              <Card key={game.name} className="p-6">
                <div className={`inline-flex items-center justify-center rounded-3xl bg-gradient-to-br ${game.color} p-4 text-white shadow-lg shadow-slate-900/30`}>
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <div className="mt-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold">{game.name}</h3>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200">{game.tag}</span>
                  </div>
                  <p className="mt-3 text-slate-400 text-sm leading-6">{game.description}</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-slate-300 text-sm">Instant Delivery</span>
                  <span className="text-cyan-300 font-semibold">Ready</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[40px] border border-white/10 bg-slate-950/80 p-8">
            <div className="flex items-center gap-4 text-cyan-300">
              <Sparkles className="w-5 h-5" />
              <span className="uppercase tracking-[0.25em] text-sm text-cyan-300/90">Paket Terbaik</span>
            </div>
            <h3 className="mt-5 text-3xl font-bold">Pilih paket top-up yang sesuai</h3>
            <p className="mt-4 text-slate-400 leading-7">Kami menyediakan paket hemat dan paket premium untuk gamer yang ingin cepat naik rank, kumpulkan skin, atau tetap kompetitif.</p>

            <div className="mt-8 space-y-4">
              {packages.map((pack) => (
                <div key={pack.label} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold">{pack.label}</p>
                      <p className="mt-2 text-sm text-slate-400">{pack.amount}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">{pack.price}</p>
                      <p className="text-sm text-cyan-300">{pack.bonus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[40px] border border-white/10 bg-slate-950/80 p-8">
            <div className="flex items-center gap-4 text-blue-400">
              <CreditCard className="w-5 h-5" />
              <span className="uppercase tracking-[0.25em] text-sm text-blue-300/90">Proses Cepat</span>
            </div>
            <h3 className="mt-5 text-3xl font-bold">Cara Top-up</h3>
            <ol className="mt-6 space-y-5 text-slate-400">
              <li className="rounded-3xl border border-white/5 bg-slate-900/80 p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 font-semibold">1</span>
                  <div>
                    <p className="font-semibold text-white">Pilih game dan server</p>
                    <p className="text-sm mt-1">Tentukan game dan ID akun yang ingin di-top-up.</p>
                  </div>
                </div>
              </li>
              <li className="rounded-3xl border border-white/5 bg-slate-900/80 p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 font-semibold">2</span>
                  <div>
                    <p className="font-semibold text-white">Pilih paket dan pembayaran</p>
                    <p className="text-sm mt-1">Lihat harga, bonus, dan metode yang paling cocok.</p>
                  </div>
                </div>
              </li>
              <li className="rounded-3xl border border-white/5 bg-slate-900/80 p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 font-semibold">3</span>
                  <div>
                    <p className="font-semibold text-white">Terima top-up instan</p>
                    <p className="text-sm mt-1">Saldo langsung masuk dalam beberapa menit.</p>
                  </div>
                </div>
              </li>
            </ol>
            <div className="mt-8 flex flex-col gap-4">
              <div className="rounded-3xl bg-slate-900/70 p-5 border border-cyan-500/10">
                <div className="flex items-center gap-3 text-cyan-300">
                  <ArrowRight className="w-4 h-4" />
                  <span className="font-semibold">Dukungan 24/7</span>
                </div>
                <p className="mt-3 text-slate-400 text-sm">Team siap bantu jika ada kendala topup atau pengiriman.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/70 p-5 border border-blue-500/10">
                <div className="flex items-center gap-3 text-blue-300">
                  <ArrowRight className="w-4 h-4" />
                  <span className="font-semibold">Skor Kepuasan Tinggi</span>
                </div>
                <p className="mt-3 text-slate-400 text-sm">Ribuan gamer sudah percaya layanan top-up kami.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
