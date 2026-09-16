type NavbarProps = {
  active?:
    | "construction"
    | "design"
    | "develop"
    | "projects"
    | "locations"
    | "about"
    | "leadership"
    | "openings"
    | "contact";
  solid?: boolean;
};

import Image from "next/image";

export default function Navbar({
  active = "construction",
  solid = false,
}: NavbarProps) {
  const logoText = solid ? "text-neutral-900" : "text-white";
  const secondaryText = solid ? "text-neutral-500" : "text-white/70";
  const divider = solid ? "bg-neutral-300" : "bg-white/30";

  const inactiveText = solid
    ? "text-neutral-500 hover:text-neutral-900"
    : "text-white/70 hover:text-white";

  const activeText = solid ? "text-neutral-900" : "text-white";

  const contactClass = solid
    ? "rounded-full border border-neutral-300 px-6 py-3 text-neutral-900 transition hover:border-[#8b0f16] hover:bg-[#8b0f16] hover:text-white"
    : "rounded-full border border-white/50 px-6 py-3 text-white transition hover:border-[#8b0f16] hover:bg-[#8b0f16]";

  const navLinkClass = (
    item: NonNullable<NavbarProps["active"]>
  ) =>
    active === item
      ? `border-b border-[#8b0f16] pb-2 ${activeText}`
      : `pb-2 transition ${inactiveText}`;

  const teamActive =
    active === "about" ||
    active === "leadership" ||
    active === "openings";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        solid ? "border-b border-neutral-200 bg-white shadow-sm" : ""
      }`}
    >
      <div className="mx-auto flex h-30 max-w-[1920px] items-center justify-between px-4 md:px-5">
       

<a href="/" className="flex items-center">
  <Image
    src="/images/logo.png"
    alt="Huff Construction"
    width={220}
    height={70}
    priority
    className="h-auto w-[120px] md:w-[150px]"
  />
</a>

        <nav
          className={`hidden items-center gap-9 text-[11px] font-bold uppercase tracking-[0.22em] md:flex ${logoText}`}
        >
          <a href="/" className={navLinkClass("construction")}>
            Construction
          </a>

          <a href="/design" className={navLinkClass("design")}>
            Design
          </a>

	  <a href="/develop" className={navLinkClass("develop")}>
            Develop
          </a>

          <a href="/projects" className={navLinkClass("projects")}>
            Projects
          </a>

          {/* OUR TEAM DROPDOWN */}

          <div className="group relative">
            <button
              type="button"
              className={`pb-2 ${
                teamActive
                  ? `border-b border-[#8b0f16] ${activeText}`
                  : inactiveText
              }`}
            >
              OUR TEAM
            </button>

            <div
              className={`invisible absolute left-0 top-full mt-4 w-60 translate-y-2 border opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                solid
                  ? "border-neutral-200 bg-white"
                  : "border-white/10 bg-[#111111]/95 backdrop-blur-md"
              }`}
            >
              <a
                href="/about"
                className={`block px-5 py-4 text-xs font-bold uppercase tracking-[0.2em] transition ${
                  solid
                    ? "text-neutral-700 hover:bg-neutral-100"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                About Huff
              </a>

              <a
                href="/leadership"
                className={`block px-5 py-4 text-xs font-bold uppercase tracking-[0.2em] transition ${
                  solid
                    ? "text-neutral-700 hover:bg-neutral-100"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                Leadership
              </a>

<a
  href="/locations"
  className={`block px-5 py-4 text-xs font-bold uppercase tracking-[0.2em] transition ${
    solid
      ? "text-neutral-700 hover:bg-neutral-100"
      : "text-white/75 hover:bg-white/10 hover:text-white"
  }`}
>
  Locations
</a>

              <a
                href="/openings"
                className={`block px-5 py-4 text-xs font-bold uppercase tracking-[0.2em] transition ${
                  solid
                    ? "text-neutral-700 hover:bg-neutral-100"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                Openings
              </a>
            </div>
          </div>

          <a href="/contact" className={contactClass}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}