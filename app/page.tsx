"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { projects } from "@/app/projects/data/projects";

const exploreItems = [
  {
    title: "Construction",
    kicker: "Build",
    text: "From preconstruction through completion, we bring experience, craftsmanship, and accountability to every project.",
    image: "/images/construction-01.JPG",
  },
  {
    title: "Design",
    kicker: "Create",
    text: "Thoughtful design supported by a collaborative approach to planning, design, and construction.",
    image: "/images/design-01.jpg",
    href: "/design",
  },
  {
    title: "Development Planning",
    kicker: "Plan",
    text: "Early site thinking, expansion studies, feasibility planning, and project strategy before drawings become commitments.",
    image: "/images/project-01.JPG",
    href: "/develop",
  },
  {
    title: "Concrete",
    kicker: "Perform",
    text: "In-house concrete capabilities that provide greater control over quality, coordination, and schedule.",
    image: "/images/concrete/concrete-01.jpg",
    href: "/concrete",
  },
  {
    title: "Steel",
    kicker: "Build",
    text: "Steel building expertise for commercial, industrial, manufacturing, and specialty projects.",
    image: "/images/steel/steel-01.jpg",
    href: "/steel",
  },
];

const markets = [
  "Commercial",
  "Healthcare",
  "Industrial",
  "Office",
  "Hospitality",
  "Community",
];

const constructionServices = [
  {
    number: "01",
    title: "Project Management",
    tagline: "Coordination from planning through completion.",
    description:
      "Our project management team coordinates the people, information, schedule, and details required to keep a project moving. From early planning through closeout, our project managers serve as a consistent point of contact while coordinating owners, design teams, subcontractors, suppliers, and field operations.",
    image: "/images/construction/project-management.jpg",
  },
  {
    number: "02",
    title: "Self-Performed Work",
    tagline: "More control where it matters.",
    description:
      "Our ability to self-perform key scopes of work gives Huff greater control over quality, manpower, coordination, and schedule. Experienced field teams working directly as part of the project allow us to respond quickly to changing conditions and keep critical work moving.",
    image: "/images/construction/self-performed.jpg",
  },
  {
    number: "03",
    title: "Construction Management",
    tagline: "Early involvement. Better-informed decisions.",
    description:
      "Construction management brings Huff into the process early, allowing our team to provide input on cost, schedule, constructability, procurement, and phasing as the project develops. Working alongside the owner and design team, we help establish a clear path from planning through construction.",
    image: "/images/construction/construction-management_1.jpg",
  },
  {
    number: "04",
    title: "General Contractor",
    tagline: "Experienced execution from bid to completion.",
    description:
      "As general contractor, Huff manages the construction process from award through closeout, coordinating subcontractors, suppliers, field operations, safety, schedule, and quality to deliver the work in accordance with the project documents.",
    image: "/images/construction/general-contracting_1.jpg",
  },
];

const customerReviews = [
  {
    quote:
      "I was very impressed and satisfied with Huff Construction and their performance on our school project.They effectively communicated with us throughout the entire project. It was a relief to know that when I went to them with a concern or question, they would take the time to ensure our district’s needs were met. I also appreciated their oversight of the project and their ability to work with all the different sub-contractors to help control the things that they could control. Construction projects are stressful and always have things that come up. I am glad that I had Huff Construction working with me through our project.",
    name: "Rob Lewis",
    company: "Superintendent / Northwestern Area School District",
  },
  {
    quote:
      "Huff Construction has been a trusted partner of Steven Lust Automotive for years. We've done so many projects its hard to keep track! Every time, they do a great job, on schedule and on budget.",
    name: "Steven Lust",
    company: "Owner / Steven Lust Automotive",
  },
  {
    quote:
      "The ADC has worked with Huff Construction on a number of larger commercial projects. Their team of project managers, supervisors, and their support teams are enthusiastic, professional, detailed, helpful, responsive, reliable and committed to excellence!",
    name: "Mike Bockorny",
    company: "Aberdeen Development Corporation",
  },
  {
    quote:
      "I can wholeheartedly endorse Huff Construction for any construction project, big or small. Their exceptional communication skills, promptness, reliability, and commitment to excellenece would make them an invaluable asset to any project",
    name: "Daniel Sievert",
    company: "Lutheran High Northeast, Norfolk",
  },
];

export default function Home() {
  const selectedProjectSlugs = [
    "dacotah-bank-headquarters",
    "sioux-falls-career-tech-addition",
    "Norfolk-Middle-School",
    "Britton-Hecla-Community-Center",
    "Montgomerys",
    "Runnings",
  ];

  const selectedProjects = selectedProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);

  const [projectIndex, setProjectIndex] = useState(0);

  const visibleProjects = [
    selectedProjects[projectIndex % selectedProjects.length],
    selectedProjects[(projectIndex + 1) % selectedProjects.length],
    selectedProjects[(projectIndex + 2) % selectedProjects.length],
  ];

  const nextProjects = () => {
    setProjectIndex(
      (current) => (current + 3) % selectedProjects.length
    );
  };

  const previousProjects = () => {
    setProjectIndex(
      (current) =>
        (current - 3 + selectedProjects.length) %
        selectedProjects.length
    );
  };

const [reviewIndex, setReviewIndex] = useState(0);

const nextReview = () => {
  setReviewIndex(
    (current) => (current + 1) % customerReviews.length
  );
};

const previousReview = () => {
  setReviewIndex(
    (current) =>
      (current - 1 + customerReviews.length) %
      customerReviews.length
  );
};

const currentReview = customerReviews[reviewIndex];
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <Navbar active="construction" />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pt-28 md:px-10">
          <div className="max-w-5xl">
            <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white md:text-8xl lg:text-[8.8rem]">
              Building Beyond Buildings.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
              Bringing construction, design thinking, development planning,
              concrete, and steel together for owners who need clarity before
              they build.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-[#8b0f16] px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-[#8b0f16]"
              >
                View Projects
              </Link>

              <Link
                href="/design"
                className="rounded-full border border-white/60 px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-neutral-950"
              >
                Explore Design
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-16 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#8b0f16]">
              Our Mission
            </p>

            <h2 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
              Deliver the Highest Quality Product on Time &amp; Budget
            </h2>
          </div>

          <div>
            <p className="mb-8 text-sm font-bold uppercase tracking-[0.25em] text-[#8b0f16]">
              Huff Construction strives to
            </p>

            <div className="space-y-5">
              {[
                "Provide full-service construction",
                "Remain locally and independently owned and operated",
                "Bring time-tested expertise to every project",
                "Make quality and safety top priorities",
                "Deliver excellence in design solutions",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="mt-1 text-xl font-bold text-[#8b0f16]">
                    ✓
                  </span>

                  <p className="text-lg leading-7 text-neutral-600">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE SERVICES */}
      <section className="bg-[#111111] text-white">
        <div className="grid min-h-[620px] grid-cols-1 md:grid-cols-12">
          {exploreItems.map((item, index) => {
            const isConstruction = index === 0;

            const className = `group relative flex min-h-[430px] overflow-hidden border-white/20 p-8 transition duration-500 md:min-h-[620px] md:border-l ${
              isConstruction
                ? "bg-white text-neutral-950 md:border-l-0"
                : "hover:bg-white hover:text-neutral-950"
            } ${index < 2 ? "md:col-span-3" : "md:col-span-2"}`;

            const content = (
              <>
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${
                    isConstruction
                      ? "opacity-55"
                      : "opacity-20 group-hover:scale-105 group-hover:opacity-45"
                  }`}
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {!isConstruction && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8b0f16]/70 via-[#8b0f16]/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-50" />
                )}

                <div className="relative z-10 flex h-full w-full flex-col justify-between">
                  <div>
                    <p
                      className={`mb-6 text-xs font-bold uppercase tracking-[0.35em] transition ${
                        isConstruction
                          ? "text-[#8b0f16]"
                          : "text-white/45 group-hover:text-[#8b0f16]"
                      }`}
                    >
                      {item.kicker}
                    </p>

                    <h3 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                      {item.title}
                    </h3>
                  </div>

                  <div>
                    <p
                      className={`mb-10 max-w-sm text-base leading-7 ${
                        isConstruction
                          ? "text-neutral-700"
                          : "translate-y-4 text-white/85 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:text-neutral-800 group-hover:opacity-100"
                      }`}
                    >
                      {item.text}
                    </p>

                    {!isConstruction && (
                      <span className="inline-block text-4xl transition duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    )}
                  </div>
                </div>
              </>
            );

            if (isConstruction) {
              return (
                <div key={item.title} className={className}>
                  {content}
                </div>
              );
            }

            return (
              <Link
                key={item.title}
                href={item.href ?? "/"}
                className={className}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="overflow-hidden bg-black px-6 py-28 text-white md:px-10 md:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex items-end justify-between gap-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b21b24]">
                Selected Work
              </p>

              <h2 className="mt-5 text-5xl font-light tracking-[-0.05em] md:text-7xl">
                Built with purpose.
              </h2>
            </div>

            <Link
              href="/projects"
              className="hidden border-b border-white/60 pb-1 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:border-[#b21b24] hover:text-[#b21b24] md:block"
            >
              View All Projects
            </Link>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <Link
                key={`${project.slug}-${index}`}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="relative h-[340px] overflow-hidden bg-neutral-900 md:h-[400px]">
                  <Image
                    src={project.images[0]}
                    alt={project.name}
                    fill
                    className="object-cover brightness-[0.55] saturate-[0.7] transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-100 group-hover:saturate-100"
                  />

                  <div className="absolute inset-0 bg-black/15 transition duration-500 group-hover:bg-black/0" />

                  <div className="absolute bottom-6 left-6 translate-y-3 text-xs font-bold uppercase tracking-[0.22em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View Project
                  </div>

                  <div className="absolute bottom-0 right-0 flex h-16 w-16 translate-y-full items-center justify-center bg-[#8b0f16] text-2xl text-white transition-all duration-300 group-hover:translate-y-0">
                    ↗
                  </div>
                </div>

                <div className="pt-6">
                  {project.market && (
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b21b24]">
                      {project.market}
                    </p>
                  )}

                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-[#b21b24] md:text-3xl">
                    {project.name}
                  </h3>

                  {project.location && (
                    <p className="mt-3 text-sm text-white/45">
                      {project.location}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 flex items-center justify-center gap-8">
            <button
              type="button"
              onClick={previousProjects}
              aria-label="Previous projects"
              className="group/arrow flex h-16 w-16 items-center justify-center border border-white/30 text-3xl text-white transition-all duration-300 hover:border-[#8b0f16] hover:bg-[#8b0f16]"
            >
              <span className="transition-transform duration-300 group-hover/arrow:-translate-x-1">
                ←
              </span>
            </button>

            <p className="min-w-[75px] text-center text-xs font-bold tracking-[0.2em] text-white/40">
              {String(Math.floor(projectIndex / 3) + 1).padStart(2, "0")}
              {" / "}
              {String(Math.ceil(selectedProjects.length / 3)).padStart(2, "0")}
            </p>

            <button
              type="button"
              onClick={nextProjects}
              aria-label="Next projects"
              className="group/arrow flex h-16 w-16 items-center justify-center border border-white/30 text-3xl text-white transition-all duration-300 hover:border-[#8b0f16] hover:bg-[#8b0f16]"
            >
              <span className="transition-transform duration-300 group-hover/arrow:translate-x-1">
                →
              </span>
            </button>
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link
              href="/projects"
              className="border-b border-white/60 pb-1 text-xs font-bold uppercase tracking-[0.2em] text-white"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CONSTRUCTION SERVICES */}
      <section className="bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">

          <div className="mb-20 max-w-4xl md:mb-28">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
              Construction Services
            </p>

            <h2 className="mt-5 text-5xl font-light leading-[1.05] tracking-[-0.05em] md:text-7xl">
              Built around the needs of the project.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
              Every project requires a different approach. Our construction
              services allow us to adapt our involvement, resources, and
              expertise to the needs of each owner and project.
            </p>
          </div>

          <div>
            {constructionServices.map((service, index) => {
              const imageLeft = index % 2 === 0;

              return (
                <div
                  key={service.title}
                  className="grid items-center gap-12 border-t border-neutral-200 py-16 lg:grid-cols-2 lg:gap-24 lg:py-24"
                >
                  <div
                    className={`group relative aspect-[4/3] overflow-hidden bg-neutral-100 ${
                      imageLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 750px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />

                    <div className="absolute bottom-0 left-0 flex h-16 w-20 items-center justify-center bg-[#8b0f16] text-sm font-bold tracking-[0.2em] text-white">
                      {service.number}
                    </div>
                  </div>

                  <div
                    className={`max-w-xl ${
                      imageLeft ? "lg:order-2" : "lg:order-1 lg:ml-auto"
                    }`}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8b0f16]">
                      {service.number}
                    </p>

                    <h3 className="mt-5 text-4xl font-light tracking-[-0.045em] md:text-5xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 text-xl font-medium leading-8 text-neutral-800">
                      {service.tagline}
                    </p>

                    <p className="mt-6 text-base leading-8 text-neutral-600 md:text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MARKETS */}
      <section className="bg-neutral-950 px-6 py-24 text-white md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b21b24]">
              Markets
            </p>

            <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] text-white md:text-5xl">
              Experience across industries.
            </h2>
          </div>

          <div className="mt-12 grid border-t border-white/15 md:grid-cols-3">
            {markets.map((market) => (
              <div
                key={market}
                className="flex min-h-36 items-center border-b border-white/15 px-2 py-8 md:px-8"
              >
                <span className="text-3xl font-light tracking-[-0.04em] text-white md:text-4xl">
                  {market}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* CUSTOMER REVIEWS */}
<section className="bg-[#111111] px-6 py-24 text-white md:px-10 md:py-32">
  <div className="mx-auto max-w-[1500px]">

    <div className="grid gap-16 lg:grid-cols-[0.35fr_1fr] lg:gap-24">

      {/* LABEL */}
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b21b24]">
          What Our Clients Say
        </p>

        <p className="mt-6 max-w-xs text-base leading-7 text-white/45">
          Relationships built through projects and partnerships across the
          communities we serve.
        </p>
      </div>

      {/* REVIEW */}
      <div>
        <span className="block text-7xl font-light leading-none text-[#8b0f16]">
          “
        </span>

        <blockquote className="-mt-3 max-w-4xl text-xl font-light leading-[1.6] tracking-[-0.02em] text-white md:text-2xl lg:text-3xl">
  {currentReview.quote}
</blockquote>

        <div className="mt-5 border-t border-white/15 pt-4">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">
            {currentReview.name}
          </p>

          <p className="mt-2 text-sm text-white/45">
            {currentReview.company}
          </p>
        </div>

        {/* CONTROLS */}
        <div className="mt-12 flex items-center gap-6">
          <button
            type="button"
            onClick={previousReview}
            aria-label="Previous review"
            className="flex h-14 w-14 items-center justify-center border border-white/25 text-2xl transition hover:border-[#8b0f16] hover:bg-[#8b0f16]"
          >
            ←
          </button>

          <p className="min-w-[70px] text-center text-xs font-bold tracking-[0.2em] text-white/40">
            {String(reviewIndex + 1).padStart(2, "0")}
            {" / "}
            {String(customerReviews.length).padStart(2, "0")}
          </p>

          <button
            type="button"
            onClick={nextReview}
            aria-label="Next review"
            className="flex h-14 w-14 items-center justify-center border border-white/25 text-2xl transition hover:border-[#8b0f16] hover:bg-[#8b0f16]"
          >
            →
          </button>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-[#111111] px-6 py-10 text-center text-white md:px-10">
        <h2 className="mx-auto max-w-5xl text-5xl font-light leading-[1.08] tracking-[-0.05em] md:text-7xl">
          Let&apos;s build what&apos;s next.
        </h2>

        <div className="mx-auto mt-14 flex max-w-6xl flex-wrap justify-center gap-5">
          <Link
            href="/contact"
            className="rounded-full border border-white/70 px-8 py-4 text-sm font-bold text-white transition hover:border-[#8b0f16] hover:bg-[#8b0f16]"
          >
            Start a Project
          </Link>

          <Link
            href="/design"
            className="rounded-full border border-white/70 px-8 py-4 text-sm font-bold text-white transition hover:border-[#8b0f16] hover:bg-[#8b0f16]"
          >
            Explore Design
          </Link>

          <Link
            href="/develop"
            className="rounded-full border border-white/70 px-8 py-4 text-sm font-bold text-white transition hover:border-[#8b0f16] hover:bg-[#8b0f16]"
          >
            Development Planning
          </Link>

          <Link
            href="/projects"
            className="rounded-full border border-white/70 px-8 py-4 text-sm font-bold text-white transition hover:border-[#8b0f16] hover:bg-[#8b0f16]"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/70 px-8 py-4 text-sm font-bold text-white transition hover:border-[#8b0f16] hover:bg-[#8b0f16]"
          >
            Contact Huff
          </Link>
        </div>
      </section>
    </main>
  );
}