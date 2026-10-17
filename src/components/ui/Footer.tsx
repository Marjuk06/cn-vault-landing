import { Link } from 'react-router-dom';
import { Shield, GitBranch } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/70 pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 inline-flex">
              <img src="/assets/logoo.png" alt="CN Vault Logo" className="w-8 h-8 object-contain" />
              <span className="font-semibold text-lg tracking-tight text-white">CN Vault</span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              An independently developed, local-first password manager engineered with Rust, Tauri, and SQLite. Zero telemetry, zero cloud lock-in.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-white/40 bg-white/5 px-3 py-1.5 rounded-md border border-white/5 font-mono">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>v1.0.1 Stable</span>
              </div>
              <a
                href="https://github.com/Marjuk06/CN-Vault"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-white/40 bg-white/5 hover:bg-white/10 hover:text-white px-3 py-1.5 rounded-md border border-white/5 font-mono transition-colors"
              >
                <GitBranch className="w-3.5 h-3.5" />
                <span>MIT License</span>
              </a>
            </div>
          </div>
          
          {/* Column 1: Product & Downloads */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5 tracking-wide">Product</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link to="/product" className="hover:text-white transition-colors">Product</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/download" className="hover:text-white transition-colors">Downloads</Link></li>
              <li><Link to="/#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/#security" className="hover:text-white transition-colors">Security Architecture</Link></li>
            </ul>
          </div>
          
          {/* Column 2: Resources & Support */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5 tracking-wide">Resources</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link to="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Support</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Developer</Link></li>
              <li><a href="https://snapcraft.io/cn-vault" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Snap Store</a></li>
              <li><a href="https://apps.microsoft.com/detail/9p888nv4qrls?referrer=appbadge&mode=full" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Microsoft Store</a></li>
              <li><a href="https://github.com/Marjuk06/CN-Vault" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub Repository</a></li>
            </ul>
          </div>
          
          {/* Column 3: Legal & Compliance */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5 tracking-wide">Legal</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
              <li><a href="https://github.com/Marjuk06/CN-Vault/blob/main/LICENSE" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">MIT License</a></li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} CN Vault • CodeNest. Developed by <a href="https://www.marjukamin.com/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white underline">Marjuk Amin</a>.</p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <span>•</span>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <span>•</span>
            <Link to="/refund-policy" className="hover:text-white transition-colors">Refunds</Link>
            <span>•</span>
            <a href="mailto:marjukamin06@gmail.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
