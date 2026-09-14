'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import heroImg from '../../public/images/final/compressed/hero_image.webp';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Container is 150vh, sticky element is 100vh.
  // Progress 0 to 1 represents the 50vh of scroll while the element is sticky.
  // 0 to 0.7: first 35vh of scroll (fade out)
  // 0.7 to 1: next 15vh of scroll (stay completely clear and sticky)
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0, 0]);

  return (
    <>
      <div id="home" ref={containerRef} className="relative h-[150vh]">
        <div className="sticky top-0 h-dvh w-full overflow-hidden will-change-transform transform-gpu">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={heroImg}
              placeholder="blur"
              alt="MI-REN High-end Fashion"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          
          {/* Dark Overlay */}
          <motion.div
            style={{ opacity }}
            className="absolute inset-0 bg-black/60 pointer-events-none"
          />

          {/* Center Logo */}
          <motion.div
            style={{ opacity }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none px-4"
          >
            <div className="relative w-80 h-56 md:w-[800px] md:h-[550px]">
              <Image 
                src="/logo.svg" 
                alt="MI-REN Logo" 
                fill 
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Anchor for Home nav link so it skips the sticky scroll animation */}
      <div id="home-content" className="w-full h-1" />
    </>
  );
}
