import { motion } from 'framer-motion';
import { GitBranch, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-white/5 bg-black/50"
    >
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/logoo.png" alt="CN Vault Logo" className="w-8 h-8 object-contain" />
          <span className="font-semibold text-lg tracking-tight text-white">CN Vault</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/50">
          {isHomePage ? (
            <>
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#security" className="hover:text-white transition-colors">Security</a>
              <a href="#performance" className="hover:text-white transition-colors">Performance</a>
            </>
          ) : (
            <>
              <Link to="/#features" className="hover:text-white transition-colors">Features</Link>
              <Link to="/#security" className="hover:text-white transition-colors">Security</Link>
              <Link to="/#performance" className="hover:text-white transition-colors">Performance</Link>
            </>
          )}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Marjuk06/CN-Vault"
            target="_blank"
            rel="noreferrer"
            className="text-white/50 hover:text-white transition-colors"
            aria-label="GitHub Repository"
          >
            <GitBranch className="w-5 h-5" />
          </a>
          <Link
            to="/download"
            className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 border border-white/10 hover:border-white/20"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};
