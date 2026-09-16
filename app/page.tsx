import Navbar from "@/components/Navbar";

const exploreItems = [
  {
    title: "Construction",
    kicker: "Build",
    text: "Commercial construction, construction management, and project execution led by experienced regional teams.",
    image: "/images/construction-01.JPG",
  },
  {
    title: "Design",
    kicker: "Create",
    text: "Builder-informed design support that aligns vision, budget, schedule, and constructability from the beginning.",
    image: "/images/design-01.jpg",
  },
  {
    title: "Development Planning",
    kicker: "Plan",
    text: "Early site thinking, expansion studies, feasibility planning, and project strategy before drawings become commitments.",
    image: "/images/project-01.JPG",
  },
  {
    title: "Concrete + Steel",
    kicker: "Execute",
    text: "In-house concrete and steel capabilities that bring greater control to the schedule, budget, and construction process.",
    image: "/images/concrete-01.jpg",
  },
];

const projectImages = [
  "/images/project-01.JPG",
  "/images/construction-01.JPG",
  "/images/construction-02.JPG",
];

const markets = [
  "Commercial",
  "Healthcare",
  "Industrial",
  "Office",
  "Hospitality",
  "Community",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <Navbar active="construction" />

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
            <p className="mb-7 text-xs font-bold uppercase tracking-[0.45em] text-[#b21b24] md:text-sm">
              Construction + Design
            </p>

            <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white md:text-8xl lg:text-[8.8rem]">
              Building What Matters.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
              Huff brings construction, design thinking, development planning,
              concrete, and steel together for owners who need clarity before
              they build.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                className="rounded-full bg-[#8b0f16] px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-[#8b0f16]"
                href="#"
              >
                View Projects
              </a>
              <a
                className="rounded-full border border-white/60 px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-neutral-950"
                href="#"
              >
                Explore Design
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-6 hidden items-center gap-5 text-xs font-bold uppercase tracking-[0.26em] text-white/70 md:left-10 md:flex">
            <span>Scroll</span>
            <span className="h-px w-20 bg-white/40" />
          </div>
        </div>
      </section>

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

      <section className="bg-[#111111] text-white">
        <div className="grid min-h-[620px] grid-cols-1 md:grid-cols-4">
          {exploreItems.map((item, index) => (
            <a
              key={item.title}
              href="#"
              className={`group relative flex min-h-[430px] overflow-hidden border-white/20 p-8 transition duration-500 hover:bg-white hover:text-neutral-950 md:min-h-[620px] md:border-l ${
                index === 0 ? "bg-white text-neutral-950 md:border-l-0" : ""
              }`}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-25 ${
                  index === 0 ? "opacity-10" : ""
                }`}
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div
                className={`absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-80 ${
                  index === 0
                    ? "bg-white"
                    : "bg-gradient-to-t from-[#8b0f16]/90 to-black/20"
                }`}
              />

              <div className="relative z-10 flex h-full w-full flex-col justify-between">
                <div>
                  <p
                    className={`mb-6 text-xs font-bold uppercase tracking-[0.35em] transition ${
                      index === 0 ? "text-[#8b0f16]" : "text-white/45 group-hover:text-[#8b0f16]"
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
                    className={`mb-10 max-w-sm translate-y-4 text-base leading-7 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 ${
                      index === 0 ? "translate-y-0 opacity-100 text-neutral-700" : "text-white/85 group-hover:text-neutral-800"
                    }`}
                  >
                    {item.text}
                  </p>
                  <span className="text-4xl transition group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 text-white md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b21b24]">
            Markets
          </p>
          <div className="mt-12 grid border-t border-white/15 md:grid-cols-3">
            {markets.map((market) => (
              <a
                key={market}
                href="#"
                className="group flex min-h-40 items-center justify-between border-b border-white/15 px-2 py-10 transition hover:bg-[#8b0f16] md:px-8"
              >
                <span className="text-3xl font-light tracking-[-0.04em] md:text-4xl">
                  {market}
                </span>
                <span className="text-3xl opacity-50 transition group-hover:translate-x-2 group-hover:opacity-100">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-28 text-center text-white md:px-10">
        <h2 className="mx-auto max-w-5xl text-5xl font-light leading-[1.08] tracking-[-0.05em] md:text-7xl">
          Let&apos;s build what&apos;s next.
        </h2>

        <div className="mx-auto mt-14 flex max-w-6xl flex-wrap justify-center gap-5">
          {["Start a Project", "Explore Design", "Development Planning", "View Projects", "Contact Huff"].map((cta) => (
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