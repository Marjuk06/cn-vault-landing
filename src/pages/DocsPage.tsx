import { motion } from 'framer-motion';
import { BookOpen, Terminal, Shield, HardDrive, ExternalLink, HelpCircle } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { Link } from 'react-router-dom';

export const DocsPage = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen max-w-5xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono uppercase tracking-wider mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Technical Documentation</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          CN Vault Documentation
        </h1>
        <p className="text-lg text-white/50 max-w-2xl mx-auto">
          Comprehensive guides covering installation, cryptographic design, local backup recovery, and security best practices.
        </p>
      </motion.div>

      <div className="space-y-12">
        {/* Guide 1: Installation & Setup */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Terminal className="w-6 h-6 text-cyan-400" />
            1. Installation & Quickstart
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard className="p-6">
              <h3 className="font-semibold text-white mb-2">Windows Installation</h3>
              <p className="text-sm text-white/60 mb-4">
                The recommended installation method for Windows 10 and 11 is through the verified Microsoft Store for automatic background updates.
              </p>
              <div className="space-y-2">
                <a
                  href="https://apps.microsoft.com/detail/9p888nv4qrls?referrer=appbadge&mode=full"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-xs flex items-center justify-between hover:bg-white/10 transition-colors"
                >
                  <span>Microsoft Store (App ID: 9p888nv4qrls)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
                <p className="text-xs text-white/40">
                  Alternatively, download standalone <code className="text-cyan-300 font-mono">.msi</code> or <code className="text-cyan-300 font-mono">.msix</code> installers from our <Link to="/download" className="text-cyan-400 underline">Downloads page</Link>.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="font-semibold text-white mb-2">Linux Installation</h3>
              <p className="text-sm text-white/60 mb-4">
                On Ubuntu, Debian, Fedora, Arch, and other distributions with Snap enabled, install directly via terminal:
              </p>
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-cyan-300 select-all mb-2 flex items-center gap-2">
                <span>sudo snap install cn-vault</span>
              </div>
              <p className="text-xs text-white/40">
                Sandboxed under Canonical Snap confinement to ensure isolation of credentials from other user processes.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Guide 2: Cryptographic Architecture */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Shield className="w-6 h-6 text-violet-400" />
            2. Cryptographic Architecture
          </h2>

          <GlassCard className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="font-semibold text-violet-300 mb-1">Key Derivation (Argon2id)</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  When creating your vault, a 16-byte cryptographically secure random salt is generated via OS entropy. Argon2id (v0x13) derives a 32-byte secret key with strict memory cost to defeat hardware brute-forcing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="font-semibold text-cyan-300 mb-1">Authenticated Encryption (AES-GCM)</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  All passwords, usernames, and notes are encrypted using AES-256-GCM. A fresh 12-byte random nonce is generated for every entry update, guaranteeing ciphertext non-repeatability.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="font-semibold text-emerald-300 mb-1">Memory Zeroization</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Plaintext master passwords and decrypted secret keys in Rust are wrapped in memory zeroization types. Memory pages are overwritten with zeroes upon locking the vault or closing the app.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-white/70">
              <div className="text-white/40 mb-2">// Database Schema in vault.db (SQLite)</div>
              <div>• app_metadata (key TEXT PRIMARY KEY, value TEXT) — stores salt & settings</div>
              <div>• vault_entries (id TEXT PRIMARY KEY, created_at INTEGER, updated_at INTEGER, encrypted_blob TEXT)</div>
            </div>
          </GlassCard>
        </section>

        {/* Guide 3: Backup & Restore */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <HardDrive className="w-6 h-6 text-emerald-400" />
            3. Backup & Recovery Workflow
          </h2>

          <GlassCard className="p-8 space-y-4">
            <p className="text-sm text-white/70 leading-relaxed">
              Because CN Vault is 100% local-first, backups are entirely under your control. We provide two distinct backup mechanisms:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h3 className="font-semibold text-white text-sm">Method A: In-App Encrypted Backup</h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Navigate to <strong>Settings → Backup & Restore</strong>. Click "Export Vault" to produce a standalone encrypted backup file. During restoration, CN Vault runs SQLite <code className="text-cyan-300 font-mono">PRAGMA integrity_check</code> to verify database consistency before applying data.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-white text-sm">Method B: Direct SQLite Database Copy</h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  You can copy the raw <code className="text-cyan-300 font-mono">vault.db</code> file from your OS AppData folder to an external encrypted USB drive or secondary hard drive. Because the database contains only ciphertext, offline copies remain secure.
                </p>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Guide 4: FAQs */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-yellow-400" />
            4. Common Technical Questions
          </h2>

          <div className="space-y-4">
            <GlassCard className="p-6">
              <h3 className="font-semibold text-white mb-2">What happens if I lose my Master Password?</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                CN Vault uses zero-knowledge cryptography. Your master password is the only key capable of deriving the decryption key for your database. If you lose your master password, <strong>your vault cannot be decrypted by anyone, including the developer</strong>. We strongly recommend writing your master password on paper and securing it in a physical safe.
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="font-semibold text-white mb-2">Does CN Vault make network calls?</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                The core app works entirely offline. The only network call occurs when you save a login entry with a website domain while connected to the internet; the app sends an HTTPS GET request to Clearbit or the target domain's favicon URL to retrieve a visual icon. No usernames, passwords, or personal credentials are sent.
              </p>
            </GlassCard>
          </div>
        </section>
      </div>
    </div>
  );
};
