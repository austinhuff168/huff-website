import Navbar from "@/components/Navbar";
import Image from "next/image";


const services = [
  {
    number: "01",
    title: "Site + Property Studies",
    text: "Evaluate site capacity, access, existing conditions, expansion potential, and development constraints before major decisions are made.",
  },
  {
    number: "02",
    title: "Feasibility",
    text: "Test program, project scale, preliminary cost, schedule, and constructability to understand whether an opportunity makes sense.",
  },
  {
    number: "03",
    title: "Concept Planning",
    text: "Translate an early idea into site plans, building concepts, space requirements, and visual studies that establish a direction.",
  },
  {
    number: "04",
    title: "Development Strategy",
    text: "Create a practical path from opportunity through design, approvals, budgeting, and construction.",
  },
];

const opportunities = [
  {
    title: "East Arrowhead Offices",
    location: "Sioux Falls, South Dakota",
    type: "Commercial Development",
    status: "Concept + Feasibility",
    image: "/images/huffoffices/siouxfalls.JPG",
  },
  {
    title: "Brandon 90 Plaza",
    location: "Aberdeen, South Dakota",
    type: "Commercial Development",
    status: "Planning",
    image: "/images/development/brandonplaza_1.png",
  },
];

const historicalProjects = [
  {
    title: "Refuge Retreats",
    location: "Aberdeen, South Dakota",
    involvement: "Planning · Preconstruction · Construction",
    image: "/images/project-01.JPG",
    href: "/projects/dacotah-bank-headquarters",
  },
  {
    title: "example",
    location: "Sioux Falls, South Dakota",
    involvement: "Site Planning · Preconstruction · Construction",
    image: "/images/huffoffices/",
    href: "/projects",
  },
  {
    title: "example",
    location: "South Dakota",
    involvement: "Concept Planning · Design · Construction",
    image: "/images/design-01.jpg",
    href: "/projects",
  },
];

export default function DevelopmentPage() {
  return (
    <main className="bg-white text-neutral-950">
<Navbar active="develop" />
      

      {/* HERO */}
      <section className="relative flex min-h-[760px] items-end overflow-hidden">
        <Image
          src="/images/project-01.JPG"
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-20 md:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#d12730]">
            Development Planning
          </p>

          <h1 className="mt-6 max-w-5xl text-6xl font-light leading-[0.95] tracking-[-0.055em] text-white md:text-8xl">
            See the opportunity
            <br />
            before the project.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
            From early site studies and feasibility analysis to concept planning
            and construction strategy, Huff helps owners understand what&apos;s
            possible before making major commitments.
          </p>

          <a
            href="#opportunities"
            className="mt-10 inline-block rounded-full bg-[#8b0f16] px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-[#a3131c]"
          >
            Explore Opportunities
          </a>
        </div>
      </section>

     
      {/* CURRENT OPPORTUNITIES */}
      <section
        id="opportunities"
        className="px-6 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
                Current Opportunities
              </p>

              <h2 className="mt-6 text-5xl font-light tracking-[-0.045em] md:text-6xl">
                What we&apos;re exploring now.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-neutral-600 md:justify-self-end">
              Properties, concepts, and development opportunities currently
              being evaluated by the Huff team.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {opportunities.map((project) => (
              <article
                key={project.title + project.location}
                className="group"
              >
                <div className="relative h-[460px] overflow-hidden bg-neutral-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d12730]">
                      {project.status}
                    </p>

                    <h3 className="mt-4 text-3xl font-light">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm text-white/65">
                      {project.location} · {project.type}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section className="bg-neutral-100 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
            How We Help
          </p>

          <div className="mt-12 grid border-t border-neutral-300 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`border-b border-neutral-300 py-10 md:p-10 ${
                  index % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <p className="text-sm font-bold text-[#8b0f16]">
                  {service.number}
                </p>

                <h3 className="mt-8 text-3xl font-light tracking-[-0.035em]">
                  {service.title}
                </h3>

                <p className="mt-5 max-w-xl leading-7 text-neutral-600">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#111111] px-6 py-24 text-white md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b21b24]">
            The Process
          </p>

          <h2 className="mt-6 max-w-4xl text-5xl font-light tracking-[-0.045em] md:text-6xl">
            From possibility to a clear path forward.
          </h2>

          <div className="mt-16 grid border-t border-white/20 md:grid-cols-4">
            {[
              ["01", "Understand", "Property, goals, market and existing conditions."],
              ["02", "Test", "Site capacity, program, concepts and feasibility."],
              ["03", "Validate", "Cost, schedule, constructability and strategy."],
              ["04", "Move Forward", "Design, approvals, procurement and construction."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="border-b border-white/20 py-10 md:border-r md:px-7 md:last:border-r-0"
              >
                <p className="text-sm font-bold text-[#b21b24]">{number}</p>

                <h3 className="mt-16 text-2xl font-light">{title}</h3>

                <p className="mt-5 leading-7 text-white/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORICAL PROJECTS */}
      <section className="bg-neutral-100 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
            Proven Experience
          </p>

          <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-5xl font-light leading-[1.02] tracking-[-0.045em] md:text-6xl">
              From early opportunity
              <br />
              to built work.
            </h2>

            <a
              href="/projects"
              className="text-xs font-bold uppercase tracking-[0.22em] transition hover:text-[#8b0f16]"
            >
              View All Projects →
            </a>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {historicalProjects.map((project, index) => (
  <a
    key={`${project.title}-${index}`}
                href={project.href}
                className="group"
              >
                <div className="relative h-[420px] overflow-hidden bg-neutral-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <h3 className="text-2xl font-light">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm text-white/60">
                      {project.location}
                    </p>

                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                      {project.involvement}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AUSTIN CONTACT */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-14 md:grid-cols-[0.7fr_1.3fr] md:items-center">
          <div className="relative min-h-[520px] overflow-hidden bg-neutral-200">
            <Image
              src="/images/leadership/austin.jpg"
              alt="Austin Huff"
              fill
              className="object-cover"
            />
          </div>

          <div className="md:pl-10">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
              Have a Property or an Idea?
            </p>

            <h2 className="mt-6 max-w-3xl text-5xl font-light leading-[1.03] tracking-[-0.045em] md:text-6xl">
              Start the conversation before the drawings.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              Early planning can answer some of the most important questions
              before significant time and capital are committed. Bring us a
              property, an idea, or a business need and we&apos;ll help explore
              what it could become.
            </p>

            <div className="mt-10 border-l-2 border-[#8b0f16] pl-6">
              <p className="text-xl font-bold uppercase tracking-[-0.02em]">
                Austin Huff
              </p>

              <p className="mt-2 text-neutral-500">
                Architect · Development Planning + Design
              </p>
            </div>

            <a
              href="/contact"
              className="mt-10 inline-block rounded-full bg-[#8b0f16] px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-[#a3131c]"
            >
              Discuss an Opportunity
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}