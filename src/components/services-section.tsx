import Image from "next/image";
import { Armchair, Building2, Hammer, Home, Leaf, Truck } from "lucide-react";

const SERVICES = [
  {
    title: "Junk Removal",
    description: "We haul away unwanted household and property items quickly.",
    image: "/images/junk-removal.jpg",
    alt: "Junk removal cleanup",
    Icon: Truck,
  },
  {
    title: "Property Cleanouts",
    description: "Garages, rentals, estates, storage areas and complete cleanouts.",
    image: "/images/property-cleanouts.jpg",
    alt: "Garage and property cleanout",
    Icon: Home,
  },
  {
    title: "Yard & Tree Debris",
    description: "Branches, leaves, palm debris, green waste and storm cleanup.",
    image: "/images/yard-debris.jpg",
    alt: "Branches and yard debris",
    Icon: Leaf,
  },
  {
    title: "Furniture & Appliances",
    description: "Couches, mattresses, refrigerators and other bulky items.",
    image: "/images/furniture-appliances.jpg",
    alt: "Furniture and appliance removal",
    Icon: Armchair,
  },
  {
    title: "Light Demolition",
    description: "Sheds, fencing, drywall and other small demolition projects.",
    image: "/images/light-demolition.jpg",
    alt: "Light demolition project",
    Icon: Hammer,
  },
  {
    title: "Commercial Cleanup",
    description: "Reliable cleanup and hauling for businesses and job sites.",
    image: "/images/commercial-cleanup.jpg",
    alt: "Commercial hauling trailer",
    Icon: Building2,
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[radial-gradient(circle_at_50%_0%,#292929_0%,#101010_55%)] py-9 pb-12 text-white"
    >
      <div className="mx-auto w-[calc(100%-40px)]">
        <div className="mb-[25px] grid grid-cols-[minmax(35px,1fr)_auto_minmax(35px,1fr)] items-center gap-4">
          <span className="h-0.5 bg-(--color-accent)" />
          <h2 className="text-center font-display text-[clamp(1.5rem,2.6vw,2.1rem)] font-extrabold uppercase leading-none text-white">
            Our Services
          </h2>
          <span className="h-0.5 bg-(--color-accent)" />
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {SERVICES.map(({ title, description, image, alt, Icon }) => (
            <article
              key={title}
              className="overflow-hidden rounded-[9px] border-2 border-black bg-gradient-to-b from-[#202020] to-[#0e0e0e] shadow-[var(--shadow-card)] transition-transform duration-200 hover:-translate-y-1.5 hover:border-(--color-accent)"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="min-h-[167px] px-[13px] pb-[17px] pt-[15px] text-center">
                <Icon className="mx-auto mb-2 h-7 w-7 text-(--color-accent)" aria-hidden="true" />
                <h3 className="mb-[7px] text-base font-semibold">{title}</h3>
                <p className="text-[0.82rem] leading-[1.45] text-[#dbdbdb]">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
