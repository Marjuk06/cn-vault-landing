import { motion } from 'framer-motion';
import { GitBranch, Globe, MapPin, User as UserIcon, Code2, Database, Shield, Layout, Blocks } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

export const AboutPage = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          About <span className="text-gradient">the Project</span>
        </h1>
        <p className="text-xl text-white/50 max-w-2xl mx-auto">
          The developer behind CN Vault and the technical architecture that powers it.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Developer Profile Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-4"
        >
          <GlassCard glow className="p-8 sticky top-32">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-violet-500/30 p-1">
                <img 
                  src="https://avatars.githubusercontent.com/u/219376926?v=4" 
                  alt="Marjuk Amin" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-1">Marjuk Amin</h2>
              <a href="https://github.com/Marjuk06" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-mono mb-4 flex items-center justify-center gap-2">
                <GitBranch className="w-4 h-4" />
                @Marjuk06
              </a>
              
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Hi there! 👋 I'm Marjuk. I'm passionate about coding and problem-solving, currently working on AI-powered tools, web development projects, and tech solutions.
              </p>

              <div className="w-full space-y-3 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <MapPin className="w-4 h-4 text-violet-400" />
                  <span>Bangladesh</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <Globe className="w-4 h-4 text-violet-400" />
                  <a href="https://marjukcreates.org/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">marjukcreates.org</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <UserIcon className="w-4 h-4 text-violet-400" />
                  <span>Available for hire</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Project Build Architecture Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-8 space-y-8"
        >
          <GlassCard className="p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Code2 className="w-6 h-6 text-cyan-400" />
              The Architecture
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              CN Vault is meticulously engineered as a <strong>local-first</strong> desktop application. It utilizes a modern tech stack to bridge the gap between heavy-duty cryptographic security and a smooth, premium user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-violet-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Tauri & Rust Backend</h4>
                <p className="text-sm text-white/50 leading-relaxed">
                  The core application logic, file system access, and cryptography are written entirely in Rust using the Tauri framework. This guarantees memory safety, blisteringly fast performance, and a tiny binary footprint compared to Electron.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                  <Layout className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2">React & TypeScript</h4>
                <p className="text-sm text-white/50 leading-relaxed">
                  The frontend is powered by React with strictly-typed TypeScript. We use Zustand for lightning-fast state management without the boilerplate of Redux, ensuring the UI remains highly responsive.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                  <Database className="w-5 h-5 text-indigo-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Local SQLite</h4>
                <p className="text-sm text-white/50 leading-relaxed">
                  All your data stays yours. The vault is securely stored in a local SQLite database file, utilizing Write-Ahead Logging (WAL) for atomic, corruption-resistant transactions.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-fuchsia-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-fuchsia-500/20 flex items-center justify-center mb-4">
                  <Blocks className="w-5 h-5 text-fuchsia-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Tailwind & Framer</h4>
                <p className="text-sm text-white/50 leading-relaxed">
                  The premium aesthetic is achieved through TailwindCSS utility classes, paired with Framer Motion for buttery-smooth micro-animations, layout transitions, and the distinct glassmorphism glow.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8 md:p-10 border-violet-500/20">
            <h3 className="text-xl font-bold mb-4">Cryptographic Foundations</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Our security layer assumes the host machine could be compromised. We employ defense-in-depth measures:
            </p>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-0.5">•</span>
                <span><strong>Argon2id (v0x13):</strong> Hardened key derivation using the winner of the Password Hashing Competition to prevent GPU brute-forcing.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-0.5">•</span>
                <span><strong>AES-256-GCM:</strong> Authenticated symmetric encryption for all vault entries.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-0.5">•</span>
                <span><strong>Memory Zeroization:</strong> Passwords and derived keys are actively wiped from RAM immediately after they are used.</span>
              </li>
            </ul>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};
