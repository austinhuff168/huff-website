import Navbar from "@/components/Navbar";

const openings = [
  {
    title: "Foreman",
    location: "Aberdeen, SD",
    type: "Full-Time",
    description:
      "Lead field crews, coordinate daily activities, maintain jobsite quality, and help deliver commercial construction projects safely and efficiently.",
  },
  {
    title: "Superintendent",
    location: "Sioux Falls, SD",
    type: "Full-Time",
    description:
      "Manage day-to-day jobsite operations, coordinate subcontractors, maintain schedules, and ensure projects are completed to Huff standards.",
  },
  {
    title: "Project Engineer",
    location: "Norfolk, NE",
    type: "Full-Time",
    description:
      "Support project managers and superintendents through project documentation, scheduling, coordination, and communication from preconstruction through closeout.",
  },
];

export default function OpeningsPage() {
  return (
    <main className="bg-white text-neutral-950">
      <Navbar active="openings" solid />

      <section className="px-6 pb-20 pt-40 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#8b0f16]">
            Openings
          </p>

          <div className="mt-8 grid gap-12 border-b border-neutral-200 pb-16 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <h1 className="text-6xl font-light leading-[0.95] tracking-[-0.06em] md:text-8xl">
              Build your career with Huff.
            </h1>

            <p className="max-w-2xl text-xl leading-9 text-neutral-600">
              We are looking for talented people who take pride in their work,
              lead with integrity, and want to help deliver quality construction
              projects throughout the region.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="mb-8 text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
            Current Opportunities
          </p>

          <div className="border-t border-neutral-200">
            {openings.map((job) => (
              <div
                key={job.title}
                className="grid gap-8 border-b border-neutral-200 py-10 md:grid-cols-[0.8fr_1.2fr_0.4fr]"
              >
                <div>
                  <h2 className="text-4xl font-light tracking-[-0.05em]">
                    {job.title}
                  </h2>

                  <p className="mt-3 text-neutral-500">
                    {job.location}
                  </p>
                </div>

                <p className="max-w-3xl text-lg leading-8 text-neutral-600">
                  {job.description}
                </p>

                <div className="flex items-start justify-start md:justify-end">
                  <span className="rounded-full border border-neutral-300 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-neutral-600">
                    {job.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 px-6 py-32 md:px-10">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
            Careers at Huff
          </p>

          <h2 className="mt-6 text-5xl font-light leading-[1.05] tracking-[-0.05em] md:text-7xl">
            Interested in joining our team?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-neutral-600">
            We are always interested in speaking with talented people who share
            our commitment to quality, integrity, and teamwork.
          </p>

          <div className="mt-16">
            <a
              href="mailto:hr@huffconstructioninc.com"
              className="inline-block border-b-2 border-[#8b0f16] pb-2 text-2xl font-light tracking-[-0.02em] text-neutral-900 transition hover:text-[#8b0f16]"
            >
              hr@huffconstructioninc.com
            </a>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-neutral-500">
              Email your resume and a brief introduction
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}