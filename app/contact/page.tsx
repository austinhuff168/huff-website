import Navbar from "@/components/Navbar";

const offices = [
  {
    city: "Aberdeen",
    state: "South Dakota",
    address: "525 N Enterprise St. | Aberdeen, SD 57401",
    phone: "(605) 226-0052",
    href: "/locations/aberdeen",
  },
  {
    city: "Sioux Falls",
    state: "South Dakota",
    address: "5515 E 18th St. Suite #151 | Sioux Falls, SD 57110",
    phone: "(605) 413-9013",
    href: "/locations/sioux-falls",
  },
  {
    city: "Norfolk",
    state: "Nebraska",
    address: "1307 S 13th Street, Ste 1 | Norfolk, NE 68701",
    phone: "(402) 370-2274",
    href: "/locations/norfolk",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      
      {/* TRANSPARENT NAVBAR OVER HERO */}
      <Navbar active="contact" />

      {/* CONTACT HERO */}
      <section className="relative flex min-h-[620px] items-end overflow-hidden md:min-h-[700px]">
        
        {/* BACKGROUND IMAGE */}
        <img
          src="/images/contactpage.JPG"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
        />

        {/* GENERAL DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/25" />

        {/* LEFT-SIDE GRADIENT FOR HEADING */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />

        {/* BOTTOM GRADIENT FOR TEXT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-14 md:px-10 md:pb-16">
          
          {/* BOTTOM LEFT */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#d12730]">
              Contact Huff
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-light leading-[0.98] tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
              Let&apos;s build
              <br />
              what&apos;s next.
            </h1>
          </div>

          {/* BOTTOM RIGHT */}
          <p className="mt-8 max-w-sm text-lg font-light leading-7 text-white/90 md:absolute md:bottom-16 md:right-10 md:mt-0 md:text-right md:text-xl">
            From the first conversation
            <br />
            to the finished project.
          </p>

        </div>
      </section>

      {/* CONTACT AREA STARTS HERE */}

      {/* CONTACT AREA */}
      <section className="bg-neutral-100 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.7fr_1.3fr]">

          {/* DIRECT CONTACT */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#8b0f16]">
              Get In Touch
            </p>

            <h2 className="mt-6 text-4xl font-light leading-tight tracking-[-0.04em] md:text-5xl">
              Have a project
              <br />
              in mind?
            </h2>

            <p className="mt-7 max-w-md text-lg leading-8 text-neutral-600">
              Tell us a little about your project and a member of our team will
              connect with you.
            </p>

            <div className="mt-12 border-t border-neutral-300 pt-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
                General Inquiries
              </p>

              <a
                href="mailto:ADD-EMAIL"
                className="mt-3 block text-xl transition hover:text-[#8b0f16]"
              >
                ADD EMAIL
              </a>
            </div>

            <div className="mt-8 border-t border-neutral-300 pt-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
                Call Us
              </p>

              <a
                href="tel:ADD-PHONE"
                className="mt-3 block text-xl transition hover:text-[#8b0f16]"
              >
                ADD PHONE
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form className="bg-white p-8 shadow-sm md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">
                  First Name
                </label>
                <input
                  type="text"
                  className="mt-3 w-full border-b border-neutral-300 bg-transparent py-3 outline-none transition focus:border-[#8b0f16]"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">
                  Last Name
                </label>
                <input
                  type="text"
                  className="mt-3 w-full border-b border-neutral-300 bg-transparent py-3 outline-none transition focus:border-[#8b0f16]"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-3 w-full border-b border-neutral-300 bg-transparent py-3 outline-none transition focus:border-[#8b0f16]"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">
                  Phone
                </label>
                <input
                  type="tel"
                  className="mt-3 w-full border-b border-neutral-300 bg-transparent py-3 outline-none transition focus:border-[#8b0f16]"
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">
                Project Type
              </label>

              <select
                defaultValue=""
                className="mt-3 w-full border-b border-neutral-300 bg-transparent py-4 outline-none transition focus:border-[#8b0f16]"
              >
                <option value="" disabled>
                  Select a project type
                </option>
                <option>New Construction</option>
                <option>Renovation / Addition</option>
                <option>Design-Build</option>
                <option>Preconstruction / Planning</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mt-8">
              <label className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">
                Tell Us About Your Project
              </label>

              <textarea
                rows={5}
                className="mt-3 w-full resize-none border-b border-neutral-300 bg-transparent py-3 outline-none transition focus:border-[#8b0f16]"
              />
            </div>

            <button
              type="submit"
              className="mt-10 rounded-full bg-[#8b0f16] px-9 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-neutral-950"
            >
              Send Inquiry →
            </button>
          </form>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-neutral-950 px-6 py-24 text-white md:px-10 md:py-20">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b21b24]">
            Our Offices
          </p>

          <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="text-5xl font-light tracking-[-0.045em] md:text-7xl">
              Local teams.
              <br />
              Regional reach.
            </h2>

            <p className="max-w-md text-lg leading-8 text-white/60">
              Three regional offices serving clients and communities throughout
              the upper Midwest.
            </p>
          </div>

          <div className="mt-16 grid border-t border-white/15 md:grid-cols-3">
            {offices.map((office) => (
              <div
                key={office.city}
                className="border-b border-white/15 py-10 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b21b24]">
                  {office.state}
                </p>

                <h3 className="mt-4 text-4xl font-light tracking-[-0.04em]">
                  {office.city}
                </h3>

                <p className="mt-8 leading-7 text-white/60">
                  {office.address}
                </p>

                <p className="mt-2 text-white/60">
                  {office.phone}
                </p>

                <a
  href={office.href}
  className="mt-8 inline-block text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:text-[#b21b24]"
>
  View Location →
</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}