import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";

const projects = [
  {
    slug: "aberdeen-dental-clinic",
    name: "Aberdeen Dental Clinic",
    market: "Healthcare",
    location: "Aberdeen, SD",
    size: "10,000 SF",
    delivery: "Design-Build",
    year: "2026",
    description:
      "Huff Construction partnered with the project team to deliver a new dental clinic designed around an efficient patient experience, functional clinical spaces, and long-term flexibility. The design-build process brought planning, design, budgeting, and construction together from the earliest stages of the project.",
    images: [
      "/images/projects/dakota_dentistry_1.png",
      "/images/projects/dakota_dentistry_2.png",
      "/images/projects/dakota_dentistry_3.png",
      "/images/projects/dakota_dentistry_4.png",
      "/images/projects/dakota_dentistry_5.png",
    ],
  },

  {
    slug: "dacotah-bank-headquarters",
    name: "Dacotah Bank Headquarters",
    market: "Commercial",
    location: "Aberdeen, SD",
    size: "42,000 SF",
    delivery: "Construction",
    year: "2024",
    description:
      "The Dacotah Bank Headquarters project created a modern workplace designed to support the organization's continued growth. Huff Construction worked closely with the project team throughout construction to deliver a high-quality commercial environment with careful attention to schedule, coordination, and finish quality.",
    images: [
      "/images/projects/DB_01.jpg",
      "/images/projects/DB_02.jpg",
      "/images/projects/DB_03.jpg",
      "/images/projects/DB_04.jpg",
      "/images/projects/DB_05.jpg",
    ],
  },

  {
    slug: "sioux-falls-career-tech-addition",
    name: "Sioux Falls Career Tech Addition",
    market: "Education / Industrial",
    location: "Sioux Falls, SD",
    size: "68,000 SF",
    delivery: "Construction",
    year: "2025",
    description:
      "The Sioux Falls Career Tech Addition expands hands-on educational and technical training opportunities through flexible, durable learning environments. The project combines educational spaces with industrial-style training areas requiring careful coordination of building systems and construction.",
    images: [
      "/images/projects/CTE_1.JPeG",
      "/images/projects/CTE_2.jpg",
      "/images/projects/CTE_3.jpg",
      "/images/projects/CTE_4.jpg",
      "/images/projects/CTE_5.jpg",
    ],
  },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white text-neutral-950">
      <Navbar active="projects" solid />

      {/* PROJECT HEADER */}
      <section className="px-6 pb-16 pt-48 md:px-10 md:pb-24">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
            {project.market}
          </p>

          <h1 className="mt-6 max-w-6xl text-6xl font-light leading-[0.95] tracking-[-0.055em] md:text-8xl">
            {project.name}
          </h1>

          {/* PROJECT INFORMATION */}
          <div className="mt-14 grid gap-8 border-y border-neutral-200 py-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
                Location
              </p>
              <p className="mt-3 text-lg">{project.location}</p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
                Size
              </p>
              <p className="mt-3 text-lg">{project.size}</p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
                Delivery
              </p>
              <p className="mt-3 text-lg">{project.delivery}</p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
                Completed
              </p>
              <p className="mt-3 text-lg">{project.year}</p>
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div
            className="min-h-[550px] bg-cover bg-center md:min-h-[800px]"
            style={{
              backgroundImage: `url(${project.images[0]})`,
            }}
          />
        </div>
      </section>

      {/* PROJECT DESCRIPTION */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
              The Project
            </p>
          </div>

          <div>
            <p className="max-w-4xl text-2xl font-light leading-[1.6] tracking-[-0.02em] text-neutral-700 md:text-3xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE 2 */}
      {project.images[1] && (
        <section className="px-6 md:px-10">
          <div
            className="mx-auto min-h-[500px] max-w-[1500px] bg-cover bg-center md:min-h-[750px]"
            style={{
              backgroundImage: `url(${project.images[1]})`,
            }}
          />
        </section>
      )}

      {/* IMAGES 3 + 4 */}
      <section className="px-6 py-6 md:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-6 md:grid-cols-2">
          {project.images.slice(2, 4).map((image) => (
            <div
              key={image}
              className="min-h-[500px] bg-cover bg-center md:min-h-[650px]"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          ))}
        </div>
      </section>

      {/* IMAGE 5 */}
      {project.images[4] && (
        <section className="px-6 pb-28 pt-0 md:px-10">
          <div
            className="mx-auto min-h-[500px] max-w-[1500px] bg-cover bg-center md:min-h-[750px]"
            style={{
              backgroundImage: `url(${project.images[4]})`,
            }}
          />
        </section>
      )}

      {/* BACK TO PROJECTS */}
      <section className="bg-neutral-950 px-6 py-20 text-white md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#b21b24]">
              Our Work
            </p>
            <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] md:text-5xl">
              Explore more projects.
            </h2>
          </div>

          <a
            href="/projects"
            className="inline-flex w-fit rounded-full border border-white/60 px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] transition hover:bg-white hover:text-neutral-950"
          >
            View All Projects →
          </a>
        </div>
      </section>
    </main>
  );
}