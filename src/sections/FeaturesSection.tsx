import { motion } from 'framer-motion';
import { 
  KeySquare, StickyNote, Webhook, Fingerprint, 
  RefreshCcw, HardDrive, Timer, ClipboardX, 
  Search, Star, FolderTree 
} from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

export const FeaturesSection = () => {
  const features = [
    { icon: <KeySquare className="w-5 h-5" />, title: "Password Storage", desc: "Securely store login credentials." },
    { icon: <StickyNote className="w-5 h-5" />, title: "Secure Notes", desc: "Encrypted plain text for sensitive data." },
    { icon: <Webhook className="w-5 h-5" />, title: "API Keys", desc: "Manage tokens and environment secrets." },
    { icon: <Fingerprint className="w-5 h-5" />, title: "Recovery Codes", desc: "Backup your 2FA fallback codes safely." },
    { icon: <RefreshCcw className="w-5 h-5" />, title: "Password Generator", desc: "Entropy-scoring secure generator." },
    { icon: <HardDrive className="w-5 h-5" />, title: "Encrypted Backup", desc: "Export your entire vault securely." },
    { icon: <Timer className="w-5 h-5" />, title: "Auto Lock", desc: "Inactivity timers and exponential backoff." },
    { icon: <ClipboardX className="w-5 h-5" />, title: "Clipboard Protection", desc: "Passwords clear from clipboard automatically." },
    { icon: <Search className="w-5 h-5" />, title: "Instant Search", desc: "Full-text search across credentials." },
    { icon: <FolderTree className="w-5 h-5" />, title: "Categories", desc: "Organize items logically." },
    { icon: <Star className="w-5 h-5" />, title: "Favorites", desc: "Pin your most used secrets." }
  ];

  return (
    <section className="py-24 relative" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Everything you need.</h2>
          <p className="text-white/50 text-lg">Powerful features wrapped in a minimal interface.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <GlassCard className="h-full p-5 flex flex-col gap-3 group hover:border-violet-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-violet-500 group-hover:scale-110 group-hover:bg-violet-500/10 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-white font-medium">{feature.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{feature.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
