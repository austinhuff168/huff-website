import Image from "next/image";
import Navbar from "@/components/Navbar";

const capabilities = [
  "Foundations + Footings",
  "Slabs on Grade",
  "Structural Concrete",
  "Concrete Walls",
  "Exterior Flatwork",
  "Commercial + Industrial",
];

export default function ConcretePage() {
  return (
    <main className="bg-white text-neutral-950">
      <Navbar />
{/* HERO */}
<section className="relative min-h-[780px] overflow-hidden bg-black">

  {/* BACKGROUND VIDEO */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute inset-0 z-0 h-full w-full object-cover"
  >
    <source src="/videos/concrete-hero.mp4" type="video/mp4" />
  </video>

  {/* OVERLAYS */}
  <div className="absolute inset-0 z-10 bg-black/35" />
  <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />
  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

  {/* HERO CONTENT */}
  <div className="relative z-20 mx-auto flex min-h-[780px] max-w-[1500px] items-end px-6 pb-20 md:px-10">
    <div className="grid w-full gap-12 md:grid-cols-[1.3fr_0.7fr] md:items-end">

      <div>
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#d12730]">
          Huff Concrete
        </p>

        <h1 className="mt-6 max-w-5xl text-6xl font-light leading-[0.92] tracking-[-0.055em] text-white md:text-8xl">
          Built from
          <br />
          the ground up.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-white/75">
          Commercial concrete capabilities backed by the people,
          equipment, and construction experience to get critical work
          done right.
        </p>
      </div>

      {/* SCOTT */}
      <div className="border-l border-white/30 pl-6 md:justify-self-end">
        <div className="flex items-center gap-5">
          <div className="relative h-20 w-20 overflow-hidden rounded-full bg-neutral-300">
            <Image
              src="/images/leadership/scott.jpg"
              alt="Scott Gillen"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-lg font-semibold text-white">
              Scott Gillen
            </p>

            <p className="mt-1 text-sm text-white/60">
              Vice President, Concrete Division
            </p>
          </div>
        </div>

        <a
          href="#contact"
          className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:text-[#d12730]"
        >
          Contact Scott →
        </a>
      </div>

    </div>
  </div>
</section>
    
      {/* CAPABILITIES */}
      <section className="bg-[#111111] px-6 py-20 text-white md:px-10 md:py-24">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#b21b24]">
            What We Do
          </p>

          <div className="mt-10 grid border-t border-white/20 md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className={`border-b border-white/20 py-9 md:px-8 ${
                  index % 3 !== 2 ? "md:border-r" : ""
                }`}
              >
                <p className="text-xs font-bold text-[#b21b24]">
                  0{index + 1}
                </p>

                <h3 className="mt-8 text-2xl font-light tracking-[-0.03em]">
                  {capability}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE FEATURE */}
<section className="grid md:grid-cols-[1.35fr_0.65fr]">
  <div className="relative min-h-[650px] overflow-hidden">
    <Image
      src="/images/concrete/concrete-01.jpg"
      alt="Concrete construction"
      fill
      className="object-cover"
    />
  </div>

  <div className="flex items-center bg-[#8b0f16] px-8 py-20 text-white md:px-14">
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/60">
        Built In-House
      </p>

      <h2 className="mt-6 text-4xl font-light leading-[1.05] tracking-[-0.04em] md:text-5xl">
        Fewer handoffs.
        <br />
        Better control.
      </h2>

      <p className="mt-7 max-w-md leading-8 text-white/75">
        Bringing concrete expertise into the construction team improves
        communication between the field, project management, scheduling,
        and the work that follows.
      </p>
    </div>
  </div>
</section>

{/* PHOTO GRID */}
<section className="px-6 py-24 md:px-10 md:py-32">
  <div className="mx-auto max-w-[1500px]">

    <div>
      <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
        In The Field
      </p>

      <h2 className="mt-5 text-5xl font-light tracking-[-0.045em] md:text-6xl">
        The work speaks for itself.
      </h2>
    </div>

    <div className="mt-14 grid gap-5 md:grid-cols-12">

      {/* CONCRETE 02 */}
      <div className="relative min-h-[500px] overflow-hidden md:col-span-7">
        <Image
          src="/images/concrete/concrete-02.jpg"
          alt="Huff concrete project"
          fill
          className="object-cover transition duration-700 hover:scale-105"
        />
      </div>

      {/* CONCRETE 03 */}
      <div className="relative min-h-[500px] overflow-hidden md:col-span-5">
        <Image
          src="/images/concrete/concrete-03.jpg"
          alt="Huff concrete project"
          fill
          className="object-cover transition duration-700 hover:scale-105"
        />
      </div>

      {/* CONCRETE 04 */}
      <div className="relative min-h-[360px] overflow-hidden md:col-span-4">
        <Image
          src="/images/concrete/concrete-04.jpg"
          alt="Huff concrete project"
          fill
          className="object-cover transition duration-700 hover:scale-105"
        />
      </div>

      {/* CONCRETE 05 */}
      <div className="relative min-h-[360px] overflow-hidden md:col-span-4">
        <Image
          src="/images/concrete/concrete-05.jpg"
          alt="Huff concrete project"
          fill
          className="object-cover transition duration-700 hover:scale-105"
        />
      </div>

      {/* CONCRETE 06 */}
      <div className="relative min-h-[360px] overflow-hidden md:col-span-4">
        <Image
          src="/images/concrete/concrete-06.jpg"
          alt="Huff concrete project"
          fill
          className="object-cover transition duration-700 hover:scale-105"
        />
      </div>

      {/* CONCRETE 07 */}
      <div className="relative min-h-[440px] overflow-hidden md:col-span-12">
        <Image
          src="/images/concrete/concrete-07.jpg"
          alt="Huff concrete project"
          fill
          className="object-cover transition duration-700 hover:scale-105"
        />
      </div>

    </div>
  </div>
</section>

      {/* VALUE */}
      <section className="bg-neutral-100 px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
              Why Huff Concrete
            </p>

            <h2 className="mt-6 text-5xl font-light leading-[1.03] tracking-[-0.045em]">
              Part of the construction team from day one.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {[
              [
                "Early Coordination",
                "Concrete input during planning helps identify challenges before crews arrive on site.",
              ],
              [
                "Schedule Control",
                "Critical concrete work can be coordinated directly with the overall project schedule.",
              ],
              [
                "Field Experience",
                "Experienced leadership and crews focused on practical execution in the field.",
              ],
              [
                "One Team",
                "Direct communication between concrete operations, project management, and construction leadership.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="border-t border-neutral-300 pt-6">
                <h3 className="text-xl font-semibold">{title}</h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SCOTT */}
      <section
        id="contact"
        className="bg-[#111111] px-6 py-24 text-white md:px-10 md:py-28"
      >
        <div className="mx-auto grid max-w-[1500px] gap-14 md:grid-cols-[0.65fr_1.35fr] md:items-center">
          <div className="relative min-h-[500px] overflow-hidden bg-neutral-800">
            <Image
              src="/images/leadership/scott.jpg"
              alt="Scott Gillen"
              fill
              className="object-cover"
            />
          </div>

          <div className="md:pl-10">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b21b24]">
              Start a Concrete Project
            </p>

            <h2 className="mt-6 max-w-3xl text-5xl font-light leading-[1.03] tracking-[-0.045em] md:text-6xl">
              Talk directly with our concrete team.
            </h2>

            <p className="mt-8 text-2xl font-semibold">
              Scott Gillen
            </p>

            <p className="mt-2 text-white/55">
              Vice President, Concrete Division
            </p>
<div className="mt-10">
  <a
    href="mailto:scottg@huffconstructioninc.com"
    className="inline-block rounded-full bg-[#8b0f16] px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-[#a3131c]"
  >
    Email Scott
  </a>
</div>
                      </div>
        </div>
      </section>
    </main>
  );
}