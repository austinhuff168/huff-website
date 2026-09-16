import Navbar from "@/components/Navbar";

export default function DesignPage() {
  return (
    <main className="bg-white text-neutral-950">
 <Navbar active="design" />
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/design-hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.4em] text-[#b21b24]">
              Huff Design
            </p>

            <h1 className="text-5xl font-light leading-[1] tracking-[-0.05em] text-white md:text-7xl">
              Builder-Informed Design.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/80">
              Commercial design, development planning, and project strategy
              aligned with construction realities from the beginning.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="max-w-5xl text-5xl font-light leading-[1.05] tracking-[-0.05em] md:text-7xl">
            Great projects begin long before construction.
          </h2>

          <p className="mt-12 max-w-3xl text-xl leading-9 text-neutral-600">
            The most successful projects start with thoughtful planning,
            realistic budgeting, and clear project goals before construction
            documents are ever produced.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-3">
        {[
          "Development Planning",
          "Commercial Design",
          "Design-Build Delivery",
        ].map((item) => (
          <div
            key={item}
            className="border border-neutral-200 p-12 transition hover:bg-[#8b0f16] hover:text-white"
          >
            <h3 className="text-3xl font-semibold">{item}</h3>

            <p className="mt-6 leading-8 opacity-80">
              Strategic project planning aligned with design, budget,
              schedule, and construction objectives.
            </p>
          </div>
        ))}
      </section>

      <section className="bg-neutral-100 px-6 py-32 md:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-20 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
              Schematic Studies
            </p>

            <h2 className="mt-6 text-5xl font-light tracking-[-0.05em] md:text-6xl">
              Not Ready to Build Yet?
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Our schematic studies help owners evaluate ideas before
              committing to full design or construction.
            </p>
          </div>

          <div className="space-y-6">
            {[
              "Site Evaluation",
              "Concept Floor Plans",
              "Renderings",
              "Budget Guidance",
              "Development Strategy",
              "Expansion Planning",
            ].map((item) => (
              <div
                key={item}
                className="border-b border-neutral-300 pb-4 text-2xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
            Development Planning
          </p>

          <h2 className="mt-6 max-w-4xl text-5xl font-light tracking-[-0.05em] md:text-7xl">
            Development starts long before construction.
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              "Site Selection",
              "Feasibility Studies",
              "Master Planning",
              "Expansion Planning",
              "Property Evaluation",
              "Phasing Strategy",
            ].map((item) => (
              <div
                key={item}
                className="border border-neutral-200 p-8 text-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-32 text-white md:px-10">
        <div className="mx-auto max-w-[1400px] text-center">
          <h2 className="text-5xl font-light tracking-[-0.05em] md:text-7xl">
            Let's explore your project.
          </h2>

          <div className="mt-14 flex flex-wrap justify-center gap-5">
            <a
              href="#"
              className="rounded-full border border-white px-8 py-4 text-sm font-bold transition hover:bg-[#8b0f16] hover:border-[#8b0f16]"
            >
              Schedule a Meeting
            </a>

            <a
              href="#"
              className="rounded-full border border-white px-8 py-4 text-sm font-bold transition hover:bg-[#8b0f16] hover:border-[#8b0f16]"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}