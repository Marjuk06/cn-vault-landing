import { motion } from 'framer-motion';
import { GitBranch, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { detectPlatform } from '../utils/detectPlatform';
import { currentRelease } from '../data/release';

export const HeroSection = () => {
  const { os } = detectPlatform();
  const platformName = os ? currentRelease.platforms[os].name : 'Windows';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-block"
        >
          <img src="/assets/logoo.png" alt="CN Vault Logo" className="w-32 h-32 mx-auto drop-shadow-[0_0_30px_rgba(192,132,252,0.6)]" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Secure secrets.<br />
          <span className="text-gradient">Local first.</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A premium password manager built for people who value privacy, speed, and complete ownership of their data.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/download"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          >
            <Download className="w-5 h-5" />
            <span>Download for {platformName}</span>
          </Link>
          <a
            href="https://github.com/Marjuk06/CN-Vault"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
          >
            <GitBranch className="w-5 h-5" />
            <span>View on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
