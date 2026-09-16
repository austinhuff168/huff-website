import Image from "next/image";
import Navbar from "@/components/Navbar";

const services = [
  {
    number: "01",
    title: "Building Sales",
    text: "Find the right steel building system for your project, budget, and long-term needs.",
  },
  {
    number: "02",
    title: "Planning + Design",
    text: "Work through building size, layout, site needs, exterior appearance, and project requirements before construction.",
  },
  {
    number: "03",
    title: "Supply",
    text: "Coordinate the steel building package, components, and materials needed to move the project into the field.",
  },
  {
    number: "04",
    title: "Installation",
    text: "Experienced construction teams coordinate erection and installation as part of the overall project.",
  },
];

const buildingTypes = [
  "Manufacturing",
  "Warehouses",
  "Agricultural",
  "Commercial",
  "Storage",
  "Industrial",
];

export default function SteelPage() {
  return (
    <main className="bg-white text-neutral-950">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[780px] overflow-hidden">
        <Image
          src="/images/steel/steel-01.jpg"
          alt="Huff Steel building"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[780px] max-w-[1500px] items-end px-6 pb-20 md:px-10">
          <div className="grid w-full gap-12 md:grid-cols-[1.3fr_0.7fr] md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#d12730]">
                Huff Steel
              </p>

              <h1 className="mt-6 max-w-5xl text-6xl font-light leading-[0.92] tracking-[-0.055em] text-white md:text-8xl">
                Steel buildings.
                <br />
                Built around you.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75">
                From the first conversation through building selection,
                planning, supply, and installation, Huff helps make your
                steel building project straightforward.
              </p>

              <a
                href="#contact"
                className="mt-10 inline-block rounded-full bg-[#8b0f16] px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-[#a3131c]"
              >
                Start a Steel Project
              </a>
            </div>

            {/* CHRIS */}
            <div className="border-l border-white/30 pl-6 md:justify-self-end">
              <div className="flex items-center gap-5">
                <div className="relative h-20 w-20 overflow-hidden rounded-full bg-neutral-300">
                  <Image
                    src="/images/leadership/chris.jpg"
                    alt="Chris Brockhouse"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-lg font-semibold text-white">
                    Chris Brockhouse
                  </p>

                  <p className="mt-1 text-sm text-white/60">
                    Steel Building Sales | Project Manager
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:text-[#d12730]"
              >
                Contact Chris →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
              Steel Building Solutions
            </p>

            <h2 className="mt-6 text-5xl font-light leading-[1.03] tracking-[-0.045em] md:text-6xl">
              More than a building package.
            </h2>
          </div>

          <div className="md:pt-8">
            <p className="max-w-2xl text-xl leading-9 text-neutral-600">
              A steel building starts with understanding what you need it to
              do. Huff helps owners evaluate their options, develop the
              building concept, coordinate the steel package, and carry the
              project through construction.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS / SERVICES */}
      <section className="bg-[#111111] px-6 py-24 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b21b24]">
              From Idea to Installation
            </p>

            <h2 className="mt-6 text-5xl font-light tracking-[-0.045em] md:text-6xl">
              One team to help you get there.
            </h2>
          </div>

          <div className="mt-16 grid border-t border-white/20 md:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`border-b border-white/20 py-10 md:px-8 ${
                  index !== 3 ? "md:border-r" : ""
                }`}
              >
                <p className="text-xs font-bold text-[#b21b24]">
                  {service.number}
                </p>

                <h3 className="mt-10 text-2xl font-light tracking-[-0.03em]">
                  {service.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/55">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIG IMAGE */}
      <section className="grid md:grid-cols-[1.4fr_0.6fr]">
        <div className="relative min-h-[680px]">
          <Image
            src="/images/steel/steel-02.jpg"
            alt="Steel building construction"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-center bg-[#8b0f16] px-8 py-20 text-white md:px-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/60">
              Start Earlier
            </p>

            <h2 className="mt-6 text-4xl font-light leading-[1.05] tracking-[-0.04em] md:text-5xl">
              Before you buy
              <br />
              the building.
            </h2>

            <p className="mt-7 max-w-md leading-8 text-white/75">
              Talk with our team early. We can help evaluate size, layout,
              site conditions, building systems, and construction needs
              before major decisions are made.
            </p>
          </div>
        </div>
      </section>

      {/* BUILDING TYPES */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
                What We Build
              </p>

              <h2 className="mt-6 text-5xl font-light leading-[1.03] tracking-[-0.045em] md:text-6xl">
                Steel for nearly any operation.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2">
              {buildingTypes.map((type) => (
                <div
                  key={type}
                  className="border-t border-neutral-300 py-7"
                >
                  <p className="text-xl font-medium">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="bg-neutral-100 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
            Steel in the Field
          </p>

          <h2 className="mt-5 text-5xl font-light tracking-[-0.045em] md:text-6xl">
            Designed for the work ahead.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-12">
            <div className="relative min-h-[520px] overflow-hidden md:col-span-7">
              <Image
                src="/images/steel/steel-03.jpg"
                alt="Huff steel building"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="relative min-h-[520px] overflow-hidden md:col-span-5">
              <Image
                src="/images/steel/steel-04.png"
                alt="Huff steel building"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="relative min-h-[380px] overflow-hidden md:col-span-5">
              <Image
                src="/images/steel/steel-05.jpg"
                alt="Huff steel building"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="relative min-h-[380px] overflow-hidden md:col-span-7">
              <Image
                src="/images/steel/steel-06.jpg"
                alt="Huff steel building"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#111111] px-6 py-24 text-white md:px-10 md:py-28"
      >
        <div className="mx-auto grid max-w-[1500px] gap-14 md:grid-cols-[0.65fr_1.35fr] md:items-center">
          <div className="relative min-h-[500px] overflow-hidden bg-neutral-800">
            <Image
              src="/images/leadership/chris.jpg"
              alt="Chris Brockhouse"
              fill
              className="object-cover"
            />
          </div>

          <div className="md:pl-10">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b21b24]">
              Start a Steel Project
            </p>

            <h2 className="mt-6 max-w-3xl text-5xl font-light leading-[1.03] tracking-[-0.045em] md:text-6xl">
              Have a building in mind?
              <br />
              Start with Chris.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
              Whether you already know the building you need or are just
              beginning to explore options, Chris can help you determine the
              next step.
            </p>

            <p className="mt-10 text-2xl font-semibold">
              Chris Brockhouse
            </p>

            <p className="mt-2 text-white/55">
              Steel Building Sales | Project Manager
            </p>

            <div className="mt-10">
              <a
                href="mailto:chris.brockhouse@huffconstructioninc.com"
                className="inline-block rounded-full bg-[#8b0f16] px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-[#a3131c]"
              >
                Email Chris
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}