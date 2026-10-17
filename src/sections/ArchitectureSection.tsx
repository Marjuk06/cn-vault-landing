import { motion } from 'framer-motion';
import { Database, Lock, Key, Cpu, ShieldCheck, Wifi, HardDrive } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { Link } from 'react-router-dom';

export const ArchitectureSection = () => {
  const steps = [
    { icon: <Key className="w-6 h-6 text-violet-400" />, label: "Master Password", desc: "User secret, never stored on disk" },
    { icon: <Cpu className="w-6 h-6 text-indigo-400" />, label: "Argon2id (v0x13)", desc: "16-byte salt, GPU-resistant KDF" },
    { icon: <Lock className="w-6 h-6 text-cyan-400" />, label: "AES-256-GCM", desc: "12-byte random nonce per entry" },
    { icon: <Database className="w-6 h-6 text-emerald-400" />, label: "Encrypted SQLite", desc: "Local database with WAL mode" },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="security">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Cryptographic Proof</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Security Architecture</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Zero compromises on cryptography. From strict memory zeroization to hardware-resistant key derivation.
          </p>
        </motion.div>

        {/* Cryptographic Pipeline Flow */}
        <div className="relative pt-6 mb-16">
          <div className="hidden md:block absolute top-[44px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-violet-500/30 via-indigo-500/50 to-cyan-500/30" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center group text-center"
              >
                <div className="relative w-20 h-20 mb-4 flex items-center justify-center rounded-2xl bg-[#0A0A0A] border border-white/10 shadow-xl group-hover:scale-110 group-hover:border-violet-500/50 transition-all duration-300 z-10">
                  <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {step.icon}
                </div>
                <h3 className="text-white font-medium text-base mb-1">{step.label}</h3>
                <p className="text-xs text-white/40 max-w-[180px] leading-relaxed">{step.desc}</p>
                
                {index < steps.length - 1 && (
                  <motion.div
                    className="md:hidden w-[2px] h-8 bg-white/10 my-3"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Architecture Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8 border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-violet-400 font-semibold text-xs uppercase tracking-wider font-mono">
                  <ShieldCheck className="w-4 h-4" /> Defense In Depth
                </div>
                <p className="text-white/60 text-xs leading-relaxed">
                  We assume the host machine could be hostile. Passwords and derived keys in RAM are actively zeroized immediately following use.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase tracking-wider font-mono">
                  <HardDrive className="w-4 h-4" /> Atomic Local Storage
                </div>
                <p className="text-white/60 text-xs leading-relaxed">
                  Data is persisted to a local <code className="text-cyan-300 font-mono">vault.db</code> SQLite file in Write-Ahead Logging (WAL) mode for corruption resistance and instant reads.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider font-mono">
                  <Wifi className="w-4 h-4" /> Network Transparency
                </div>
                <p className="text-white/60 text-xs leading-relaxed">
                  Zero telemetry. The only network call is an optional public favicon fetcher for saved website URLs, which falls back to offline initials without network.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs">
              <span className="text-white/40">Verified from Tauri & Rust application source code.</span>
              <div className="flex items-center gap-4">
                <Link to="/docs" className="text-cyan-400 hover:text-cyan-300 underline font-mono">Technical Documentation →</Link>
                <Link to="/product" className="text-violet-400 hover:text-violet-300 underline font-mono">Product Architecture →</Link>
              </div>
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
};
