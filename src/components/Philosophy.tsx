import Image from 'next/image';

export default function Philosophy() {
  return (
    <section id="philosophy" className="px-8 py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-12 items-center">
          <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
            <h2 className="text-heading mb-8">Our Philosophy</h2>
            <p className="text-body mb-6">
              At MI-REN, we believe that fashion is an extension of the self—a silent language spoken through fabric, cut, and silhouette. Our philosophy is rooted in the pursuit of perfection, creating garments that transcend fleeting trends.
            </p>
            <p className="text-body">
              Every stitch, every seam, and every fold is a testament to our dedication to craftsmanship. We source only the finest materials, ensuring that each piece not only looks exquisite but feels extraordinary against the skin.
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/images/placeholder_image_compressed.webp"
                alt="Our Philosophy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
