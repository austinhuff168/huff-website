import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { leaders } from "@/app/leadership/employees/data";

const locations = {
  aberdeen: {
    city: "Aberdeen",
    state: "South Dakota",
    address: "525 N Enterprise St.",
    address2: "Aberdeen, SD 57401",
    phone: "(605) 226-0052",
    phoneLink: "6052260052",
    hero: "/images/huffoffices/aberdeen.JPG",
    description:
      "Huff Construction's Aberdeen office serves clients throughout northeastern South Dakota and the surrounding region.",
  },

  "sioux-falls": {
    city: "Sioux Falls",
    state: "South Dakota",
    address: "5515 E 18th St. Suite #151",
    address2: "Sioux Falls, SD 57110",
    phone: "(605) 413-9013",
    phoneLink: "6054139013",
    hero: "/images/huffoffices/siouxfalls.JPG",
    description:
      "Huff Construction's Sioux Falls office serves clients throughout southeastern South Dakota and the surrounding region.",
  },

  norfolk: {
    city: "Norfolk",
    state: "Nebraska",
    address: "1307 S 13th Street, Ste 1",
    address2: "Norfolk, NE 68701",
    phone: "(402) 370-2274",
    phoneLink: "4023702274",
    hero: "/images/huffoffices/norfolk",
    description:
      "Huff Construction's Norfolk office serves clients throughout northeastern Nebraska and the surrounding region.",
  },
};

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const location = locations[slug as keyof typeof locations];

  if (!location) {
    notFound();
  }

  const locationTeam = leaders.filter(
    (person) => person.office === location.city
  );

  const officeLeader =
    locationTeam.find((person) => person.locationLead) ||
    locationTeam[0];

  const officeTeam = locationTeam.filter(
    (person) => person !== officeLeader
  );

  return (
    <main className="bg-white text-neutral-950">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[680px] items-end overflow-hidden">
        <Image
          src={location.hero}
          alt={`${location.city} office`}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-16 md:px-10 md:pb-20">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#d12730]">
            {location.state}
          </p>

          <h1 className="mt-5 text-6xl font-light leading-[0.95] tracking-[-0.055em] text-white md:text-8xl">
            {location.city}
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">
            Local expertise backed by the experience and resources of Huff
            Construction.
          </p>
        </div>
      </section>

      {/* OFFICE INFORMATION */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-16 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
              Huff Construction
            </p>

            <h2 className="mt-6 max-w-3xl text-5xl font-light leading-[1.02] tracking-[-0.045em] md:text-6xl">
              Building relationships.
              <br />
              Building {location.city}.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              {location.description}
            </p>
          </div>

          <div className="border-l border-neutral-200 md:pl-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">
              Office
            </p>

            <p className="mt-5 text-xl leading-8">
              {location.address}
              <br />
              {location.address2}
            </p>

            <a
              href={`tel:${location.phoneLink}`}
              className="mt-6 block text-xl transition hover:text-[#8b0f16]"
            >
              {location.phone}
            </a>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${location.address} ${location.address2}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-xs font-bold uppercase tracking-[0.22em] text-[#8b0f16]"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </section>

      {/* LOCAL LEADERSHIP */}
      {officeLeader && (
        <section className="bg-neutral-100 px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
              Local Leadership
            </p>

            <div className="mt-10 grid gap-12 md:grid-cols-2 md:items-center">
              <div className="relative min-h-[500px] overflow-hidden bg-neutral-200 md:min-h-[650px]">
                <Image
                  src={officeLeader.image}
                  alt={officeLeader.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">
                  {location.city}
                </p>

                <h2 className="mt-5 text-5xl font-light tracking-[-0.045em] md:text-6xl">
                  {officeLeader.name}
                </h2>

                <p className="mt-5 text-lg font-semibold text-[#8b0f16]">
                  {officeLeader.title}
                </p>

                <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
                  {officeLeader.bio}
                </p>

                <a
                  href="/leadership"
                  className="mt-10 inline-block text-xs font-bold uppercase tracking-[0.22em] text-neutral-950 transition hover:text-[#8b0f16]"
                >
                  View Leadership →
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* LOCAL TEAM */}
      {officeTeam.length > 0 && (
        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <div className="flex items-end justify-between border-b border-neutral-200 pb-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
                  Our People
                </p>

                <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] md:text-5xl">
                  Meet the {location.city} team.
                </h2>
              </div>

              <a
                href="/leadership"
                className="hidden text-xs font-bold uppercase tracking-[0.22em] transition hover:text-[#8b0f16] md:block"
              >
                All Leadership →
              </a>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {officeTeam.map((person) => (
                <article key={person.name} className="group">
                  <div className="overflow-hidden bg-neutral-200">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={600}
                      height={750}
                      className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-bold uppercase tracking-[-0.02em] text-[#8b0f16]">
                    {person.name}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-600">
                    {person.title}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#111111] px-6 py-24 text-center text-white md:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b21b24]">
          Start a Conversation
        </p>

        <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-light leading-[1.05] tracking-[-0.05em] md:text-7xl">
          Let&apos;s build what&apos;s next.
        </h2>

        <a
          href="/contact"
          className="mt-10 inline-block rounded-full border border-white/70 px-8 py-4 text-sm font-bold transition hover:border-[#8b0f16] hover:bg-[#8b0f16]"
        >
          Contact Huff
        </a>
      </section>
    </main>
  );
}