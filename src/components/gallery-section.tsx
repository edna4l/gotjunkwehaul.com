import Image from "next/image";

const GALLERY_ITEMS = [
  { image: "/images/gallery-yard.jpg", alt: "Yard cleanup before and after", caption: "Yard Cleanup" },
  {
    image: "/images/gallery-tree.jpg",
    alt: "Tree debris removal before and after",
    caption: "Tree Debris Removal",
  },
  {
    image: "/images/gallery-property.jpg",
    alt: "Property cleanout before and after",
    caption: "Property Cleanout",
  },
  {
    image: "/images/gallery-hauling.jpg",
    alt: "Hauling service before and after",
    caption: "Hauling Service",
  },
];

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="bg-[radial-gradient(circle_at_50%_100%,#292929_0%,#0d0d0d_58%)] py-9 pb-12 text-white"
    >
      <div className="mx-auto w-[calc(100%-40px)]">
        <div className="mb-[25px] grid grid-cols-[minmax(35px,1fr)_auto_minmax(35px,1fr)] items-center gap-4">
          <span className="h-0.5 bg-(--color-accent)" />
          <h2 className="text-center font-display text-[clamp(1.5rem,2.6vw,2.1rem)] font-extrabold uppercase leading-none text-white">
            Gallery <em className="not-italic text-(--color-accent)">Before &amp; After</em>
          </h2>
          <span className="h-0.5 bg-(--color-accent)" />
        </div>

        <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_ITEMS.map(({ image, alt, caption }) => (
            <figure
              key={caption}
              className="group relative m-0 overflow-hidden rounded-lg border border-white/28 bg-[#111111]"
            >
              <div className="relative aspect-[1.9/1]">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.035]"
                />
              </div>
              <figcaption className="absolute bottom-3 left-[13px] rounded-[3px] bg-(--color-accent) px-2.5 py-[7px] text-[0.78rem] font-black text-[#111111]">
                {caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
