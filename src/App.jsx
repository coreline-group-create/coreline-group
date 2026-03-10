import { useEffect, useState } from "react";

const styles = {
  page: (loaded) => ({
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',
    transition: "opacity 700ms ease",
    opacity: loaded ? 1 : 0,
    backgroundImage:
      "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(circle at 80% 100%, rgba(255,255,255,0.04), transparent 60%)",
  }),
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(0,0,0,0.95)",
    backdropFilter: "blur(10px)",
  },
  headerInner: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "12px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    color: "#fff",
    textDecoration: "none",
    flexShrink: 0,
  },
  nav: {
    display: "flex",
    gap: 24,
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: "0.26em",
    color: "rgba(255,255,255,0.5)",
  },
  navLink: {
    color: "rgba(255,255,255,0.5)",
    textDecoration: "none",
  },
  main: {
    position: "relative",
    overflow: "hidden",
  },
  section: {
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "56px 28px",
  },
  heroWrap: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 48,
  },
  smallText: {
    marginBottom: 24,
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
    lineHeight: 1.5,
  },
  h1: {
    margin: 0,
    fontSize: "clamp(56px, 10vw, 128px)",
    lineHeight: 0.9,
    textTransform: "uppercase",
    fontWeight: 900,
    letterSpacing: "-0.03em",
  },
  largeP: {
    marginTop: 32,
    maxWidth: 900,
    color: "rgba(255,255,255,0.8)",
    fontSize: "clamp(18px, 2.1vw, 30px)",
    lineHeight: 1.5,
  },
  rightList: {
    display: "flex",
    flexDirection: "column",
    gap: 22,
    paddingTop: 8,
    color: "rgba(255,255,255,0.72)",
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: "0.28em",
  },
  listRow: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  listLine: {
    width: 32,
    height: 1,
    background: "rgba(255,255,255,0.35)",
  },
  clSection: {
    position: "relative",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  clBg: (offset) => ({
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    pointerEvents: "none",
    fontSize: "clamp(280px, 40vw, 620px)",
    fontWeight: 900,
    lineHeight: 1,
    letterSpacing: "-0.03em",
    color: "rgba(255,255,255,0.045)",
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition: "transform 300ms ease",
    userSelect: "none",
  }),
  twoCol: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 48,
  },
  h2Large: {
    margin: 0,
    fontSize: "clamp(54px, 7vw, 106px)",
    lineHeight: 0.9,
    textTransform: "uppercase",
    fontWeight: 900,
    letterSpacing: "-0.03em",
  },
  h2Mid: {
    margin: 0,
    fontSize: "clamp(42px, 6vw, 96px)",
    lineHeight: 0.9,
    textTransform: "uppercase",
    fontWeight: 900,
    letterSpacing: "-0.03em",
  },
  muted: {
    color: "rgba(255,255,255,0.55)",
  },
  bodyBig: {
    color: "rgba(255,255,255,0.78)",
    fontSize: "clamp(20px, 2vw, 28px)",
    lineHeight: 1.55,
    maxWidth: 720,
  },
  bodyMed: {
    marginTop: 24,
    color: "rgba(255,255,255,0.62)",
    fontSize: "clamp(18px, 1.6vw, 22px)",
    lineHeight: 1.65,
    maxWidth: 720,
  },
  capsLabel: {
    marginBottom: 48,
    color: "rgba(255,255,255,0.45)",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.34em",
  },
  capsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 48,
  },
  capsTitle: {
    marginBottom: 24,
    color: "rgba(255,255,255,0.55)",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.3em",
  },
  capsItem: {
    margin: "0 0 16px 0",
    color: "rgba(255,255,255,0.9)",
    fontSize: "clamp(30px, 3vw, 44px)",
    lineHeight: 1.15,
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 56,
  },
  contactTitle: {
    margin: 0,
    maxWidth: 720,
    fontSize: "clamp(48px, 6vw, 78px)",
    lineHeight: 0.95,
    textTransform: "uppercase",
    fontWeight: 900,
    letterSpacing: "-0.03em",
  },
  contactRight: {
    maxWidth: 520,
    color: "rgba(255,255,255,0.85)",
  },
  contactLead: {
    margin: 0,
    fontSize: 22,
    lineHeight: 1.2,
    color: "rgba(255,255,255,0.85)",
  },
  contactSub: {
    margin: "6px 0 0 0",
    fontSize: 18,
    lineHeight: 1.2,
    color: "rgba(255,255,255,0.6)",
  },
  contactLabel: {
    margin: "24px 0 12px 0",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.32em",
    color: "rgba(255,255,255,0.4)",
  },
  email: {
    display: "inline-block",
    fontSize: "clamp(24px, 2vw, 28px)",
    lineHeight: 1.1,
    color: "#fff",
    textDecoration: "underline",
    textUnderlineOffset: 8,
    textDecorationColor: "rgba(255,255,255,0.3)",
  },
  contactText: {
    marginTop: 24,
    fontSize: 18,
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.55)",
  },
  footer: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },
  footerInner: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "40px 28px",
    display: "flex",
    flexDirection: "column",
    gap: 18,
    color: "rgba(255,255,255,0.4)",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.28em",
  },
  footerLinks: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
};

const capabilities = [
  {
    title: "Brand Architecture",
    items: ["Positioning", "Product Architecture", "Category Strategy", "Capsule Development"],
  },
  {
    title: "Production Infrastructure",
    items: ["Manufacturing", "Supply Chain", "Logistics", "Fulfillment"],
  },
  {
    title: "Distribution",
    items: ["Retail Partnerships", "E-commerce", "Market Entry", "Territory Expansion"],
  },
];

const rightList = [
  "Brand Architecture",
  "Production Infrastructure",
  "Retail Distribution",
  "European Market Expansion",
];

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 300);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setOffset({ x, y });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMove);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div style={styles.page(loaded)}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <a href="#top" style={styles.logo}>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" style={{ width: 28, height: 28 }} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 4L13.8 10.2L20 12L13.8 13.8L12 20L10.2 13.8L4 12L10.2 10.2L12 4Z" fill="currentColor" />
              </svg>
            </span>
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", whiteSpace: "nowrap" }}>
                CORELINE GROUP
              </span>
              <span style={{ marginTop: 4, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.36em", color: "rgba(255,255,255,0.45)" }}>
                EUROPEAN BRAND PLATFORM
              </span>
            </span>
          </a>

          {!isMobile && (
            <nav style={styles.nav}>
              <a href="#platform" style={styles.navLink}>Platform</a>
              <a href="#capabilities" style={styles.navLink}>Capabilities</a>
              <a href="#expansion" style={styles.navLink}>Expansion</a>
              <a href="#contact" style={styles.navLink}>Contact</a>
            </nav>
          )}
        </div>
      </header>

      <main id="top" style={styles.main}>
        <section id="platform" style={{ ...styles.section, ...styles.heroWrap }}>
          <div style={styles.container}>
            <div style={styles.heroGrid}>
              <div>
                <p style={styles.smallText}>
                  Strategic European brand infrastructure for global artists and cultural brands.
                </p>
                <h1 style={styles.h1}>
                  European
                  <br />
                  Brand
                  <br />
                  Platform
                </h1>
                <p style={styles.largeP}>
                  Coreline builds the European infrastructure behind global artist-led and cultural brands. From brand architecture to manufacturing, retail distribution and controlled market expansion across Europe.
                </p>
              </div>

              <div style={styles.rightList}>
                {rightList.map((item) => (
                  <div key={item} style={styles.listRow}>
                    <span style={styles.listLine} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={styles.clSection}>
          <div style={styles.clBg(offset)}>CL</div>
          <div style={styles.container}>
            <div style={styles.twoCol}>
              <div>
                <h2 style={styles.h2Large}>
                  Building
                  <br />
                  Global
                  <br />
                  Brands
                  <br />
                  <span style={styles.muted}>For Europe</span>
                </h2>
              </div>
              <div>
                <p style={styles.bodyBig}>
                  Coreline develops and positions global artist and cultural brands for disciplined expansion across the European market.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.container}>
            <div style={styles.twoCol}>
              <div>
                <h2 style={styles.h2Mid}>The European Platform Behind Cultural Brands</h2>
              </div>
              <div>
                <p style={styles.bodyBig}>
                  We build the infrastructure required to turn global cultural influence into scalable fashion and merchandise brands across Europe.
                </p>
                <p style={styles.bodyMed}>
                  Strategy, manufacturing infrastructure, retail partnerships and European market development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" style={styles.section}>
          <div style={styles.container}>
            <p style={styles.capsLabel}>Capabilities</p>
            <div
              style={{
                ...styles.capsGrid,
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              }}
            >
              {capabilities.map((group) => (
                <div key={group.title}>
                  <p style={styles.capsTitle}>{group.title}</p>
                  {group.items.map((item) => (
                    <p key={item} style={styles.capsItem}>{item}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="expansion" style={styles.section}>
          <div style={styles.container}>
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              <h2 style={styles.h2Mid}>
                Controlled
                <br />
                European
                <br />
                Expansion
              </h2>
              <p style={styles.bodyBig}>
                We build long-term brand platforms designed for disciplined growth across Europe.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" style={styles.section}>
          <div style={styles.container}>
            <div
              style={{
                ...styles.contactGrid,
                gridTemplateColumns: isMobile ? "1fr" : "7fr 5fr",
              }}
            >
              <div>
                <h2 style={styles.contactTitle}>
                  Start a
                  <br />
                  Conversation
                  <br />
                  <span style={styles.muted}>With Coreline</span>
                </h2>
              </div>

              <div style={styles.contactRight}>
                <div>
                  <p style={styles.contactLead}>Private Partnerships</p>
                  <p style={styles.contactSub}>Artist & Cultural Brands</p>
                </div>

                <p style={styles.contactLabel}>Contact</p>

                <a
                  href="mailto:contact@thecorelinegroup.com?subject=Coreline%20Partnership%20Inquiry"
                  style={styles.email}
                >
                  contact@thecorelinegroup.com
                </a>

                <p style={styles.contactText}>
                  Introduce your brand, project or expansion objective via email. Coreline reviews a limited number of partnerships and will respond if there is a strategic fit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <p style={{ margin: 0 }}>© The Coreline Group</p>
          <div style={styles.footerLinks}>
            <span>thecorelinegroup.com</span>
            <span>European Brand Platform</span>
            <span>Private Partnerships</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
