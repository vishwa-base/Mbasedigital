import Image from "next/image";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Method", href: "#method" },
  { label: "Standards", href: "#standards" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Search and AI visibility",
    copy: "Technical SEO, content architecture, schema, entity clarity, and answer-ready pages for search engines and LLM-assisted discovery.",
    items: ["Technical audits", "Topical maps", "Schema planning"],
  },
  {
    title: "Content strategy and production",
    copy: "Research-led content systems that turn buyer questions, keyword demand, and service expertise into clear pages that earn attention.",
    items: ["Content briefs", "Service pages", "Editorial systems"],
  },
  {
    title: "Performance website development",
    copy: "Fast, responsive, server-rendered websites designed around accessibility, conversion paths, clean code, and long-term maintainability.",
    items: ["Next.js builds", "Core Web Vitals", "Mobile UX"],
  },
  {
    title: "Automation and integrations",
    copy: "Practical workflows that connect lead capture, CRM tools, analytics, reporting, and internal operations without fragile manual work.",
    items: ["Lead routing", "CRM workflows", "Reporting setup"],
  },
];

const method = [
  {
    title: "Research",
    copy: "Understand the audience, competitors, search landscape, service economics, and technical constraints before design decisions are made.",
  },
  {
    title: "Structure",
    copy: "Shape the navigation, page hierarchy, internal links, and content model so users and crawlers can understand the site quickly.",
  },
  {
    title: "Build",
    copy: "Implement server-rendered pages, optimized WebP assets, semantic HTML, metadata, schema, and reliable deployment workflows.",
  },
  {
    title: "Improve",
    copy: "Use analytics, search data, conversion signals, and content gaps to refine the site after launch instead of treating launch as the finish line.",
  },
];

const standards = [
  "Server-rendered or statically generated pages for crawlable content",
  "Readable semantic HTML with logical headings and accessible navigation",
  "Optimized WebP imagery with useful alt text and disciplined file sizes",
  "Metadata, Open Graph, robots.txt, sitemap.xml, JSON-LD, and llms.txt",
  "Responsive layouts tested for mobile scanning and desktop comparison",
  "Clean component structure that stays easy to revise as the brand matures",
];

const audiences = [
  "Service businesses improving lead quality",
  "Marketing teams that need technical execution",
  "Founders building a credible digital presence",
  "Consultants and agencies needing scalable content systems",
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
      <header className="site-header" aria-label="Mbase Digital site header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Mbase Digital home">
            <span className="brand-mark" aria-hidden="true">M</span>
            <span className="brand-name">Mbase Digital</span>
          </a>
          <nav className="nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
          </nav>
          <a className="header-cta" href="#contact">Start</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Digital strategy, SEO, content, web, and automation</p>
            <h1>Growth-ready websites built with research, creativity, and technical discipline.</h1>
            <p className="hero-lede">
              Mbase Digital helps businesses turn expertise into fast, useful, search-ready websites and content
              systems that are easy for people, Google, and AI research tools to understand.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="#contact">Plan a project</a>
              <a className="button secondary" href="#services">View services</a>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="/images/mbase-digital-hero.webp"
              alt="Clean digital strategy workspace showing analytics, content research, and technical planning"
              width={1600}
              height={900}
              priority
              sizes="(max-width: 980px) 100vw, 46vw"
            />
            <div className="hero-strip" aria-label="Core website priorities">
              <span>SSR pages</span>
              <span>WebP media</span>
              <span>Schema-ready</span>
            </div>
          </div>
        </section>

        <section className="section trust-strip" aria-label="Core strengths">
          <p>Research-led</p>
          <p>Technically sound</p>
          <p>Search accessible</p>
          <p>Mobile responsive</p>
        </section>

        <section className="section intro" aria-labelledby="intro-title">
          <div>
            <p className="eyebrow">Positioning</p>
            <h2 id="intro-title">A practical partner for brands that need strategy and execution connected.</h2>
          </div>
          <div className="intro-copy">
            <p>
              The site is designed around a simple business promise: combine creative thinking, logical structure,
              research depth, and technical ability into digital assets that are useful from the first visit.
            </p>
            <p>
              Every major message is real text, every section has a clear purpose, and the codebase is prepared for
              future service pages, case studies, articles, and brand assets once the final identity is approved.
            </p>
          </div>
        </section>

        <section className="section" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2 id="services-title">Focused services for visibility, credibility, and conversion.</h2>
            <p>
              Mbase Digital is structured for businesses that want a clean website, stronger search presence, sharper
              content, and connected marketing operations without unnecessary complexity.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="method-band" id="method" aria-labelledby="method-title">
          <div className="section method-inner">
            <div className="section-heading">
              <p className="eyebrow">Method</p>
              <h2 id="method-title">A repeatable workflow that keeps design, content, and engineering aligned.</h2>
            </div>
            <ol className="method-list">
              {method.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section split-section" aria-labelledby="audience-title">
          <div>
            <p className="eyebrow">Who it serves</p>
            <h2 id="audience-title">Built for teams that care about quality traffic, clear messaging, and reliable systems.</h2>
          </div>
          <ul className="audience-list">
            {audiences.map((audience) => (
              <li key={audience}>{audience}</li>
            ))}
          </ul>
        </section>

        <section className="section standards" id="standards" aria-labelledby="standards-title">
          <div className="standards-copy">
            <p className="eyebrow">Build standards</p>
            <h2 id="standards-title">Fast, readable, accessible, and prepared for organic discovery.</h2>
            <p>
              The implementation favors server-first rendering, clean HTML, optimized media, and durable site
              foundations. Client-side code is reserved for interactions that genuinely improve the experience.
            </p>
          </div>
          <ul className="proof-list">
            {standards.map((standard) => (
              <li key={standard}>{standard}</li>
            ))}
          </ul>
        </section>

        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Next step</p>
            <h2 id="contact-title">Ready for logo references, service expansion, and launch polish.</h2>
            <p>
              The current build uses a temporary brand mark so development can continue. Once the final logo direction
              is chosen, the header, favicon, social preview, colors, and supporting brand assets can be refined as one
              connected system.
            </p>
          </div>
          <div className="contact-panel">
            <p>Project inquiries</p>
            <a className="button primary" href="mailto:hello@mbasedigital.com">hello@mbasedigital.com</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <a className="brand footer-brand" href="#top" aria-label="Mbase Digital home">
              <span className="brand-mark" aria-hidden="true">M</span>
              <span className="brand-name">Mbase Digital</span>
            </a>
            <p>Digital strategy, search-ready websites, content systems, and technical marketing workflows.</p>
          </div>
          <nav aria-label="Footer navigation">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
