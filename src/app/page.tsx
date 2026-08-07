import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { CtaBanner } from "@/components/cta-banner";
import { ProcessAreasSection } from "@/components/process-areas-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { FloatingCallButton } from "@/components/floating-call-button";
import { GOOGLE_MAPS_PLACE_URL } from "@/lib/constants";

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Got Junk",
  image: "https://www.gotjunkwehaul.com/images/hero.jpg",
  url: "https://www.gotjunkwehaul.com",
  telephone: "+15593814910",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1612 Jepsen",
    addressLocality: "Corcoran",
    addressRegion: "CA",
    postalCode: "93212",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.096934,
    longitude: -119.5667011,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: [
    "Corcoran, CA",
    "Delano, CA",
    "Hanford, CA",
    "Kings County, CA",
    "Lemoore, CA",
    "Tulare County, CA",
    "Selma, CA",
    "Fresno County, CA",
  ],
  sameAs: [GOOGLE_MAPS_PLACE_URL],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <ServicesSection />
        <CtaBanner />
        <ProcessAreasSection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingCallButton />
    </>
  );
}
