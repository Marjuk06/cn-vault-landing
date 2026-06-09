import { motion } from 'framer-motion';
import { Database, Lock, Key, Cpu } from 'lucide-react';

export const ArchitectureSection = () => {
  const steps = [
    { icon: <Key className="w-6 h-6 text-violet-500" />, label: "Master Password" },
    { icon: <Cpu className="w-6 h-6 text-indigo-500" />, label: "Argon2id (v0x13)" },
    { icon: <Lock className="w-6 h-6 text-cyan-500" />, label: "AES-256-GCM" },
    { icon: <Database className="w-6 h-6 text-white" />, label: "Encrypted SQLite" },
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Security Architecture</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Zero compromises on cryptography. From strict memory zeroization to hardware-resistant key derivation.
          </p>
        </motion.div>

        <div className="relative pt-10">
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-violet-500/20 via-indigo-500/50 to-cyan-500/20 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center group"
              >
                <div className="relative w-20 h-20 mb-6 flex items-center justify-center rounded-2xl bg-[#0A0A0A] border border-white/10 shadow-xl group-hover:scale-110 group-hover:border-white/30 transition-all duration-300 z-10">
                  <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {step.icon}
                </div>
                <h4 className="text-white font-medium text-center">{step.label}</h4>
                
                {index < steps.length - 1 && (
                  <motion.div
                    className="md:hidden w-[2px] h-10 bg-white/10 my-4"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
