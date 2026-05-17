import Image from "next/image";

const services = [
  {
    title: "Search and AI visibility",
    copy: "Technical SEO, content architecture, entity signals, and answer-ready pages built for Google, search engines, and LLM discovery.",
  },
  {
    title: "Research-led content systems",
    copy: "Audience research, keyword mapping, topical plans, editorial briefs, and crisp service content that gives buyers useful answers quickly.",
  },
  {
    title: "Performance website builds",
    copy: "Fast, accessible, mobile-ready websites with clean code, structured data, optimized assets, and conversion-focused information flow.",
  },
  {
    title: "Automation and integrations",
    copy: "Reliable workflows that connect forms, CRMs, analytics, reporting, lead routing, and business tools without adding operational clutter.",
  },
];

const process = [
  "Audit the current market, search landscape, buyer intent, and technical setup.",
  "Design a clean content structure that answers real questions and supports conversion.",
  "Build fast server-rendered pages with semantic HTML, metadata, schema, and optimized media.",
  "Measure, refine, and expand what works across search, AI answers, and business outcomes.",
];

const proofPoints = [
  "Server-first pages with readable HTML content",
  "WebP-first image workflow and disciplined asset sizes",
  "Sitemap, robots, metadata, Open Graph, and schema foundations",
  "Accessible navigation, contrast, headings, and responsive layout",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Mbase Digital",
  url: "https://mbasedigital.com",
  description:
    "Mbase Digital builds fast, search-ready websites, content systems, and technical marketing workflows for growth-focused businesses.",
  areaServed: "Worldwide",
  serviceType: [
    "Search engine optimization",
    "AI search visibility",
    "Website development",
    "Content strategy",
    "Marketing automation",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <header className="site-header" aria-label="Mbase Digital site header">
          <a className="brand" href="#top" aria-label="Mbase Digital home">
            <span className="brand-mark" aria-hidden="true">M</span>
            <span>Mbase Digital</span>
          </a>
          <nav className="nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#standards">Standards</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Digital strategy, search visibility, and technical execution</p>
            <h1>Professional websites and content systems built to be found, trusted, and used.</h1>
            <p className="hero-lede">
              Mbase Digital brings creativity, logic, research, and technical ability together to create fast,
              useful digital experiences for businesses that need clear growth systems, not surface-level design.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="#contact">Start a project</a>
              <a className="button secondary" href="#services">Explore services</a>
            </div>
          </div>
          <div className="hero-media" aria-label="Digital strategy workspace visual">
            <Image
              src="/images/mbase-digital-hero.webp"
              alt="Modern digital strategy workspace with analytics, research boards, interface planning, and technical execution concepts"
              width={1600}
              height={900}
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
        </section>

        <section className="section intro" aria-labelledby="intro-title">
          <div>
            <p className="eyebrow">What the site is designed to do</p>
            <h2 id="intro-title">Help buyers understand the offer quickly while giving crawlers clean, accessible content.</h2>
          </div>
          <p>
            The structure is intentionally direct: clear services, proof of technical standards, practical process,
            and strong contact paths. Every core message is rendered as real text so people, search engines, and AI
            systems can read it without depending on client-side JavaScript.
          </p>
        </section>

        <section className="section" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2 id="services-title">Core capabilities for a modern digital presence.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section approach-band" id="approach" aria-labelledby="approach-title">
          <div className="section-heading">
            <p className="eyebrow">Approach</p>
            <h2 id="approach-title">A practical workflow from research to measurable improvement.</h2>
          </div>
          <ol className="process-list">
            {process.map((item, index) => (
              <li key={item}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section standards" id="standards" aria-labelledby="standards-title">
          <div>
            <p className="eyebrow">Build standards</p>
            <h2 id="standards-title">Fast, readable, accessible, and ready for search from day one.</h2>
            <p>
              The website is planned around server-rendered content, optimized WebP assets, semantic HTML, responsive
              layouts, and straightforward navigation. Interactive code is added only where it improves the user flow.
            </p>
          </div>
          <ul className="proof-list">
            {proofPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="section insight-band" aria-labelledby="insight-title">
          <div className="insight-copy">
            <p className="eyebrow">Positioning</p>
            <h2 id="insight-title">For businesses that need strategy and implementation in the same room.</h2>
            <p>
              Mbase Digital is positioned as a hands-on partner for companies that care about content quality,
              technical reliability, clean user experience, and discoverability across both traditional search and
              AI-assisted research journeys.
            </p>
          </div>
          <div className="metric-panel" aria-label="Website priorities">
            <div>
              <strong>SSR</strong>
              <span>server-first content</span>
            </div>
            <div>
              <strong>WebP</strong>
              <span>optimized media</span>
            </div>
            <div>
              <strong>Schema</strong>
              <span>machine-readable context</span>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Next step</p>
            <h2 id="contact-title">Turn the brand direction into a complete website system.</h2>
            <p>
              The first implementation uses a temporary text mark until the final logo is selected. Once the logo
              direction is approved, the favicon, social previews, navigation mark, and brand accents can be updated
              consistently across the site.
            </p>
          </div>
          <a className="button primary" href="mailto:hello@mbasedigital.com">Contact Mbase Digital</a>
        </section>
      </main>
    </>
  );
}
