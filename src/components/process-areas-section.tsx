import { ArrowRight, Camera, DollarSign, MapPin, Truck } from "lucide-react";

const STEPS = [
  {
    number: 1,
    title: "Send Us What You Need Removed",
    description: "Call, text or message us photos of the job.",
    Icon: Camera,
  },
  {
    number: 2,
    title: "Get Your Estimate",
    description: "Receive a clear, fast quote for the work.",
    Icon: DollarSign,
  },
  {
    number: 3,
    title: "We Haul It Away",
    description: "We load, clean up and remove the debris.",
    Icon: Truck,
  },
];

const AREAS = [
  "Corcoran",
  "Delano",
  "Hanford",
  "Kings County",
  "Lemoore",
  "Tulare County",
  "Selma",
  "Fresno County",
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-[25px] grid grid-cols-[minmax(35px,1fr)_auto_minmax(35px,1fr)] items-center gap-4">
      <span className="h-0.5 bg-(--color-accent)" />
      <h2 className="text-center font-display text-[clamp(2rem,4vw,3rem)] italic leading-none text-[#232323]">
        {children}
      </h2>
      <span className="h-0.5 bg-(--color-accent)" />
    </div>
  );
}

export function ProcessAreasSection() {
  return (
    <section id="about" className="bg-(--color-paper) text-[#171717]">
      <div className="mx-auto grid w-[min(calc(100%-40px),var(--container-max))] grid-cols-1 md:grid-cols-2">
        <div className="border-b border-[#d3d3d3] py-9 pb-9 md:border-b-0 md:border-r md:py-[34px] md:pb-10">
          <SectionTitle>How It Works</SectionTitle>

          <div className="grid grid-cols-1 items-center gap-[22px] md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-3">
            {STEPS.map((step, index) => (
              <div key={step.number} className="contents">
                <article className="relative text-center">
                  <div className="absolute left-1/2 top-[-10px] z-10 grid h-[35px] w-[35px] -translate-x-1/2 place-items-center rounded-full bg-(--color-accent) font-black text-[#111111]">
                    {step.number}
                  </div>
                  <div className="mx-auto mb-3.5 grid h-[88px] w-[88px] place-items-center rounded-full bg-[#151515] text-white shadow-[var(--shadow-card)]">
                    <step.Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="mb-1.5 min-h-11 text-[0.87rem] font-semibold leading-[1.25]">
                    {step.title}
                  </h3>
                  <p className="text-[0.82rem] leading-[1.4] text-[#404040]">{step.description}</p>
                </article>
                {index < STEPS.length - 1 && (
                  <ArrowRight
                    className="mx-auto h-8 w-8 rotate-90 text-[#222222] md:rotate-0"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div id="areas" className="py-9 md:py-[34px] md:pb-10">
          <SectionTitle>Proudly Serving Corcoran &amp; Surrounding Areas</SectionTitle>

          <div className="grid grid-cols-1 items-center gap-[27px] md:grid-cols-[0.75fr_1.2fr]">
            <div
              aria-label="Central California service area illustration"
              className="relative grid min-h-[190px] place-items-center overflow-hidden rounded-[18%_42%_33%_21%/23%_30%_55%_43%] bg-[#ecece8] text-[#b9b9b9] md:min-h-[230px]"
            >
              <span className="font-display text-[5.5rem] tracking-[0.08em] text-[#c6c6bf]">
                CA
              </span>
              <MapPin
                className="absolute left-[44%] top-[52%] h-[34px] w-[34px] -rotate-45 rounded-bl-none text-[#111111]"
                fill="var(--color-accent)"
                aria-hidden="true"
              />
              <p className="absolute bottom-3.5 font-bold text-[#444444]">Central Valley</p>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {AREAS.map((area) => (
                <span
                  key={area}
                  className="rounded-[7px] bg-[#222222] px-3.5 py-3 text-[0.9rem] font-bold text-white first-letter:text-(--color-accent)"
                >
                  ✔ {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
