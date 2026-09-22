"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { projects } from "@/app/projects/data/projects";

const designServices = [
  {
    number: "01",
    title: "Commercial Design",
    text: "Thoughtful, functional design shaped around your business, site, budget, and long-term goals.",
  },
  {
    number: "02",
    title: "Design-Build Delivery",
    text: "Design and construction working together from the beginning to improve coordination, cost awareness, and project delivery.",
  },
  {
    number: "03",
    title: "Planning + Feasibility",
    text: "Early design studies that help determine what is possible before committing to a full project.",
  },
];

const schematicServices = [
  "Site Evaluation",
  "Concept Floor Plans",
  "Renderings",
  "Budget Guidance",
  "Development Strategy",
  "Expansion Planning",
];

export default function DesignPage() {
  const selectedProjectSlugs = [
    "Huff-Headquarters",
  "Malpert-Insurance",
  "The-Meathouse",
  "Dakota-Pet-Care",
  "aberdeen-dental-clinic",
  "britton-event-center",
  ];

  const designProjects = selectedProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);

  const [projectIndex, setProjectIndex] = useState(0);

  const visibleProjects = [
    designProjects[projectIndex % designProjects.length],
    designProjects[(projectIndex + 1) % designProjects.length],
    designProjects[(projectIndex + 2) % designProjects.length],
  ];

  const nextProjects = () => {
    setProjectIndex((current) => (current + 3) % designProjects.length);
  };

  const previousProjects = () => {
    setProjectIndex(
      (current) =>
        (current - 3 + designProjects.length) % designProjects.length
    );
  };

  return (
    <main className="bg-black text-white">
      <Navbar active="design" />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/design-hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.4em] text-[#b21b24]">
              Huff Design
            </p>

            <h1 className="text-5xl font-light leading-[1] tracking-[-0.05em] text-white md:text-7xl">
              Design for What's Next.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/75">
              We see design and construction not as separate steps, but as parts of the same pursuit: creating places with purpose.
            </p>
          </div>
        </div>
      </section>

      {/* DESIGN INTRO */}
      <section className="bg-black px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b21b24]">
            Huff Design
          </p>

          <div className="mt-5 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <h2 className="max-w-4xl text-4xl font-light leading-[1.05] tracking-[-0.05em] text-white md:text-6xl">
              Great projects begin with thoughtful design.
            </h2>

            <p className="max-w-xl text-base leading-7 text-white/55 md:text-lg">
              We combine design and construction knowledge to create spaces
              grounded in our clients&apos; goals, budget, and how projects are
              actually built.
            </p>
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="overflow-hidden bg-black px-0 pb-32 pt-8 text-white md:pb-36 md:pt-12">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="flex items-end justify-between gap-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b21b24]">
                Selected Work
              </p>

              <h2 className="mt-5 text-5xl font-light tracking-[-0.05em] text-white md:text-7xl">
                Designed with purpose.
              </h2>
            </div>

            <Link
              href="/projects"
              className="hidden border-b border-white/60 pb-1 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:border-[#b21b24] hover:text-[#b21b24] md:block"
            >
              View All Projects
            </Link>
          </div>

          {/* PROJECT CAROUSEL */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <Link
                key={`${project.slug}-${index}`}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                {/* IMAGE */}
                <div className="relative h-[340px] overflow-hidden bg-neutral-900 md:h-[400px]">
                  <Image
                    src={project.images[0]}
                    alt={project.name}
                    fill
                    className="object-cover brightness-[0.55] saturate-[0.7] transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-100 group-hover:saturate-100"
                  />

                  <div className="absolute inset-0 bg-black/15 transition-all duration-500 group-hover:bg-black/0" />

                  {/* PROJECT NUMBER */}
                  <div className="absolute left-5 top-5 text-xs font-bold tracking-[0.25em] text-white/60 transition group-hover:text-white">
                    0{index + 1}
                  </div>

                  {/* VIEW PROJECT */}
                  <div className="absolute bottom-6 left-6 translate-y-3 text-xs font-bold uppercase tracking-[0.22em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View Project
                  </div>

                  {/* HOVER ARROW */}
                  <div className="absolute bottom-0 right-0 flex h-16 w-16 translate-y-full items-center justify-center bg-[#8b0f16] text-2xl text-white transition-all duration-300 group-hover:translate-y-0">
                    ↗
                  </div>
                </div>

                {/* PROJECT INFO */}
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

          {/* CAROUSEL CONTROLS */}
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

            <div className="min-w-[75px] text-center">
              <p className="text-xs font-bold tracking-[0.2em] text-white/40">
                {String(Math.floor(projectIndex / 3) + 1).padStart(2, "0")}
                {" / "}
                {String(Math.ceil(designProjects.length / 3)).padStart(2, "0")}
              </p>
            </div>

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

          {/* MOBILE VIEW ALL */}
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

      {/* DESIGN SERVICES */}
      <section className="border-y border-white/15 bg-black">
        <div className="mx-auto grid max-w-[1500px] md:grid-cols-3">
          {designServices.map((item, index) => (
            <div
              key={item.title}
              className={`group min-h-[390px] p-10 transition duration-300 hover:bg-[#8b0f16] md:p-12 ${
                index !== 2
                  ? "border-b border-white/15 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <p className="text-xs font-bold tracking-[0.3em] text-[#b21b24] transition group-hover:text-white/60">
                {item.number}
              </p>

              <h3 className="mt-16 text-3xl font-semibold tracking-[-0.03em] text-white">
                {item.title}
              </h3>

              <div className="mt-7 h-px w-12 bg-[#b21b24] transition group-hover:bg-white/50" />

              <p className="mt-7 max-w-md leading-8 text-white/55 transition group-hover:text-white/80">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEMATIC STUDIES */}
      <section className="bg-[#111111] px-6 py-32 md:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-20 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b21b24]">
              Schematic Studies
            </p>

            <h2 className="mt-6 max-w-xl text-5xl font-light leading-[1.05] tracking-[-0.05em] text-white md:text-6xl">
              Not Ready to Build Yet?
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">
              Our schematic studies help owners explore ideas, understand
              opportunities, and make informed decisions before committing to
              full design or construction.
            </p>
          </div>

          <div className="border-t border-white/20">
            {schematicServices.map((item, index) => (
              <div
                key={item}
                className="group flex items-center justify-between border-b border-white/20 py-6"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xs font-bold tracking-[0.25em] text-[#b21b24]">
                    0{index + 1}
                  </span>

                  <span className="text-xl font-light text-white md:text-2xl">
                    {item}
                  </span>
                </div>

                <span className="text-xl text-white/20 transition group-hover:text-[#b21b24]">
                  +
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/15 bg-black px-6 py-32 text-white md:px-10">
        <div className="mx-auto max-w-[1400px] text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-">
            Huff Design
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-light tracking-[-0.05em] text-white md:text-7xl">
            Let&apos;s explore your project.
          </h2>

 <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/55">
            Whether you have a defined project or an early idea, we can help
            determine the right next step.
</p>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#b21b24]">
            Creating Spaces with Purpose
</p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/contact"
              className="rounded-full bg-[#8b0f16] px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#8b0f16]"
            >
              Start a Conversation
            </Link>

            <Link
              href="/projects"
              className="rounded-full border border-white/40 px-8 py-4 text-sm font-bold text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}