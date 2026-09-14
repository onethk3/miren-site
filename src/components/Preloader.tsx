'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Preloader() {
  // Strict sequential state machine
  const [phase, setPhase] = useState<'hold' | 'logo-exit' | 'slide' | 'done'>('hold');

  useEffect(() => {
    // Phase 1: Hold the black screen to allow background mounting
    // Lock scrolling so the user stays exactly at the top
    document.body.style.overflow = 'hidden';

    const holdTimer = setTimeout(() => {
      setPhase('logo-exit');
    }, 1800);

    return () => {
      clearTimeout(holdTimer);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    // Unlock scrolling as soon as the slide starts so the user can interact
    if (phase === 'slide' || phase === 'done') {
      document.body.style.overflow = '';
    }
  }, [phase]);

  if (phase === 'done') return null;

  return (
    <AnimatePresence onExitComplete={() => setPhase('done')}>
      {phase !== 'slide' && (
        <motion.div
          key="curtain"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }} // Sharp exponential ease for the slide
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <AnimatePresence onExitComplete={() => setPhase('slide')}>
            {phase === 'hold' && (
              <motion.div
                key="logo"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="relative w-48 h-32 md:w-80 md:h-56"
              >
                <Image 
                  src="/logo.svg" 
                  alt="MI-REN Logo" 
                  fill 
                  className="object-contain brightness-0 invert"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
