import { motion } from 'framer-motion';
import { 
  KeyRound, 
  Cpu, 
  HardDrive, 
  Download, 
  CheckCircle2, 
  AlertTriangle, 
  UserCheck, 
  Layers, 
  ExternalLink,
  Lock,
  Search,
  Timer,
  ClipboardX
} from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { Link } from 'react-router-dom';

export const ProductPage = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen max-w-6xl mx-auto px-6">
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Product Overview & Specifications</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          CN Vault: <span className="text-gradient">Local-First Password Management</span>
        </h1>
        <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
          An independently developed, mathematically secure desktop password manager built with Rust, Tauri, and SQLite. Your secrets never leave your device.
        </p>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/download"
            className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
          >
            <Download className="w-4 h-4" />
            <span>Get CN Vault Free</span>
          </Link>
          <Link
            to="/pricing"
            className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm flex items-center gap-2 hover:bg-white/10 transition-all"
          >
            <span>View Licensing Status</span>
          </Link>
        </div>
      </motion.div>

      {/* Grid: What It Does & Who It Is For */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <GlassCard className="p-8 md:p-10 border-violet-500/20">
          <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-6">
            <KeyRound className="w-6 h-6 text-violet-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4">What CN Vault Does</h2>
          <p className="text-white/70 leading-relaxed text-sm mb-4">
            CN Vault gives you complete, uncompromising control over your digital credentials. Rather than uploading your most sensitive credentials to third-party cloud servers, CN Vault creates an encrypted, high-performance vault directly on your local computer.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            You can create, categorize, search, generate, and back up passwords, email logins, API secret keys, 2FA recovery codes, and sensitive notes—completely offline, with zero subscription gates on the core application.
          </p>
        </GlassCard>

        <GlassCard className="p-8 md:p-10 border-cyan-500/20">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6">
            <UserCheck className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Who It Is For</h2>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Privacy Conscious Users:</strong> Individuals unwilling to trust their entire identity to centralized cloud targets vulnerable to breaches.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Software Developers & DevOps:</strong> Engineers who manage dozens of API tokens, SSH passphrases, and recovery codes locally without cloud leaks.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Air-Gapped & Secure Workstations:</strong> Work environments with restricted internet access where desktop applications must function autonomously.</span>
            </li>
          </ul>
        </GlassCard>
      </div>

      {/* How It Works: Technical Architecture */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <GlassCard glow className="p-8 md:p-12 border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-3">How It Works Under the Hood</h2>
            <p className="text-white/50 text-sm">
              Engineered with Rust, Tauri, and SQLite for maximum memory safety and cryptographic integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
              <div className="w-10 h-10 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center mx-auto mb-4 font-mono font-bold text-sm">
                01
              </div>
              <h3 className="font-semibold text-white mb-2">Master Password</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                You create a Master Password. It never leaves RAM unencrypted and is never stored on disk.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-4 font-mono font-bold text-sm">
                02
              </div>
              <h3 className="font-semibold text-white mb-2">Argon2id KDF</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                A 16-byte CSPRNG salt and Argon2id hash derive a 32-byte secret key, preventing GPU brute-forcing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4 font-mono font-bold text-sm">
                03
              </div>
              <h3 className="font-semibold text-white mb-2">AES-256-GCM</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Authenticated encryption seals your payload with fresh 12-byte random nonces into the database.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 font-mono font-bold text-sm">
                04
              </div>
              <h3 className="font-semibold text-white mb-2">Local SQLite WAL</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Ciphertext is committed to a local single-file SQLite database with Write-Ahead Logging.
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Verified Feature Matrix */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Verified Core Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Lock className="w-5 h-5 text-violet-400" />,
              title: "AES-256-GCM Authenticated Encryption",
              desc: "Ensures credentials cannot be tampered with or deciphered without your derived key."
            },
            {
              icon: <Cpu className="w-5 h-5 text-indigo-400" />,
              title: "Argon2id (v0x13) Key Derivation",
              desc: "Memory-hard, winner of the Password Hashing Competition against GPU attack rigs."
            },
            {
              icon: <ClipboardX className="w-5 h-5 text-cyan-400" />,
              title: "Auto-Clearing Clipboard",
              desc: "Copied passwords automatically purge from the operating system clipboard after a customizable delay."
            },
            {
              icon: <Timer className="w-5 h-5 text-emerald-400" />,
              title: "Auto-Lock & Anti-Brute Force",
              desc: "Configurable inactivity timeouts lock the vault and exponential delay prevents brute-force attempts."
            },
            {
              icon: <Search className="w-5 h-5 text-yellow-400" />,
              title: "Instant Full-Text Search",
              desc: "Search across login titles, usernames, categories, and tags seamlessly in real time."
            },
            {
              icon: <HardDrive className="w-5 h-5 text-rose-400" />,
              title: "Encrypted Backups & Integrity Check",
              desc: "Export your entire vault securely; SQLite PRAGMA integrity_check validates backups before restoring."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Security & Privacy Limitations (Crucial Transparency) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <GlassCard className="p-8 md:p-10 border-amber-500/30 bg-amber-950/10">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="w-7 h-7 text-amber-400 shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Security & Privacy Limitations</h2>
              <p className="text-white/70 text-sm">
                True security requires radical transparency about what a local password manager can and cannot do.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-white/70">
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
              <h3 className="font-semibold text-white">No Cloud Password Reset</h3>
              <p>
                Because CN Vault operates with zero knowledge, <strong>there is no "Forgot Password" link</strong>. If you forget your Master Password, neither developer Marjuk Amin nor any automated service can reset it.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
              <h3 className="font-semibold text-white">User-Managed Backups</h3>
              <p>
                There is no background cloud synchronization. If your hard drive suffers catastrophic failure, your vault can only be restored from offline backup files that you have saved.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
              <h3 className="font-semibold text-white">Public Favicon Fetcher</h3>
              <p>
                When online and creating a login with a website URL, the app queries Clearbit or target domain <code className="text-cyan-300">favicon.ico</code> for visual logos. No credentials or passwords are ever transmitted.
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Supported Platforms & System Requirements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Supported Operating Systems</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 border-white/10">
            <h3 className="text-xl font-bold mb-3 flex items-center justify-between">
              <span>Windows</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">Supported</span>
            </h3>
            <ul className="text-xs text-white/60 space-y-2 mb-6">
              <li>• Windows 10, Windows 11 (x64)</li>
              <li>• Microsoft Store package or standalone MSI / MSIX</li>
              <li>• Requires WebView2 runtime (pre-installed on Win 10/11)</li>
            </ul>
            <a
              href="https://apps.microsoft.com/detail/9p888nv4qrls?referrer=appbadge&mode=full"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-mono"
            >
              <span>View in Microsoft Store</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </GlassCard>

          <GlassCard className="p-6 border-white/10">
            <h3 className="text-xl font-bold mb-3 flex items-center justify-between">
              <span>Linux</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">Supported</span>
            </h3>
            <ul className="text-xs text-white/60 space-y-2 mb-6">
              <li>• Ubuntu, Debian, Fedora, Arch, OpenSUSE</li>
              <li>• Available via Canonical Snapcraft (`sudo snap install cn-vault`)</li>
              <li>• Sandboxed isolation for memory and process safety</li>
            </ul>
            <a
              href="https://snapcraft.io/cn-vault"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-mono"
            >
              <span>View on Snap Store</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </GlassCard>

          <GlassCard className="p-6 border-white/10">
            <h3 className="text-xl font-bold mb-3 flex items-center justify-between">
              <span>macOS</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/50 font-mono">Roadmap</span>
            </h3>
            <ul className="text-xs text-white/60 space-y-2 mb-6">
              <li>• macOS support is in planned development</li>
              <li>• Apple Silicon and Intel universal builds planned for V2</li>
              <li>• Stay updated via our GitHub releases</li>
            </ul>
            <span className="text-xs text-white/40 font-mono">Planned for upcoming release</span>
          </GlassCard>
        </div>
      </motion.div>

      {/* Developer & Support Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <GlassCard className="p-8 md:p-10 border-violet-500/20 text-center">
          <h2 className="text-2xl font-bold mb-3">Independent Engineering, Open Development</h2>
          <p className="text-white/60 text-sm max-w-2xl mx-auto mb-6">
            CN Vault is developed by Marjuk Amin (CodeNest). Have questions, need help, or want to audit the source code? We are here to support you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <Link to="/docs" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
              Read Documentation
            </Link>
            <Link to="/support" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
              Contact Support
            </Link>
            <a href="https://github.com/Marjuk06/CN-Vault" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
              Audit on GitHub
            </a>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};
