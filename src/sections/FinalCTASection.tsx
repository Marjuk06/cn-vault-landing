import { motion } from 'framer-motion';
import { Download, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FinalCTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden text-center" id="download">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none animate-pulse" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono mb-6"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>Local Storage • Zero Telemetry • Open Source Base</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Own your secrets.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          A password manager designed around mathematical privacy, not cloud subscriptions or telemetry. Download CN Vault today.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Link
            to="/download"
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black font-semibold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-2xl"
          >
            <Download className="w-6 h-6" />
            <span>Download CN Vault</span>
          </Link>
          <Link
            to="/pricing"
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#0A0A0A] border border-white/10 text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
          >
            <span>Licensing & Pricing</span>
            <ArrowRight className="w-5 h-5 text-violet-400" />
          </Link>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/40">
          <Link to="/docs" className="hover:text-white transition-colors">Documentation</Link>
          <span>•</span>
          <Link to="/product" className="hover:text-white transition-colors">Product Specifications</Link>
          <span>•</span>
          <Link to="/support" className="hover:text-white transition-colors">Developer Support</Link>
          <span>•</span>
          <a href="https://github.com/Marjuk06/CN-Vault" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub Repository</a>
        </div>
      </div>
    </section>
  );
};
