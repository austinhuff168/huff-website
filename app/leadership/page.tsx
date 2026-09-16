"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { leaders } from "./employees/data";

const offices = ["Aberdeen", "Sioux Falls", "Norfolk"];

export default function LeadershipPage() {
  const [selectedOffice, setSelectedOffice] = useState("Aberdeen");

  const filteredLeaders = leaders.filter(
    (person) => person.office === selectedOffice
  );

  return (
    <main className="bg-white text-neutral-950">
      <Navbar active="leadership" solid />

      {/* HERO */}
      <section className="px-6 pb-16 pt-40 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#8b0f16]">
            Leadership
          </p>

          <div className="mt-8 grid gap-12 border-b border-neutral-200 pb-16 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <h1 className="text-6xl font-light leading-[0.95] tracking-[-0.06em] md:text-8xl">
              The people leading Huff.
            </h1>

            <p className="max-w-2xl text-xl leading-9 text-neutral-600">
              Across our regional offices, Huff is led by people who understand
              construction, relationships, field execution, and long-term client
              trust.
            </p>
          </div>
        </div>
      </section>

      {/* OFFICE FILTERS */}
      <section className="px-6 pb-12 md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-wrap gap-4">
          {offices.map((office) => (
            <button
              key={office}
              onClick={() => setSelectedOffice(office)}
              className={`rounded-full border px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] transition ${
                selectedOffice === office
                  ? "border-[#8b0f16] bg-[#8b0f16] text-white"
                  : "border-neutral-300 bg-white text-neutral-700 hover:border-[#8b0f16] hover:text-[#8b0f16]"
              }`}
            >
              {office}
            </button>
          ))}
        </div>
      </section>

      {/* LEADERSHIP GRID */}
      <section className="px-6 pb-28 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="text-2xl font-bold uppercase tracking-[-0.02em]">
            The {selectedOffice} Team
          </h2>

          <div className="mt-5 h-[2px] w-20 bg-[#8b0f16]" />

          <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
            {filteredLeaders.map((person) => (
              <article
                key={`${person.name}-${person.office}`}
                className="group"
              >
                <div className="overflow-hidden bg-neutral-200">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={800}
                    height={1000}
                    className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">
                    {person.office}
                  </p>

                  <h3 className="mt-3 text-xl font-bold uppercase tracking-[-0.02em] text-[#8b0f16]">
                    {person.name}
                  </h3>

                  <p className="mt-3 text-base font-semibold text-neutral-700">
                    {person.title}
                  </p>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {person.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#111111] px-6 py-28 text-center text-white md:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b21b24]">
          Leadership
        </p>

        <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-light leading-[1.08] tracking-[-0.05em] md:text-7xl">
          Built on relationships, leadership, and trust.
        </h2>

        <div className="mx-auto mt-14 flex max-w-6xl flex-wrap justify-center gap-5">
          {["Start a Project", "View Projects", "Openings"].map((cta) => (
            <a
              key={cta}
              href="#"
              className="rounded-full border border-white/70 px-8 py-4 text-sm font-bold text-white transition hover:border-[#8b0f16] hover:bg-[#8b0f16]"
            >
              {cta}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}