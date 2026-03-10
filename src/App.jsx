export default function CorelineGroupFinalWebsite() {
  const styles = {
    page: {
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
      fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',
      backgroundImage:
        "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(circle at 80% 100%, rgba(255,255,255,0.04), transparent 60%)",
    },
    header: {
      position: "sticky",
      top: 0,
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(0,0,0,0.95)",
      backdropFilter: "blur(10px)",
      zIndex: 10,
    },
    navRow: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "14px 28px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      textDecoration: "none",
      color: "#fff",
    },
    logoTitle: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: "0.18em",
    },
    container: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "72px 28px",
    },
    heroTitle: {
      fontSize: "clamp(64px,11vw,140px)",
      fontWeight: 900,
      lineHeight: 0.9,
      margin: 0,
      textTransform: "uppercase",
      letterSpacing: "-0.04em",
    },
    sectionTitle: {
      fontSize: "clamp(48px,8vw,96px)",
      fontWeight: 900,
      lineHeight: 0.9,
      margin: 0,
      textTransform: "uppercase",
      letterSpacing: "-0.04em",
    },
    lead: {
      marginTop: 30,
      maxWidth: 780,
      fontSize: "clamp(20px,2vw,28px)",
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.82)",
    },
    eyebrow: {
      margin: "0 0 22px 0",
      fontSize: 12,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.55)",
    },
    muted: {
      color: "rgba(255,255,255,0.55)",
    },
    clBlock: {
      position: "relative",
      overflow: "hidden",
    },
    clMark: {
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "clamp(220px,34vw,520px)",
      fontWeight: 900,
      color: "rgba(255,255,255,0.05)",
      lineHeight: 1,
      pointerEvents: "none",
      userSelect: "none",
    },
    capabilityWrap: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: 42,
      marginTop: 42,
    },
    capabilityTitle: {
      fontSize: 11,
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.55)",
      marginBottom: 18,
    },
    capabilityItem: {
      fontSize: "clamp(28px,3vw,42px)",
      lineHeight: 1.18,
      margin: "8px 0",
    },
    footer: {
      borderTop: "1px solid rgba(255,255,255,0.1)",
      marginTop: 30,
    },
    footerInner: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "40px 28px",
      fontSize: 11,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.4)",
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.navRow}>
          <a href="#top" style={styles.logo}>
            <svg viewBox="0 0 24 24" width="26" height="26" fill="white" aria-hidden="true">
              <path d="M12 4L13.8 10.2L20 12L13.8 13.8L12 20L10.2 13.8L4 12L10.2 10.2L12 4Z" />
            </svg>
            <div>
              <div style={styles.logoTitle}>CORELINE GROUP</div>
              <div style={{ fontSize: 9, letterSpacing: "0.36em", opacity: 0.5 }}>
                EUROPEAN BRAND PLATFORM
              </div>
            </div>
          </a>
        </div>
      </header>

      <main id="top">
        <section style={styles.container}>
          <p style={styles.eyebrow}>Strategic European brand infrastructure</p>
          <h1 style={styles.heroTitle}>
            European
            <br />
            Brand
            <br />
            Platform
          </h1>
          <p style={styles.lead}>
            Coreline builds the European infrastructure behind global artist-led and cultural brands.
            From brand architecture to manufacturing, retail distribution and controlled market expansion across Europe.
          </p>
        </section>

        <section style={{ ...styles.container, ...styles.clBlock }}>
          <div style={styles.clMark}>CL</div>
          <h2 style={styles.sectionTitle}>
            Building
            <br />
            Global
            <br />
            Brands
            <br />
            <span style={styles.muted}>For Europe</span>
          </h2>
          <p style={styles.lead}>
            Coreline develops and positions global artist and cultural brands for disciplined expansion across the European market.
          </p>
        </section>

        <section style={styles.container}>
          <p style={styles.eyebrow}>Capabilities</p>
          <h2 style={styles.sectionTitle}>Capabilities</h2>

          <div style={styles.capabilityWrap}>
            <div>
              <div style={styles.capabilityTitle}>Brand Architecture</div>
              <div style={styles.capabilityItem}>Positioning</div>
              <div style={styles.capabilityItem}>Product Architecture</div>
              <div style={styles.capabilityItem}>Category Strategy</div>
              <div style={styles.capabilityItem}>Capsule Development</div>
            </div>

            <div>
              <div style={styles.capabilityTitle}>Production Infrastructure</div>
              <div style={styles.capabilityItem}>Manufacturing</div>
              <div style={styles.capabilityItem}>Supply Chain</div>
              <div style={styles.capabilityItem}>Logistics</div>
              <div style={styles.capabilityItem}>Fulfillment</div>
            </div>

            <div>
              <div style={styles.capabilityTitle}>Distribution</div>
              <div style={styles.capabilityItem}>Retail Partnerships</div>
              <div style={styles.capabilityItem}>E-commerce</div>
              <div style={styles.capabilityItem}>Market Entry</div>
              <div style={styles.capabilityItem}>Territory Expansion</div>
            </div>
          </div>
        </section>

        <section style={styles.container}>
          <h2 style={styles.sectionTitle}>
            Controlled
            <br />
            European
            <br />
            Expansion
          </h2>
          <p style={styles.lead}>
            We build long-term brand platforms designed for disciplined growth across Europe.
          </p>
        </section>

        <section style={styles.container}>
          <h2 style={styles.sectionTitle}>
            Start a
            <br />
            Conversation
            <br />
            <span style={styles.muted}>With Coreline</span>
          </h2>

          <p style={{ fontSize: 22, marginTop: 30 }}>Private Partnerships</p>
          <p style={{ opacity: 0.6 }}>Artist & Cultural Brands</p>

          <p style={{ marginTop: 30, fontSize: 12, letterSpacing: "0.32em", opacity: 0.5 }}>
            CONTACT
          </p>

          <a
            href="mailto:contact@thecorelinegroup.com"
            style={{ fontSize: 26, textDecoration: "underline", color: "white" }}
          >
            contact@thecorelinegroup.com
          </a>

          <p style={{ marginTop: 20, opacity: 0.6, maxWidth: 700 }}>
            Introduce your brand, project or expansion objective via email. Coreline reviews a limited number of partnerships and will respond if there is a strategic fit.
          </p>
        </section>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerInner}>© The Coreline Group — European Brand Platform</div>
      </footer>
    </div>
  );
}
