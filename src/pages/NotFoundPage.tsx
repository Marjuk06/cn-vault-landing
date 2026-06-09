import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="pt-32 pb-24 min-h-[80vh] flex flex-col items-center justify-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-10 relative px-6"
      >
        <h1 className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-violet-400 to-cyan-400 mb-6 tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-white/50 max-w-md mx-auto mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};
