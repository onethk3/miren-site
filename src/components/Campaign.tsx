'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Campaign() {
  const images = [
    '/images/placeholder_image_compressed.webp',
    '/images/placeholder2.webp',
    '/images/placeholder3.webp',
    '/images/campaign_placeholder_4.jpg',
    '/images/campaign_placeholder_5.jpg',
    '/images/campaign_placeholder_6.jpg'
  ];
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Delay the start and end of horizontal scrolling.
  // Hold at 0 for the first 15% (to let the user land), 
  // and hold at 1 for the last 15% (to let the user rest on the final images before unsticking).
  const delayedProgress = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 0, 1, 1]);

  // Smooth out the scroll wheel ticks with physics
  const smoothProgress = useSpring(delayedProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Framer Motion cannot interpolate complex CSS calc() strings, which causes it to "snap" or jump.
  // We pass the raw 0-1 progress as a CSS variable and do the interpolation natively in CSS.


  return (
    <section id="campaign" className="bg-black text-white w-full">
      <div ref={containerRef} className="h-auto md:h-[300vh] w-full max-w-7xl mx-auto">
        <div className="md:sticky md:top-0 md:h-dvh md:flex md:flex-col md:justify-center overflow-hidden py-24 md:py-0">
          
          <div className="px-8 w-full mb-12 md:mb-16 shrink-0">
            <h2 className="text-heading mb-6 md:mb-8">Campaign</h2>
            <p className="text-body max-w-2xl">
              Explore our latest collection, where timeless elegance meets modern design. 
              A journey through high-end fashion crafted with precision and passion.
            </p>
          </div>

          {/* Horizontal Track Container */}
          <div className="w-full">
            <motion.div 
              className="flex gap-4 px-8 overflow-x-auto md:overflow-x-visible hide-scrollbar md:w-max md-transform-only snap-x snap-mandatory"
              style={{ '--progress': smoothProgress } as any}
            >
              {images.map((src, i) => (
                <div key={i} className="relative shrink-0 w-[85vw] aspect-[4/5] md:w-auto md:h-[50vh] overflow-hidden group snap-center">
                  <Image
                    src={src}
                    alt={`Campaign Image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 85vw, 33vw"
                  />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
