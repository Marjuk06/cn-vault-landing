import { motion } from 'framer-motion';
import { CheckCircle2, CircleDashed } from 'lucide-react';

export const RoadmapSection = () => {
  const roadmap = [
    {
      version: "V1",
      title: "Foundation",
      status: "completed",
      items: ["SQLite Database", "Argon2id Key Derivation", "AES-256-GCM Encryption", "React Native-like UI"]
    },
    {
      version: "V2",
      title: "Quality of Life",
      status: "upcoming",
      items: ["Browser Extension", "Biometric Unlock", "Encrypted Attachments"]
    },
    {
      version: "V3",
      title: "Mobile & Sync",
      status: "future",
      items: ["Android App", "Local Wi-Fi Sync", "NFC Transfer"]
    }
  ];

  return (
    <section className="py-24 relative" id="roadmap">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Roadmap</h2>
          <p className="text-white/50 text-lg">Where we are and where we're heading.</p>
        </div>

        <div className="relative">
          {/* Center Line Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10 -translate-x-1/2" />
          {/* Center Line Mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-[20px] w-px bg-white/10 -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {roadmap.map((phase, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex items-center w-full"
                >
                  {/* Mobile Dot */}
                  <div className={`md:hidden absolute left-[20px] top-8 w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2 ring-4 ring-black z-10 ${phase.status === 'completed' ? 'bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 'bg-white/20'}`} />

                  {/* Desktop Dot */}
                  <div className={`hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full ring-8 ring-black z-10 ${phase.status === 'completed' ? 'bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 'bg-white/20'}`} />

                  {/* Card Container */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 shadow-xl hover:border-violet-500/30 transition-colors">
                      <span className="text-violet-500 font-mono text-sm font-semibold">{phase.version}</span>
                      <h3 className="text-xl font-bold text-white mb-4 mt-1">{phase.title}</h3>
                      <ul className="space-y-2">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-white/50">
                            {phase.status === 'completed' ? (
                               <CheckCircle2 className="w-4 h-4 text-violet-500/50" />
                            ) : (
                               <CircleDashed className="w-4 h-4 text-white/20" />
                            )}
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
