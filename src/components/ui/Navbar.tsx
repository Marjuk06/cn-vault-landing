import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, Download, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = location.pathname === '/';

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md border-b border-white/5 bg-black/60"
    >
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
        <Link to="/" onClick={closeMobile} className="flex items-center gap-3">
          <img src="/assets/logoo.png" alt="CN Vault Logo" className="w-8 h-8 object-contain" />
          <span className="font-semibold text-lg tracking-tight text-white">CN Vault</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/60">
          <Link 
            to="/product" 
            className={`transition-colors hover:text-white ${location.pathname === '/product' ? 'text-white' : ''}`}
          >
            Product
          </Link>
          <Link 
            to="/pricing" 
            className={`transition-colors hover:text-white ${location.pathname === '/pricing' ? 'text-white' : ''}`}
          >
            Pricing
          </Link>
          {isHomePage ? (
            <>
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#security" className="hover:text-white transition-colors">Security</a>
            </>
          ) : (
            <>
              <Link to="/#features" className="hover:text-white transition-colors">Features</Link>
              <Link to="/#security" className="hover:text-white transition-colors">Security</Link>
            </>
          )}
          <Link 
            to="/docs" 
            className={`transition-colors hover:text-white ${location.pathname === '/docs' ? 'text-white' : ''}`}
          >
            Docs
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors hover:text-white ${location.pathname === '/about' ? 'text-white' : ''}`}
          >
            About
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://github.com/Marjuk06/CN-Vault"
            target="_blank"
            rel="noreferrer"
            className="text-white/50 hover:text-white transition-colors p-2"
            aria-label="GitHub Repository"
          >
            <GitBranch className="w-5 h-5" />
          </a>
          <Link
            to="/download"
            className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 border border-white/10 hover:border-white/20 shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/download"
            onClick={closeMobile}
            className="bg-white/10 text-white px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 border border-white/10 sm:hidden"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Get</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/70 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-2xl mt-4 px-6 py-6"
          >
            <nav className="flex flex-col gap-4 text-base font-medium text-white/70">
              <Link 
                to="/product" 
                onClick={closeMobile}
                className="hover:text-white transition-colors py-1"
              >
                Product Overview
              </Link>
              <Link 
                to="/pricing" 
                onClick={closeMobile}
                className="hover:text-white transition-colors py-1"
              >
                Pricing & Licensing
              </Link>
              <Link 
                to="/download" 
                onClick={closeMobile}
                className="hover:text-white transition-colors py-1"
              >
                Download Releases
              </Link>
              <Link 
                to="/docs" 
                onClick={closeMobile}
                className="hover:text-white transition-colors py-1"
              >
                Documentation
              </Link>
              <Link 
                to="/support" 
                onClick={closeMobile}
                className="hover:text-white transition-colors py-1"
              >
                Support & Contact
              </Link>
              <Link 
                to="/about" 
                onClick={closeMobile}
                className="hover:text-white transition-colors py-1"
              >
                About Developer
              </Link>
              
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href="https://github.com/Marjuk06/CN-Vault"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <GitBranch className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
