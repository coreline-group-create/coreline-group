import { useEffect, useState } from "react";

export default function CorelineGroupFinalWebsite() {
  const [loaded, setLoaded] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 300);

    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      clearTimeout(t);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);
  return (
    <div className={`min-h-screen bg-black text-white relative font-["Helvetica_Neue",system-ui,sans-serif] selection:bg-white selection:text-black scroll-smooth transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(circle_at_80%_100%,rgba(255,255,255,0.04),transparent_60%)] ${loaded ? "opacity-100" : "opacity-0"}`}>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-10">

          {/* Logo */}
          <a href="#top" className="flex flex-shrink-0 items-center gap-3 text-white">
            {/* Icon mark */}
            <span className="flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 4L13.8 10.2L20 12L13.8 13.8L12 20L10.2 13.8L4 12L10.2 10.2L12 4Z" fill="currentColor"/>
              </svg>
            </span>

            {/* Wordmark */}
            <span className="flex flex-col leading-none">
              <span className="text-[18px] font-bold uppercase tracking-[0.18em] whitespace-nowrap">
                CORELINE GROUP
              </span>
              <span className="mt-1 text-[9px] uppercase tracking-[0.36em] text-white/45">
                EUROPEAN BRAND PLATFORM
              </span>
            </span>
          </a>

          {/* Navigation desktop only */}
          <nav className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.26em] text-white/50">
            <a href="#platform" className="hover:text-white transition-colors">Platform</a>
            <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#expansion" className="hover:text-white transition-colors">Expansion</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

        </div>
      </header>

      <main id="top" className="relative overflow-hidden">
        <section id="platform" className="border-b border-white/10 min-h-screen flex items-center">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-7 py-14 lg:grid-cols-12 lg:px-10 lg:py-20">
            <div className="lg:col-span-7">
              <p className="mb-8 text-sm text-white/70 md:text-base">
                Strategic European brand infrastructure for global artists and cultural brands.
              </p>
              <h1 className="max-w-4xl text-[56px] font-black uppercase leading-[0.9] tracking-tight sm:text-[72px] md:text-[96px] lg:text-[128px]">
                European<br />Brand<br />Platform
              </h1>
              <p className="mt-10 max-w-3xl text-lg leading-9 text-white/80 md:text-[28px] md:leading-[1.5] lg:text-[30px]">
                Coreline builds the European infrastructure behind global artist-led and cultural brands. From brand architecture to manufacturing, retail distribution and controlled market expansion across Europe.
              </p>
            </div>

            <div className="lg:col-span-5 lg:pt-20">
              <div className="space-y-6 pt-2 text-[13px] uppercase tracking-[0.28em] text-white/72 md:pt-10">
                {[
                  'Brand Architecture',
                  'Production Infrastructure',
                  'Retail Distribution',
                  'European Market Expansion',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="h-px w-8 bg-white/35" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-b border-white/10">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <span
            style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
            className="select-none text-[280px] font-black uppercase leading-none tracking-tight text-white/[0.045] transition-transform duration-300 sm:text-[360px] lg:text-[620px]"
          >
              CL
            </span>
          </div>

          <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-7 py-14 lg:grid-cols-12 lg:px-10 lg:py-24">
            <div className="lg:col-span-6">
              <h2 className="max-w-4xl text-[58px] font-black uppercase leading-[0.9] tracking-tight sm:text-[80px] lg:text-[106px]">
                Building<br />Global<br />Brands<br /><span className="text-white/55">For Europe</span>
              </h2>
            </div>

            <div className="flex items-center lg:col-span-6">
              <p className="max-w-2xl text-xl leading-9 text-white/78 md:text-[28px] md:leading-[1.55] lg:ml-16">
                Coreline develops and positions global artist and cultural brands for disciplined expansion across the European market.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-7 py-14 lg:grid-cols-12 lg:px-10 lg:py-24">
            <div className="lg:col-span-7">
              <h2 className="max-w-5xl text-[54px] font-black uppercase leading-[0.92] tracking-tight sm:text-[76px] lg:text-[94px]">
                The European Platform Behind Cultural Brands
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pt-5">
              <p className="max-w-3xl text-xl leading-9 text-white/80 md:text-[28px] md:leading-[1.55]">
                We build the infrastructure required to turn global cultural influence into scalable fashion and merchandise brands across Europe.
              </p>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/62 md:text-[22px] md:leading-[1.65]">
                Strategy, manufacturing infrastructure, retail partnerships and European market development.
              </p>
            </div>
          </div>
        </section>

        <section id="capabilities" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-7 py-14 lg:px-10 lg:py-24">
            <p className="mb-12 text-[11px] uppercase tracking-[0.34em] text-white/45">Capabilities</p>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
              {[
                {
                  title: 'Brand Architecture',
                  items: ['Positioning', 'Product Architecture', 'Category Strategy', 'Capsule Development'],
                },
                {
                  title: 'Production Infrastructure',
                  items: ['Manufacturing', 'Supply Chain', 'Logistics', 'Fulfillment'],
                },
                {
                  title: 'Distribution',
                  items: ['Retail Partnerships', 'E-commerce', 'Market Entry', 'Territory Expansion'],
                },
              ].map((group) => (
                <div key={group.title}>
                  <p className="mb-7 text-[11px] uppercase tracking-[0.3em] text-white/55">{group.title}</p>
                  <div className="space-y-4 text-[34px] leading-[1.15] text-white/90 sm:text-[40px] lg:text-[44px]">
                    {group.items.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="expansion" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-7 py-14 lg:px-10 lg:py-24">
            <div className="space-y-10">
              <h2 className="max-w-5xl text-[42px] font-black uppercase leading-[0.9] tracking-tight sm:text-[58px] md:text-[72px] lg:text-[88px] xl:text-[96px]">
                Controlled<br />European<br />Expansion
              </h2>
              <p className="max-w-3xl text-[18px] leading-[1.55] text-white/78 sm:text-[22px] md:text-[28px] md:leading-[1.55]">
                We build long-term brand platforms designed for disciplined growth across Europe.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="border-b border-white/10">
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-7 py-16 lg:grid-cols-12 lg:px-10 lg:py-28">

    {/* LEFT */}
    <div className="lg:col-span-7">
      <h2 className="max-w-2xl text-[48px] font-black uppercase leading-[0.95] tracking-tight sm:text-[64px] lg:text-[78px]">
        Start a<br/>Conversation<br/><span className="text-white/55">With Coreline</span>
      </h2>
    </div>

    {/* RIGHT */}
    <div className="lg:col-span-5">
      <div className="max-w-md space-y-7 text-white/85">

        <div className="space-y-1">
          <p className="text-[22px] leading-tight text-white/85">Private Partnerships</p>
          <p className="text-[18px] leading-tight text-white/60">Artist & Cultural Brands</p>
        </div>

        <div className="space-y-3 pt-2">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/40">Contact</p>

          <a
            href="mailto:contact@thecorelinegroup.com?subject=Coreline%20Partnership%20Inquiry"
            className="inline-block text-[24px] leading-tight underline decoration-white/30 underline-offset-8 transition hover:decoration-white md:text-[28px]"
          >
            contact@thecorelinegroup.com
          </a>
        </div>

        <p className="text-[16px] leading-7 text-white/55 md:text-[18px] md:leading-[1.6]">
          Introduce your brand, project or expansion objective via email. Coreline reviews a limited number of partnerships and will respond if there is a strategic fit.
        </p>

      </div>
    </div>

  </div>
</section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-7 py-10 text-[11px] uppercase tracking-[0.28em] text-white/40 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>© The Coreline Group</p>
          <div className="flex gap-8">
            <span>thecorelinegroup.com</span>
            <span>European Brand Platform</span>
            <span>Private Partnerships</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
