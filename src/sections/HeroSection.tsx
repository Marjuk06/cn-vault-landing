import { motion } from 'framer-motion';
import { GitBranch, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { detectPlatform } from '../utils/detectPlatform';
import { currentRelease } from '../data/release';

export const HeroSection = () => {
  const { os } = detectPlatform();
  const platformName = os ? currentRelease.platforms[os].name : 'Windows';

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-20">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Release Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>CN Vault v{currentRelease.version} Released</span>
          <span className="text-white/30">•</span>
          <span className="text-white/60">Local-First Desktop App</span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 block"
        >
          <img 
            src="/assets/logoo.png" 
            alt="CN Vault Logo" 
            className="w-28 h-28 md:w-32 md:h-32 mx-auto drop-shadow-[0_0_35px_rgba(192,132,252,0.5)] object-contain" 
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Secure secrets.<br />
          <span className="text-gradient">Local first.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A mathematically secure desktop password manager engineered with Rust and SQLite. No cloud dependencies, no tracking, complete data ownership.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Link
            to="/download"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-base flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-white/10"
          >
            <Download className="w-5 h-5" />
            <span>Download for {platformName}</span>
          </Link>
          <Link
            to="/product"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-base flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
          >
            <span>Product Details</span>
          </Link>
          <a
            href="https://github.com/Marjuk06/CN-Vault"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white font-semibold text-base flex items-center justify-center gap-2 hover:bg-white/10 transition-all backdrop-blur-md"
          >
            <GitBranch className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </motion.div>

        {/* Official Store Badges / Trust Markers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-4 border-t border-white/5 max-w-xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-white/40"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Telemetry</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Argon2id + AES-256-GCM</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Available on Windows Store & Snapcraft</span>
          </span>
        </motion.div>

      </div>
    </section>
  );
};
