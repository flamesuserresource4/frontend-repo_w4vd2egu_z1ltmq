import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sword, Gamepad2, Trophy, Flame, Zap, Mail } from 'lucide-react'

function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
            <Flame className="h-5 w-5 text-black" />
          </div>
          <span className="text-white font-bold tracking-wide">Gelang Hitam</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Fitur</a>
          <a href="#games" className="hover:text-white transition">Trending</a>
          <a href="/test" className="hover:text-white transition">Status</a>
          <a href="#newsletter" className="px-3 py-1.5 rounded bg-white text-black font-medium hover:bg-white/90 transition">Gabung</a>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <div className="relative pt-24 pb-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 -left-48 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-48 -right-48 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent"
        >
          Gelang Hitam
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
        >
          Website gaming modern untuk pemain yang haus kompetisi. Temukan game trending, bangun squad, dan panen trofi.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a href="#games" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition inline-flex items-center gap-2">
            <Gamepad2 className="h-5 w-5" /> Lihat Game
          </a>
          <a href="#newsletter" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition inline-flex items-center gap-2">
            <Mail className="h-5 w-5" /> Ikuti Update
          </a>
        </motion.div>
      </div>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition"
    >
      <Icon className="h-6 w-6 text-emerald-400" />
      <h3 className="mt-3 text-white font-semibold">{title}</h3>
      <p className="mt-1 text-white/70 text-sm">{desc}</p>
    </motion.div>
  )
}

function Features() {
  const items = [
    { icon: Trophy, title: 'Leaderboard Global', desc: 'Bersaing dan panjat peringkat dunia secara real-time.' },
    { icon: Sword, title: 'Clan & Scrim', desc: 'Bentuk clan, atur sparring, dan dominasi turnamen mingguan.' },
    { icon: Zap, title: 'Performa Kencang', desc: 'UI ringan, responsif, dan siap untuk aksi cepat.' },
  ]

  return (
    <div id="features" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <FeatureCard key={i} icon={it.icon} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </div>
  )
}

function GameCard({ title, genre, cover }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
    >
      <div className="aspect-video w-full bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center">
        <span className="text-white/60">{cover}</span>
      </div>
      <div className="p-4">
        <h4 className="text-white font-semibold">{title}</h4>
        <p className="text-xs text-white/60 mt-1">{genre}</p>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </motion.div>
  )
}

function Games() {
  const games = [
    { title: 'Shadow Arena', genre: 'Battle Royale', cover: 'SA' },
    { title: 'Neon Drift', genre: 'Racing', cover: 'ND' },
    { title: 'Arc Mage', genre: 'Action RPG', cover: 'AM' },
    { title: 'Steel Ops', genre: 'FPS Tactical', cover: 'SO' },
    { title: 'Sky Forge', genre: 'MMO', cover: 'SF' },
    { title: 'Byte Brawl', genre: 'Fighting', cover: 'BB' },
  ]

  return (
    <div id="games" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl font-bold">Trending Minggu Ini</h2>
          <a href="#" className="text-sm text-emerald-300 hover:text-emerald-200">Lihat semua</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((g) => (
            <GameCard key={g.title} {...g} />)
          )}
        </div>
      </div>
    </div>
  )
}

function Newsletter() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${baseUrl}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Gagal mendaftar')
      setStatus({ ok: true, msg: 'Terima kasih! Kamu sudah terdaftar.' })
      setEmail('')
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id="newsletter" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="md:flex items-center gap-8">
            <div className="flex-1">
              <h3 className="text-white text-2xl font-bold">Ikut Update Gelang Hitam</h3>
              <p className="text-white/70 mt-1">Dapatkan info turnamen, patch notes, dan rilisan game terbaru.</p>
            </div>
            <form onSubmit={submit} className="mt-6 md:mt-0 flex-1 flex gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="emailmu@domain.com"
                className="flex-1 rounded-lg bg-black/40 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-3 rounded-lg bg-emerald-400 text-black font-semibold hover:bg-emerald-300 disabled:opacity-60"
              >
                {loading ? 'Mengirim...' : 'Daftar'}
              </button>
            </form>
          </div>
          {status && (
            <p className={`mt-4 text-sm ${status.ok ? 'text-emerald-300' : 'text-red-300'}`}>{status.msg}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  useEffect(() => {
    // optional side effects
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Games />
        <Newsletter />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm text-white/60">
          <p>© {new Date().getFullYear()} Gelang Hitam. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Kebijakan</a>
            <a href="#" className="hover:text-white">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
