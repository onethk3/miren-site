'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

import c1 from '../../public/images/final/compressed/campaign_1.webp';
import c2 from '../../public/images/final/compressed/campaign_2.webp';
import c3 from '../../public/images/final/compressed/campaign_3.webp';
import c4 from '../../public/images/final/compressed/campaign_4.webp';
import c5 from '../../public/images/final/compressed/campaign_5.webp';
import c6 from '../../public/images/final/compressed/campaign_6.webp';
import c7 from '../../public/images/final/compressed/campaign_7.webp';
import c8 from '../../public/images/final/compressed/campaign_8.webp';
import c9 from '../../public/images/final/compressed/campaign_9.webp';

export default function Campaign() {
  const images = [c7, c1, c2, c8, c3, c4, c9, c5, c6];
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });

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
      <div ref={containerRef} className="h-auto md:h-[300vh] w-full max-w-[90rem] mx-auto">
        <div className="md:sticky md:top-0 md:h-dvh md:flex md:flex-col md:justify-center overflow-hidden py-24 md:py-0">

          <div className="px-8 w-full mb-12 md:mb-16 shrink-0">
            <h2 className="text-heading mb-6 md:mb-8">Campaign</h2>
            <p className="text-body max-w-4xl">
              The collection explores tailored unisex suits that challenge traditional ideas of perfection and conventional tailoring. Through asymmetry, oversized silhouettes, raw edges and reconstructed details, imperfections are transformed into intentional design elements, encouraging the wearer to embrace individuality and self-expression.
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
                  {isInView && (
                    <Image
                      src={src}
                      placeholder="blur"
                      alt={`Campaign Image ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 85vw, 33vw"
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
