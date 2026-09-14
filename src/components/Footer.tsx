import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="px-8 py-16 bg-[#050505] text-white border-t border-white/10 text-center md:text-left">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12 flex flex-col md:grid">
        <div className="flex flex-col items-center md:items-start">
          <div className="relative h-24 w-80 md:h-[200px] md:w-[500px] mb-6 md:-ml-6">
            <Image 
              src="/logo.svg" 
              alt="MI-REN Logo" 
              fill 
              className="object-contain object-center md:object-left brightness-0 invert"
            />
          </div>
          <p className="text-caption">
            © {new Date().getFullYear()} MI-REN Official.<br />
            All rights reserved.
          </p>
        </div>
        
        <div>
          <h4 className="text-caption font-bold uppercase tracking-widest mb-6 !text-white/50">Contact</h4>
          <ul className="space-y-4">
            <li><a href="mailto:inquiries@miren.com" className="text-caption !text-white/80 hover:!text-white transition-colors">inquiries@miren.com</a></li>
            <li><p className="text-caption !text-white/80">+94 77 600 0748</p></li>
            <li><p className="text-caption !text-white/80">91, Colombo road,<br/>Negombo.</p></li>
          </ul>
        </div>

        <div>
          <h4 className="text-caption font-bold uppercase tracking-widest mb-6 !text-white/50">Social</h4>
          <div className="flex flex-col items-center md:items-start space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <a 
              href="https://www.instagram.com/miren_imperfection.redifined" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="opacity-80 hover:opacity-100 transition-opacity block"
            >
              <div className="relative w-8 h-8 md:w-6 md:h-6">
                <Image 
                  src="/instagram.svg" 
                  alt="Instagram" 
                  fill 
                  className="object-contain brightness-0 invert" 
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
