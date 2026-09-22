import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "../data/projects";

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

  const hero = project.images[0];
  const gallery = project.images.slice(1);

  return (
    <main className="bg-white text-neutral-950">
      <Navbar active="projects" solid />

      {/* PROJECT HEADER */}
      <section className="px-6 pb-12 pt-40 md:px-10 md:pb-16 md:pt-48">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#8b0f16]">
            {project.market}
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-[6.5rem]">
            {project.name}
          </h1>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative aspect-[16/8] overflow-hidden bg-neutral-100">
            <Image
              src={hero}
              alt={project.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1500px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* PROJECT INFORMATION */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid grid-cols-2 border-b border-neutral-200 md:grid-cols-3">
            <div className="border-r border-neutral-200 py-8 pr-6 md:py-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-neutral-400">
                Location
              </p>

              <p className="mt-3 text-base text-neutral-800">
                {project.location}
              </p>
            </div>

            <div className="py-8 pl-6 md:border-r md:border-neutral-200 md:px-8 md:py-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-neutral-400">
                Size
              </p>

              <p className="mt-3 text-base text-neutral-800">
                {project.size}
              </p>
            </div>

            <div className="col-span-2 border-t border-neutral-200 py-8 md:col-span-1 md:border-t-0 md:py-10 md:pl-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-neutral-400">
                Delivery
              </p>

              <p className="mt-3 text-base text-neutral-800">
                {project.delivery}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROJECT */}
      {project.description && (
        <section className="px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#8b0f16]">
                The Project
              </p>
            </div>

            <div>
              <p className="max-w-4xl text-2xl font-light leading-[1.55] tracking-[-0.02em] text-neutral-700 md:text-3xl md:leading-[1.5]">
                {project.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* PROJECT GALLERY */}
      {gallery.length > 0 && (
        <section className="px-6 pb-28 md:px-10 md:pb-36">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 flex items-center gap-6">
              <p className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">
                Project Gallery
              </p>

              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {gallery.map((image, index) => {
                /*
                  With four gallery images:

                  02 — 03
                  04 —————
                  05 — 06

                  Every third image becomes full width.
                */
                const fullWidth =
                  gallery.length >= 3 && index % 3 === 2;

                return (
                  <div
                    key={`${image}-${index}`}
                    className={`group relative overflow-hidden bg-neutral-100 ${
                      fullWidth ? "md:col-span-2" : ""
                    }`}
                  >
                    <div
                      className={
                        fullWidth
                          ? "relative aspect-[16/7]"
                          : "relative aspect-[4/3]"
                      }
                    >
                      <Image
                        src={image}
                        alt={`${project.name} project photo ${index + 2}`}
                        fill
                        sizes={
                          fullWidth
                            ? "(max-width: 768px) 100vw, 1500px"
                            : "(max-width: 768px) 100vw, 750px"
                        }
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* PROJECT CTA */}
      <section className="bg-[#111111] px-6 py-24 text-white md:px-10 md:py-28">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#b21b24]">
              Start a Project
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-light leading-[1.05] tracking-[-0.045em] md:text-6xl">
              Planning what&apos;s next?
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-6 border-b border-white/50 pb-2 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:border-[#b21b24] hover:text-[#b21b24]"
          >
            Contact Huff
            <span className="text-xl">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}