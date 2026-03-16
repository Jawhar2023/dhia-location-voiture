import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 500);
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setShow(false);
    setTimeout(onComplete, 500);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
        >
          {/* Gold light sweep */}
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '200%', opacity: [0, 0.6, 0.6, 0] }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="absolute inset-y-0 w-32 gold-gradient blur-3xl"
          />

          {/* Horizontal gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1.5 }}
            className="absolute top-1/2 left-0 right-0 h-px gold-gradient opacity-30"
          />

          <div className="text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, scale: 1, letterSpacing: '0.2em' }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-serif text-4xl md:text-6xl font-bold gold-text mb-4"
            >
              [y business name]
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '6rem' }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="h-0.5 gold-gradient mx-auto mb-3"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
            >
              Agence de location de voitures
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="text-sm text-muted-foreground mt-2"
            >
              Av. 20 mars, M'saken · 3,4 (5) · 5 avis
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={handleSkip}
            className="absolute bottom-10 right-10 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors border border-border/30 px-4 py-2 rounded-full"
          >
            Skip →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
