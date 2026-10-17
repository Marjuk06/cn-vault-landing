import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Layers, DollarSign, BookOpen, LifeBuoy } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="pt-32 pb-24 min-h-[80vh] flex flex-col items-center justify-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-10 relative px-6"
      >
        <h1 className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-violet-400 to-cyan-400 mb-6 tracking-tighter font-mono">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-white/50 max-w-md mx-auto mb-10 text-sm">
          The requested URL could not be located. Browse one of our verified pages below:
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold text-sm rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link
            to="/product"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-white font-semibold text-sm rounded-full hover:bg-white/10 transition-colors"
          >
            <Layers className="w-4 h-4" />
            <span>Product</span>
          </Link>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-white font-semibold text-sm rounded-full hover:bg-white/10 transition-colors"
          >
            <DollarSign className="w-4 h-4" />
            <span>Pricing</span>
          </Link>
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-white font-semibold text-sm rounded-full hover:bg-white/10 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>Docs</span>
          </Link>
          <Link
            to="/support"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-white font-semibold text-sm rounded-full hover:bg-white/10 transition-colors"
          >
            <LifeBuoy className="w-4 h-4" />
            <span>Support</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
