"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

const projects = [
  {
    name: "Aberdeen Dental Clinic",
    slug: "aberdeen-dental-clinic",
    market: "Healthcare",
    location: "Aberdeen, SD",
    size: "10,000 SF",
    delivery: "Design-Build",
    image: "/images/projects/dakota_dentistry_1.png",
  },
  {
    name: "Dacotah Bank Headquarters",
    slug: "dacotah-bank-headquarters",
    market: "Commercial",
    location: "Aberdeen, SD",
    size: "42,000 SF",
    delivery: "Construction",
    image: "/images/projects/DB_1.jpg",
  },
  {
    name: "Sioux Falls Career Tech Addition",
    slug: "sioux-falls-career-tech-addition",
    market: "Education/Industrial",
    location: "Sioux Falls, SD",
    size: "68,000 SF",
    delivery: "Construction",
    image: "/images/projects/CTE_1.JPeG",
  },
  {
    name: "Dynamic Dental",
    slug: "dynamic-dental",
    market: "Healthcare",
    location: "Watertown, SD",
    size: "18,500 SF",
    delivery: "Construction",
    image: "/images/projects/project-01.JPG",
  },
  {
    name: "NSU Gerber Hall",
    slug: "nsu-gerber-hall",
    market: "Education",
    location: "Aberdeen, SD",
    size: "31,000 SF",
    delivery: "Construction",
    image: "/images/projects/Gerber_Hall_1.jpg",
  },
  {
    name: "Aberdeen Dermatology",
    slug: "Aberdeen-Dermatology",
    market: "Healthcare",
    location: "Aberdeen, SD",
    size: "22,000 SF",
    delivery: "Construction",
    image: "/images/projects/Aberdeen_Dermatology_01.jpg",
  },
  {
    name: "Huff Headquarters",
    slug: "Huff-Headquarters",
    market: "Business",
    location: "Aberdeen, SD",
    size: "22,000 SF",
    delivery: "Design-Build",
    image: "/images/projects/Huff_HQ_1.jpg",
  },
 {
    name: "Malpert Insurance",
    slug: "Malpert-Insurance",
    market: "Business",
    location: "Redfield, SD",
    size: "22,000 SF",
    delivery: "Design-Build",
    image: "/images/projects/Malpert_1.jpg",
  },
 {
    name: "Elk Point Jefferson Addition",
    slug: "Elk-Point-Jefferson",
    market: "Education",
    location: "Elk Point, SD",
    size: "22,000 SF",
    delivery: "Construction Manager",
    image: "/images/projects/ElkPoint_2.jpg",
  },
 {
    name: "Watertown City Hall",
    slug: "Watertown-City-Hall",
    market: "Business",
    location: "Watertown, SD",
    size: "22,000 SF",
    delivery: "General Contractor",
    image: "/images/projects/Watertown_Cityhall_1.jpg",
  },
 {
    name: "Taco Johns",
    slug: "Taco-Johns",
    market: "Business",
    location: "Aberdeen, SD",
    size: "22,000 SF",
    delivery: "Construction",
    image: "/images/projects/TacoJohns_1",
  },
 {
    name: "Norfolk Middle School Addition",
    slug: "Norfolk-Middle-School",
    market: "Education",
    location: "Norfolk,NE",
    size: "22,000 SF",
    delivery: "Construction Manager",
    image: "/images/projects/Norfolk_Middle_1.jpg",
  },
 {
    name: "Malchow's Plaza",
    slug: "Malchow's-Plaza",
    market: "Community",
    location: "Aberdeen, SD",
    size: "22,000 SF",
    delivery: "Construction",
    image: "/images/projects/Malchows_1.JPG",
  },
 {
    name: "Presentation Place",
    slug: "Presentation-Place",
    market: "Multi-Family",
    location: "Aberdeen, SD",
    size: "22,000 SF",
    delivery: "Construction",
    image: "/images/projects/Presentation_Place_1.jpg",
  },
 {
    name: "Britton/Hecla Community Center",
    slug: "Britton/Hecla-Community-Center",
    market: "Community",
    location: "Britton, SD",
    size: "21,000 SF",
    delivery: "Construction",
    image: "/images/projects/Britton_1.jpg",
  },
 {
    name: "The Auto Spa",
    slug: "The-Auto-Spa",
    market: "Business",
    location: "Aberdeen, SD",
    size: "5,000 SF",
    delivery: "Construction",
    image: "/images/projects/LustAuto_1.jpg",
  },
 {
    name: "Heiser's Jewelry",
    slug: "Heiser's Jewlry",
    market: "Multi-Family",
    location: "Aberdeen, SD",
    size: "8,000 SF",
    delivery: "Construction",
    image: "/images/projects/Heisers_1.jpg",
  },
 {
    name: "Presentation Place",
    slug: "Presentation-Place",
    market: "Multi-Family",
    location: "Aberdeen, SD",
    size: "22,000 SF",
    delivery: "Construction",
    image: "/images/projects/Presentation_Place_1.jpg",
  },
];

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
                  backgroundImage: `url(${featured.image})`,
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
            backgroundImage: `url(${project.image})`,
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