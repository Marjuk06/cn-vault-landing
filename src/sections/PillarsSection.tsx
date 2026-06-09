import { motion } from 'framer-motion';
import { ShieldCheck, EyeOff, KeyRound } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

export const PillarsSection = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-violet-500" />,
      title: "Security First",
      description: "Defense-in-depth architecture. Argon2id key derivation, AES-256-GCM encryption, and automatic memory zeroization ensure your vault is impenetrable."
    },
    {
      icon: <EyeOff className="w-8 h-8 text-indigo-500" />,
      title: "Privacy First",
      description: "No telemetry. No analytics. No cloud dependencies. Your data never leaves your device unless you explicitly export it."
    },
    {
      icon: <KeyRound className="w-8 h-8 text-cyan-500" />,
      title: "Complete Ownership",
      description: "Built on standard SQLite. Your entire vault is stored in a single, portable, encrypted file that you fully control."
    }
  ];

  return (
    <section className="py-24 relative z-10" id="pillars">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Built on core principles.</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            We assume the host machine could be compromised. Every component is designed to protect your most sensitive data.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <GlassCard glow className="h-full flex flex-col items-start text-left group">
                <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{pillar.title}</h3>
                <p className="text-white/50 leading-relaxed">
                  {pillar.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
