import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/50 pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 inline-flex">
              <img src="/assets/logoo.png" alt="CN Vault Logo" className="w-8 h-8 opacity-80" />
              <span className="font-semibold text-lg tracking-tight text-white/80">CN Vault</span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              A premium local-first password manager built for people who value privacy, speed, and complete ownership of their data.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/30 bg-white/5 inline-flex px-3 py-1.5 rounded-md border border-white/5">
              <Shield className="w-3 h-3 text-cyan-500" />
              <span>v1.0.0</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/download" className="hover:text-white transition-colors">Download</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><Link to="/#roadmap" className="hover:text-white transition-colors">Roadmap</Link></li>
              <li><Link to="/#features" className="hover:text-white transition-colors">Features</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="https://github.com/Marjuk06/CN-Vault" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              <li><Link to="/#security" className="hover:text-white transition-colors">Security</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="https://github.com/Marjuk06/CN-Vault/blob/main/LICENSE" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">License</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} CN Vault. All rights reserved.</p>
          <p>Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
};
