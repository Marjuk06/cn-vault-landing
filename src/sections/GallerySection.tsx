import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const screenshots = [
  { src: '/screenshots/dashboard.png', alt: 'Dashboard' },
  { src: '/screenshots/locscreen.png', alt: 'Unlock Screen' },
  { src: '/screenshots/newentry.png', alt: 'Add New Entry' },
  { src: '/screenshots/passgenertor.png', alt: 'Password Generator' },
  { src: '/screenshots/settings_profile.png', alt: 'Settings - Profile' },
  { src: '/screenshots/settings_security.png', alt: 'Settings - Security' },
  { src: '/screenshots/settings_backup.png', alt: 'Settings - Backup & Restore' },
];

export const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const next = () => setCurrentIndex((prev: number) => (prev + 1) % screenshots.length);
  const prev = () => setCurrentIndex((prev: number) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <section className="py-24 relative bg-black/40" id="gallery">
      <div className="max-w-[100vw] overflow-hidden px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Interface Gallery</h2>
          <p className="text-white/50">A clean, dark-themed experience.</p>
        </div>

        <div className="relative w-full h-[40vw] max-h-[600px] min-h-[300px]">
          
          <AnimatePresence initial={false}>
            {screenshots.map((img, idx) => {
              let offset = idx - currentIndex;
              if (offset < -Math.floor(screenshots.length / 2)) offset += screenshots.length;
              if (offset > Math.floor(screenshots.length / 2)) offset -= screenshots.length;
              
              if (Math.abs(offset) > 2) return null;

              const isActive = offset === 0;

              return (
                <motion.div
                  key={idx}
                  className="absolute left-1/2 top-1/2 w-[80%] max-w-4xl cursor-pointer"
                  initial={false}
                  animate={{
                    x: `calc(-50% + ${offset * 60}%)`,
                    y: "-50%",
                    scale: isActive ? 1 : 0.75,
                    opacity: isActive ? 1 : Math.abs(offset) === 1 ? 0.3 : 0,
                    zIndex: isActive ? 10 : 5 - Math.abs(offset)
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => {
                    if (isActive) setIsLightboxOpen(true);
                    else setCurrentIndex(idx);
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto rounded-xl border border-white/10 shadow-2xl shadow-black"
                  />
                  {isActive && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm rounded-xl pointer-events-none">
                      <div className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-md border border-white/20 text-white font-medium flex items-center gap-2">
                        Click to expand
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 md:px-12 z-20 pointer-events-none">
            <button 
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="p-3 md:p-4 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-black/80 pointer-events-auto transition-colors shadow-lg border border-white/10 hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="p-3 md:p-4 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-black/80 pointer-events-auto transition-colors shadow-lg border border-white/10 hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-20 translate-y-8">
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-violet-500 w-6' : 'bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
              onClick={() => setIsLightboxOpen(false)}
            >
              <button 
                className="absolute top-6 right-6 md:top-8 md:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110]"
                onClick={() => setIsLightboxOpen(false)}
              >
                <X className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              <button 
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-black/50 hover:bg-black/80 border border-white/10 rounded-full text-white backdrop-blur-md transition-colors z-[110] shadow-lg hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-black/50 hover:bg-black/80 border border-white/10 rounded-full text-white backdrop-blur-md transition-colors z-[110] shadow-lg hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              
              <img
                key={currentIndex}
                src={screenshots[currentIndex].src}
                alt={screenshots[currentIndex].alt}
                className="max-w-[90vw] max-h-[85vh] w-auto h-auto rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 object-contain z-[100]"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};
