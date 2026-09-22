"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

const values = [
  {
    number: "01",
    title: "Integrity",
    text: "It's the cornerstone of our existence. Integrity means doing what's right even when no one is watching. It's about being honest, transparent, and ethical in all our dealings. In a world where trust is often scarce, integrity sets us apart, fostering trust among our clients, partners, and each other.",
  },
  {
    number: "02",
    title: "Team Oriented",
    text: "Together, we are stronger. This value underscores the importance of collaboration and unity. We are not a collection of individuals; we are a cohesive team. We believe that success is not an individual accomplishment, but a collective triumph.",
  },
  {
    number: "03",
    title: "Dedication to Excellence",
    text: "We take pride in doing exceptional work. That means showing up prepared, working hard, and owning what's ours. We stay proactive, meet our commitments, and solve problems. Whether we're serving clients, backing up teammates, or finishing a project, we hold ourselves to a high standard.",
  },
  {
    number: "04",
    title: "Value of Relationships",
    text: "Relationships are the currency of our industry. We don't just complete projects; we build lasting relationships with clients, partners, and communities. These relationships are the bedrock of our reputation and the source of countless opportunities.",
  },
];

const founderSlides = [
  {
    image: "/images/roger-huff.jpg",
    name: "Roger Huff",
    title: "Founder",
    caption:
      "Roger Huff, owner of Huff Construction, works Tuesday on the framework of the new North Highland United Methodist Church on the corner of 15th Avenue Northeast and North Lloyd Street. Despite the cold weather, area construction projects continue to move along. Huff said the church could be ready for use by Easter, providing the weather holds up. American News Photo by John Davis",
  },
  {
 
    image: "/images/cory-huff.jpg",
    name: "A Growing Company",
    title: "The Next Generation",
    caption:
      "Cory Huff, left, and Chad Huff work on the framework of the second floor of the Holiday Inn Express Tuesday, which is under construction across from the Lakewood Mall. Huff Construction, of Aberdeen, is one of several companies working on the motel. American News Photo by John Davis",
  },
];

export default function About() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % founderSlides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) =>
        (current - 1 + founderSlides.length) % founderSlides.length
    );
  };

  const slide = founderSlides[activeSlide];

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <Navbar active="about" />

      {/* HERO */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/construction-02.JPG')",
          }}
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-20 pt-40 md:px-10 md:pb-28">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.4em] text-[#b21b24]">
            About Huff
          </p>

          <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white md:text-8xl">
            Built on Experience.
            <br />
            Driven by People.
          </h1>
        </div>
      </section>

      {/* 45+ YEARS */}
      <section className="bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
              Since 1979
            </p>

            <p className="mt-5 text-7xl font-black tracking-[-0.06em] md:text-9xl">
              45+
            </p>

            <p className="mt-1 text-xl font-semibold uppercase tracking-[0.08em]">
              Years of Construction
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-5xl font-light leading-[1.08] tracking-[-0.045em] md:text-7xl">
              A LEADER IN THE CONSTRUCTION INDUSTRY.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
              Through more than 45 years of experience as a General Contractor,
              Huff Construction has earned a strong reputation for leadership
              in the industry and has become a well-respected construction
              company in South Dakota and surrounding areas. Integrity, quality,
              and excellence are at the core of every action we take, and our
              clients willingly speak in a positive manner on behalf of our
              company.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER / HISTORY */}
      <section className="bg-neutral-100 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:gap-20">

          {/* HISTORY IMAGE CAROUSEL */}
          <div>
            <div className="relative">
              <div className="overflow-hidden bg-neutral-200">
                <img
                  key={slide.image}
                  src={slide.image}
                  alt={slide.name}
                  className="h-[520px] w-full object-cover object-top md:h-[650px]"
                />
              </div>

              {/* PREVIOUS ARROW */}
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous history image"
                className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-neutral-950 shadow-md transition hover:bg-white"
              >
                ←
              </button>

              {/* NEXT ARROW */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next history image"
                className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-neutral-950 shadow-md transition hover:bg-white"
              >
                →
              </button>

              {/* TITLE BOX */}
              <div className="absolute bottom-0 right-0 min-w-[190px] translate-y-1/2 bg-[#8b0f16] px-7 py-5 text-white">
                <p className="text-lg font-semibold uppercase tracking-[0.04em]">
                  {slide.name}
                </p>

                <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-white/70">
                  {slide.title}
                </p>
              </div>
            </div>

            {/* IMAGE CAPTION */}
            <div className="mt-16">
              <div className="max-w-[72%] border-l-2 border-[#8b0f16] pl-4">
                <p className="text-sm leading-6 text-neutral-500">
                  {slide.caption}
                </p>
              </div>

              {/* SLIDE INDICATORS */}
              <div className="mt-6 flex items-center gap-3">
                {founderSlides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`View history image ${index + 1}`}
                    className={`h-[3px] transition-all ${
                      activeSlide === index
                        ? "w-10 bg-[#8b0f16]"
                        : "w-6 bg-neutral-300 hover:bg-neutral-400"
                    }`}
                  />
                ))}

                <span className="ml-2 text-xs font-medium tracking-[0.15em] text-neutral-400">
                  {String(activeSlide + 1).padStart(2, "0")} /{" "}
                  {String(founderSlides.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* HISTORY */}
          <div className="md:py-10">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
              Where It Started
            </p>

            <h2 className="mt-6 max-w-2xl text-5xl font-light leading-[1.05] tracking-[-0.045em] md:text-7xl">
              BUILT FROM THE GROUND UP.
            </h2>

            <div className="mt-8 h-px w-16 bg-[#8b0f16]" />

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              Roger Huff began working in the construction industry in 1967
              alongside his father, George Huff, in Wilmot, South Dakota. After
              getting married, Roger and his family moved to Aberdeen, where
              they continue to reside today. In 1979, Roger founded Huff
              Construction, which later became Huff Construction, Inc. as the
              company continued to grow. Over the years, the business expanded
              to include his two sons, Chad and Cory, along with the team that
              has helped shape the company into what it is today.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Today, Huff Construction continues to build on that foundation,
              serving clients and communities throughout the region while
              carrying forward a culture centered on relationships, integrity,
              and quality workmanship.
            </p>

            <div className="mt-12 flex items-center gap-5">
              <span className="text-5xl font-light tracking-[-0.05em] text-[#8b0f16]">
                1979
              </span>

              <div className="h-px w-20 bg-neutral-300" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                Huff Construction Founded
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES INTRO */}
      <section className="bg-neutral-950 px-6 pb-12 pt-24 text-white md:px-10 md:pt-32">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b21b24]">
            What We Stand For
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-end">
            <h2 className="text-5xl font-light tracking-[-0.045em] md:text-7xl">
              Our values define
              <br />
              how we build.
            </h2>

            <p className="max-w-xl text-lg leading-8 text-white/60">
              The principles behind our work shape how we approach our clients,
              our projects, and each other.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-neutral-950 px-6 pb-28 text-white md:px-10 md:pb-36">
        <div className="mx-auto grid max-w-[1500px] border-t border-white/15 md:grid-cols-2">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group border-b border-white/15 py-12 md:min-h-[390px] md:p-12 ${
                index % 2 === 0 ? "md:border-r" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b21b24]">
                  {value.number}
                </p>

                <span className="text-4xl font-light text-white/15 transition group-hover:text-[#b21b24]">
                  +
                </span>
              </div>

              <h3 className="mt-16 text-3xl font-semibold uppercase tracking-[-0.03em] md:text-4xl">
                {value.title}
              </h3>

              <div className="mt-7 h-px w-12 bg-[#b21b24]" />

              <p className="mt-7 max-w-xl text-base leading-8 text-white/60">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPANY / REGIONAL MESSAGE */}
      <section className="grid bg-neutral-100 md:grid-cols-2">
        <div
          className="min-h-[520px] bg-cover bg-center md:min-h-[650px]"
          style={{
            backgroundImage: "url('/images/construction-01.JPG')",
          }}
        />

        <div className="flex items-center px-6 py-20 md:px-16 lg:px-24">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
              Locally Built
            </p>

            <h2 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
              Independent roots. Regional reach.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Huff Construction is locally and independently owned and
              operated. Our teams bring local knowledge, longstanding
              relationships, and hands-on leadership to the communities and
              clients we serve.
            </p>

            <a
              href="/locations"
              className="mt-10 inline-block rounded-full border border-[#8b0f16] px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-[#8b0f16] transition hover:bg-[#8b0f16] hover:text-white"
            >
              Our Locations
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] px-6 py-28 text-center text-white md:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b21b24]">
          Build With Huff
        </p>

        <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-light leading-[1.08] tracking-[-0.05em] md:text-7xl">
          Experience matters.
          <br />
          Relationships matter more.
        </h2>

        <a
          href="/contact"
          className="mt-12 inline-block rounded-full bg-[#8b0f16] px-9 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-[#8b0f16]"
        >
          Start a Project
        </a>
      </section>
    </main>
  );
}