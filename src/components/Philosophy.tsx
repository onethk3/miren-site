import Image from 'next/image';
import philosophyImg from '../../public/images/final/compressed/philosophy_image.webp';

export default function Philosophy() {
  return (
    <section id="philosophy" className="px-8 py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-[90rem] mx-auto">
        <h2 className="text-heading mb-6 md:mb-12 text-left">Brand Philosophy</h2>
        <div className="grid grid-cols-1 min-[1350px]:grid-cols-12 gap-12 items-center">
          
          <div className="col-span-1 min-[1350px]:col-span-7">
            <div className="relative aspect-[4/3] min-[1350px]:aspect-[3/2] w-full max-w-3xl min-[1350px]:max-w-none overflow-hidden">
              <Image
                src={philosophyImg}
                placeholder="blur"
                alt="Our Philosophy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="col-span-1 min-[1350px]:col-span-5 flex flex-col justify-center min-[1350px]:pl-8">
            <p className="text-body mb-6">
              At MiRen, we believe that fashion is an extension of the self, a silent language spoken through fabric, cut, and silhouette. Inspired by Wabi-Sabi, the brand embraces imperfection, asymmetry and incompleteness.
            </p>
            <p className="text-body">
              It celebrates natural flaws as expressions of authenticity, individuality and beauty. Every stitch and seam is a testament to our dedication to craftsmanship, ensuring that each piece not only looks exquisite but feels extraordinary against the skin.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
