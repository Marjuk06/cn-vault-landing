import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ShowcaseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative h-[800px] flex items-center justify-center">
          
          {/* Main Dashboard - Center */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="absolute z-30 w-full max-w-4xl"
          >
            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-violet-500/20 bg-[#0A0A0A]">
              <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <img src="/screenshots/dashboard.png" alt="CN Vault Dashboard" className="w-full h-auto" />
            </div>
          </motion.div>

          {/* Left Parallax Card - Lock Screen */}
          <motion.div
            style={{ y: y1 }}
            className="absolute left-0 z-20 w-1/3 hidden lg:block opacity-60 hover:opacity-100 transition-opacity duration-500 hover:z-40"
          >
            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#0A0A0A] transform -rotate-6 scale-90">
              <img src="/screenshots/locscreen.png" alt="Unlock Screen" className="w-full h-auto" />
            </div>
          </motion.div>

          {/* Right Parallax Card - New Entry */}
          <motion.div
            style={{ y: y2 }}
            className="absolute right-0 z-20 w-1/3 hidden lg:block opacity-60 hover:opacity-100 transition-opacity duration-500 hover:z-40"
          >
            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#0A0A0A] transform rotate-6 scale-90">
              <img src="/screenshots/newentry.png" alt="Add New Entry" className="w-full h-auto" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
