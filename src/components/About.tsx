import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="px-8 py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-12 items-center">
          <div className="col-span-1 md:col-span-4 md:order-1 order-2">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/images/placeholder_image_compressed.webp"
                alt="About MI-REN"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-6 md:order-2 order-1 flex flex-col justify-center">
            <h2 className="text-heading mb-8">About <span className="whitespace-nowrap">MI-Ren</span></h2>
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
