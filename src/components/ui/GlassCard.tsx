import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hover?: boolean;
}

export const GlassCard = ({ children, className = '', glow = false, hover = true, ...props }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={cn(
        "relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl overflow-hidden transition-colors duration-300",
        hover && "hover:bg-white/[0.05]",
        className
      )}
      {...props}
    >
      {glow && (
        <div className="absolute -inset-0.5 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl z-[-1]" />
      )}
      <div className="relative z-10 h-full p-6">
        {children}
      </div>
      <div className="absolute inset-0 bg-glass-gradient pointer-events-none" />
    </motion.div>
  );
};
