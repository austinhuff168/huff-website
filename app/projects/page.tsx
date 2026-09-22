"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { projects } from "./data/projects";

const stats = [
  ["125+", "Projects Completed"],
  ["3", "Regional Offices"],
  ["50+", "Years of Experience"],
  ["5", "Integrated Services"],
];

const filters = [
  "All",
  "Healthcare",
  "Education",
  "Industrial",
  "Business",
  "Community",
];

export default function ProjectsPage() {
  const featured = projects[0];

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.slice(1).filter((project) => {
    if (activeFilter === "All") {
      return true;
    }

    return project.market
      .toLowerCase()
      .split("/")
      .map((market) => market.trim())
      .includes(activeFilter.toLowerCase());
  });

  return (
    <main className="bg-white text-neutral-950">
      <Navbar active="projects" solid />

      {/* STATS */}
      <section className="px-6 pt-48 md:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-8 border-b border-neutral-200 pb-10 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label}>
              <p className="text-5xl font-light tracking-[-0.05em] text-[#8b0f16]">
                {value}
              </p>

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
            Featured Project
          </p>

          <a
  href={`/projects/${featured.slug}`}
  className="group block"
>
            <div className="relative min-h-[650px] overflow-hidden bg-neutral-200">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                style={{
  backgroundImage: `url(${featured.images[0]})`,
}}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/25" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b21b24]">
                  {featured.market}
                </p>

                <h1 className="mt-3 text-4xl font-light tracking-[-0.04em] md:text-6xl">
                  {featured.name}
                </h1>

                <div className="mt-6 flex flex-wrap gap-6 text-xs font-bold uppercase tracking-[0.22em] text-white/75">
                  <span>{featured.location}</span>
                  <span>{featured.size}</span>
                  <span>{featured.delivery}</span>
                  <span>View Project →</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-6 pb-10 md:px-10">
  <div className="mx-auto flex max-w-[1500px] flex-wrap gap-4 border-y border-neutral-200 py-8">
    {filters.map((filter) => {
      const isActive = activeFilter === filter;

      return (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`rounded-full border px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] transition ${
            isActive
              ? "border-[#8b0f16] bg-[#8b0f16] text-white"
              : "border-neutral-300 text-neutral-700 hover:border-[#8b0f16] hover:bg-[#8b0f16] hover:text-white"
          }`}
        >
          {filter}
        </button>
      );
    })}
  </div>
</section>

      {/* PROJECT GRID */}
      <section className="px-6 pb-28 md:px-10">
  <div className="mx-auto grid max-w-[1500px] gap-8 md:grid-cols-2 lg:grid-cols-3">
    {filteredProjects.map((project, index) => (
      <a
  key={project.slug}
  href={`/projects/${project.slug}`}
  className="group relative block h-[500px] overflow-hidden bg-neutral-200"
>
        <div
          className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
         style={{
  backgroundImage: `url(${project.images[0]})`,
}}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

        <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/40" />

        <div className="absolute inset-x-0 bottom-0 z-10 p-7 md:p-8">
          <h3 className="max-w-md text-3xl font-light leading-tight tracking-[-0.04em] text-white">
            {project.name}
          </h3>

          <div className="max-h-0 translate-y-4 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-56 group-hover:translate-y-0 group-hover:pt-6 group-hover:opacity-100">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d12730]">
              {project.market}
            </p>

            <p className="mt-3 text-sm leading-6 text-white/80">
              {project.location} · {project.size} · {project.delivery}
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white">
              <span>View Project</span>
              <span className="transition duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>
          </div>
        </div>
      </a>
    ))}
  </div>
</section>
    </main>
  );
}