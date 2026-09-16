import Navbar from "@/components/Navbar";

const values = [
  ["Integrity", "Doing what’s right through honest, transparent, and ethical work."],
  ["Team Oriented", "Working together toward common goals with shared accountability."],
  ["Family Culture", "Supporting people, growth, loyalty, and long-term commitment."],
  ["Value of Relationships", "Building lasting relationships with clients, partners, and communities."],
];

export default function ourteamPage() {
  return (
    <main className="bg-white text-neutral-950">
      <Navbar solid />

      <section className="px-6 pb-24 pt-40 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#8b0f16]">
            About Huff
          </p>

          <h1 className="mt-8 max-w-5xl text-6xl font-light leading-[0.95] tracking-[-0.06em] md:text-8xl">
            A leader in the construction industry.
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-9 text-neutral-600">
            Established in 1979, Huff brings decades of experience and a team of
            professionals committed to excellence.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28 md:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-16 border-y border-neutral-200 py-20 md:grid-cols-[0.8fr_1.2fr]">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
            Experience
          </p>

          <div className="space-y-8 text-xl leading-9 text-neutral-600">
            <p>
              Through more than 45 years of experience as a general contractor,
              Huff Construction has earned a strong reputation for leadership in
              the industry and has become a well-respected construction company
              in Aberdeen and the surrounding region.
            </p>
            <p>
              Integrity, quality, and excellence are at the core of every action
              we take, and our clients willingly speak in a positive manner on
              behalf of our company.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
            Core Values
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {values.map(([title, text]) => (
              <div
                key={title}
                className="border border-neutral-200 bg-white p-8 transition hover:border-[#8b0f16]"
              >
                <h2 className="text-3xl font-light tracking-[-0.04em]">
                  {title}
                </h2>
                <p className="mt-6 leading-7 text-neutral-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
              Our History
            </p>
            <h2 className="mt-6 text-5xl font-light leading-[1.05] tracking-[-0.05em] md:text-7xl">
              Built on generations of construction experience.
            </h2>
          </div>

          <div className="space-y-8 text-xl leading-9 text-neutral-600">
            <p>
              Roger Huff began working in the construction industry in 1967 as
              an employee of his father, George Huff, in Wilmot, South Dakota.
              After getting married, he and his family moved to Aberdeen, where
              they still reside today.
            </p>
            <p>
              Originating in 1979, the company began as Huff Construction and
              later became Huff Construction, Inc. as the company grew. Over
              time, the business continued to expand and came to include his two
              sons, Chad and Cory, and the full-time staff known today.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-28 text-center text-white md:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b21b24]">
          Let&apos;s Build
        </p>

        <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-light leading-[1.08] tracking-[-0.05em] md:text-7xl">
          We are excited to make your construction project a seamless success.
        </h2>

        <div className="mx-auto mt-14 flex max-w-6xl flex-wrap justify-center gap-5">
          {["Get in Touch", "View Projects", "Explore Design"].map((cta) => (
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