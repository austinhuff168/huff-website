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

export default function About() {
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

      {/* 40+ YEARS */}
      <section className="bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
              Since 1980
            </p>

            <p className="mt-5 text-7xl font-black tracking-[-0.06em] md:text-9xl">
              40+
            </p>

            <p className="mt-1 text-xl font-semibold uppercase tracking-[0.08em]">
              Years of Construction
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-5xl font-light leading-[1.08] tracking-[-0.045em] md:text-7xl">
              Leaders in construction for over 40 years.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
              Huff Construction has built its reputation through decades of
              experience, strong relationships, and a commitment to delivering
              quality work. We bring that experience to every project while
              continuing to evolve how we plan, design, and build.
            </p>
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