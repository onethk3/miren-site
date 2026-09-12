'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLenis } from '@studio-freight/react-lenis';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Campaign', href: '#campaign' },
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lenis = useLenis();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    // Show header after scrolling down 1 viewport height
    if (latest > (typeof window !== 'undefined' ? window.innerHeight * 0.8 : 800)) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        // If the menu is open, force the header to be visible so the user can use the close button
        animate={(hidden && !isMenuOpen) ? 'hidden' : 'visible'}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-24 md:h-[100px] bg-black/40 backdrop-blur-md border-b border-white/10"
      >
        <div className="relative h-28 w-80 -ml-4">
          <Image 
            src="/logo.svg" 
            alt="MI-REN Logo" 
            fill 
            className="object-contain brightness-0 invert object-left"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                lenis?.scrollTo(link.href);
              }}
              className="text-base md:text-lg uppercase tracking-widest text-white/70 transition-colors hover:text-white cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden relative z-50 p-2 flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none hover:opacity-70 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-full h-[2px] bg-white block origin-center"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-[2px] bg-white block"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-full h-[2px] bg-white block origin-center"
          />
        </button>
      </motion.header>

      {/* Mobile Menu Full-Screen Overlay */}
      <motion.div
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, pointerEvents: "auto" },
          closed: { opacity: 0, pointerEvents: "none" }
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center md:hidden"
      >
        <nav className="flex flex-col gap-10 text-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              variants={{
                open: { y: 0, opacity: 1, transition: { delay: i * 0.1 + 0.1 } },
                closed: { y: 20, opacity: 0 }
              }}
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false); // Manually close menu on link click
                lenis?.scrollTo(link.href);
              }}
              className="text-3xl uppercase tracking-widest text-white/70 hover:text-white"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </>
  );
}
