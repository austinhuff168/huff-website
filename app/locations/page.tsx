import Navbar from "@/components/Navbar";

const offices = [
  {
    city: "Aberdeen",
    state: "South Dakota",
    role: "Headquarters",
    image: "/images/huffoffices/aberdeen.JPG",
    href: "/locations/aberdeen",
  },
  {
    city: "Sioux Falls",
    state: "South Dakota",
    role: "Regional Office",
    image: "/images/huffoffices/siouxfalls.jpg",
    href: "/locations/sioux-falls",
  },
  {
    city: "Norfolk",
    state: "Nebraska",
    role: "Regional Office",
    image: "/images/huffoffices/norfolk.JPG",
    href: "/locations/norfolk",
  },
];const regions = [
  "South Dakota",
  "Nebraska",
  "Minnesota",
  "North Dakota",
  "Iowa",
];

export default function LocationsPage() {
  return (
    <main className="bg-white text-neutral-950">
      <Navbar active="locations" solid />

<section className="px-6 pt-40 b-28 md:px-10">
  <div className="mx-auto grid max-w-[1500px] gap-6 md:grid-cols-3">
    {offices.map((office) => (
      <a
  key={office.city}
  href={office.href}
        className="group overflow-hidden border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#8b0f16] hover:shadow-xl"
      >
        <div className="overflow-hidden">
          <div
            className="h-72 bg-cover bg-center transition duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${office.image})` }}
          />
        </div>

        <div className="p-8">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#8b0f16]">
            {office.role}
          </p>

          <h2 className="mt-5 text-4xl font-light tracking-[-0.05em]">
            {office.city}
          </h2>

          <p className="mt-2 text-neutral-500">{office.state}</p>

          <p className="mt-10 text-sm font-bold uppercase tracking-[0.22em] text-[#8b0f16]">
            View Office →
          </p>
        </div>
      </a>
    ))}
  </div>
</section>  



      <section className="bg-neutral-100 px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
            Regional Reach
          </p>

          <div className="mt-10 grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <h2 className="text-5xl font-light leading-[1.05] tracking-[-0.05em] md:text-7xl">
              Local teams.
              <br />
              Regional execution.
            </h2>

            <div>
              <p className="max-w-3xl text-xl leading-9 text-neutral-600">
                With offices in Aberdeen, Sioux Falls, and Norfolk, Huff
                supports projects throughout South Dakota, Nebraska, Minnesota,
                North Dakota, Iowa, and the surrounding region.
              </p>

              <div className="mt-14 border-t border-neutral-300">
                {regions.map((region) => (
                  <div
                    key={region}
                    className="flex items-center justify-between border-b border-neutral-300 py-6"
                  >
                    <span className="text-2xl font-light tracking-[-0.03em]">
                      {region}
                    </span>

                    <span className="text-[#8b0f16]">→</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-28 text-center text-white md:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b21b24]">
          Start Local
        </p>

        <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-light leading-[1.08] tracking-[-0.05em] md:text-7xl">
          Ready to start a project?
        </h2>

        <div className="mx-auto mt-14 flex max-w-6xl flex-wrap justify-center gap-5">
          {[
            "Contact a Local Office",
            "Explore Design",
            "View Projects",
          ].map((cta) => (
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