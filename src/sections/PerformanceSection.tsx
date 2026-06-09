import { motion } from 'framer-motion';
import { Zap, Terminal, Database } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

export const PerformanceSection = () => {
  return (
    <section className="py-24 relative" id="performance">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Blazing fast.<br />
              <span className="text-indigo-500">Native performance.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50 text-lg mb-8 leading-relaxed"
            >
              By leveraging Rust and Tauri, CN Vault delivers a lightweight, incredibly fast native experience with minimal memory footprint.
            </motion.p>
            
            <div className="space-y-6">
              {[
                { icon: <Terminal className="text-cyan-500 w-5 h-5" />, title: "Rust Backend", desc: "Memory safety and high-performance cryptography." },
                { icon: <Zap className="text-yellow-500 w-5 h-5" />, title: "Tauri Framework", desc: "Native OS integration without the Chromium bloat." },
                { icon: <Database className="text-violet-500 w-5 h-5" />, title: "SQLite", desc: "Local, atomic, single-file database storage." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-white/40 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <GlassCard className="p-8 border-indigo-500/30 shadow-2xl shadow-indigo-500/10">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                  <span className="text-white font-mono text-sm">System Monitor</span>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div className="space-y-6 font-mono text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-white/40">Memory Usage</span>
                    <span className="text-cyan-500 font-semibold">~15 MB</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "15%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-cyan-500 rounded-full"
                    />
                  </div>
                  
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-white/40">Startup Time</span>
                    <span className="text-violet-500 font-semibold">&lt; 0.2s</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "5%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-violet-500 rounded-full"
                    />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
            
            {/* Ambient decorative element behind the card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/20 blur-[100px] z-0 rounded-full mix-blend-screen pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
