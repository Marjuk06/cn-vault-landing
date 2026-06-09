import { motion } from 'framer-motion';
import { Download, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FinalCTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden text-center" id="download">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none animate-pulse" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
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
          className="text-xl text-white/50 mb-12 max-w-2xl mx-auto"
        >
          A password manager designed around privacy, not data collection. Get started today.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/download"
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black font-semibold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          >
            <Download className="w-6 h-6" />
            <span>Download CN Vault</span>
          </Link>
          <a
            href="https://github.com/Marjuk06/CN-Vault"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#0A0A0A] border border-white/10 text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
          >
            <GitBranch className="w-6 h-6" />
            <span>View Source</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
