import Image from 'next/image';
import aboutImg from '../../public/images/final/compressed/about_image.webp';

export default function About() {
  return (
    <section id="about" className="px-8 py-24 bg-black text-white">
      <div className="max-w-[90rem] mx-auto">
        <h2 className="text-heading mb-6 md:mb-12 text-left">About <span className="whitespace-nowrap">MI-Ren</span></h2>
        <div className="grid grid-cols-1 min-[1350px]:grid-cols-12 gap-12 items-center">
          <div className="col-span-1 min-[1350px]:col-span-7 order-1 min-[1350px]:order-2">
            <div className="relative aspect-[4/3] min-[1350px]:aspect-[3/2] w-full max-w-3xl min-[1350px]:max-w-none overflow-hidden">
              <Image
                src={aboutImg}
                placeholder="blur"
                alt="About MI-REN"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </div>
          
          <div className="col-span-1 min-[1350px]:col-span-5 order-2 min-[1350px]:order-1 flex flex-col justify-center min-[1350px]:pr-8">
            <p className="text-body mb-6">
              MiRen is a contemporary tailoring brand that challenges conventional ideas of perfection.
            </p>
            <p className="text-body mb-6">
              Rooted in the philosophy of Wabi-Sabi, MiRen explores the beauty of imperfection, individuality and the passage of time. Through asymmetrical silhouettes, raw details and reinterpreted tailoring, each garment transforms the unexpected into something intentional.
            </p>
            <p className="text-body mb-8">
              MiRen believes clothing should be an expression of identity rather than a reflection of trends. Designed for those who embrace their individuality, the brand creates garments that encourage confidence, authenticity and freedom of expression.
            </p>
            <p className="text-body">
              Imperfection Refined.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
