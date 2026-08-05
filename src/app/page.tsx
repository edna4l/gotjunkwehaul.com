import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { ProcessAreasSection } from "@/components/process-areas-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { FloatingCallButton } from "@/components/floating-call-button";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ServicesSection />
        <ProcessAreasSection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingCallButton />
    </>
  );
}
