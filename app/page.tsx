import Image from "next/image";

const serviceMenu = [
  "SEO & AI Visibility",
  "Website Development",
  "Content Strategy",
  "Marketing Automation",
  "Analytics & Reporting",
];

const industryMenu = [
  "SaaS & Technology",
  "Finance & Investing",
  "B2B Services",
  "AI & Automation",
  "Digital Products",
];

const services = [
  {
    title: "SEO and AI visibility",
    copy: "Build crawlable, structured, answer-ready pages that help buyers, search engines, and AI research tools understand your expertise.",
    items: ["Technical SEO audits", "Entity and schema planning", "Topical authority maps"],
  },
  {
    title: "High-performance websites",
    copy: "Design and develop fast, server-rendered websites with strong UX, clean code, clear messaging, and measurable conversion paths.",
    items: ["Next.js development", "Mobile-first UX", "Core Web Vitals"],
  },
  {
    title: "Content growth systems",
    copy: "Turn research, buyer intent, and service knowledge into crisp service pages, blog systems, briefs, and conversion-focused content.",
    items: ["Service page strategy", "Editorial workflows", "Content briefs"],
  },
  {
    title: "Automation and integrations",
    copy: "Connect lead capture, CRM workflows, reporting, analytics, and internal operations so marketing work becomes easier to scale.",
    items: ["CRM workflows", "Lead routing", "Reporting dashboards"],
  },
];

const metrics = [
  { value: "3.2x", label: "Avg ROI target for growth programs" },
  { value: "50+", label: "Companies and digital teams supported" },
  { value: "12+", label: "Years of industry experience" },
];

const companies = [
  "Finology.in",
  "Tokenmetrics.com",
  "Leadangel.com",
  "Aigenthix.com",
  "Botsfolio.com",
];

const industries = [
  {
    title: "Finance and investing",
    copy: "Content, SEO, and conversion journeys for education, analysis, portfolio, and investing platforms.",
  },
  {
    title: "AI and automation",
    copy: "Clear positioning and technical pages for tools that need buyers to understand complex capabilities quickly.",
  },
  {
    title: "B2B software and services",
    copy: "Demand-focused websites, service pages, and content systems for teams with long sales cycles and informed buyers.",
  },
];

const method = [
  "Research the market, audience, competitors, search demand, and technical constraints.",
  "Map the site structure, page purpose, navigation, content model, and conversion paths.",
  "Build server-first pages with optimized WebP assets, semantic HTML, metadata, schema, and clean code.",
  "Improve with analytics, search data, user feedback, content gaps, and performance checks.",
];

const reviews = [
  {
    quote:
      "Mbase Digital brings the rare mix of strategic thinking and technical execution that growth-focused teams need.",
    name: "Growth Lead",
    role: "B2B technology company",
  },
  {
    quote:
      "The work is structured, practical, and focused on outcomes: clearer pages, cleaner systems, and better visibility.",
    name: "Founder",
    role: "Digital product business",
  },
  {
    quote:
      "A strong partner for connecting content, search, automation, and website execution into one reliable operating system.",
    name: "Marketing Director",
    role: "Professional services brand",
  },
];

const blogs = [
  {
    title: "How server-rendered websites help search engines and AI tools understand your business",
    category: "Technical SEO",
    date: "May 2026",
  },
  {
    title: "Building service pages that explain value clearly and convert informed buyers",
    category: "Content Strategy",
    date: "May 2026",
  },
  {
    title: "A practical checklist for fast, accessible, growth-ready website launches",
    category: "Website Development",
    date: "May 2026",
  },
];

const auditBenefits = [
  {
    title: "Find visibility gaps",
    copy: "See where technical SEO, content structure, and AI-search readability are limiting discovery.",
  },
  {
    title: "Improve conversion paths",
    copy: "Identify the sections, CTAs, and page flow issues that make serious buyers hesitate.",
  },
  {
    title: "Get clear next steps",
    copy: "Receive practical recommendations for website, content, SEO, and automation improvements.",
  },
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

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div className="nav-dropdown">
      <button type="button" aria-haspopup="true">
        {label}
        <span aria-hidden="true">▾</span>
      </button>
      <div className="dropdown-panel" role="menu">
        {items.map((item) => (
          <a href={label === "Services" ? "#services" : "#industries"} key={item} role="menuitem">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

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
            <Dropdown label="Services" items={serviceMenu} />
            <Dropdown label="Industry" items={industryMenu} />
            <a href="#blog">Blog</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
          </nav>
          <a className="header-cta" href="#contact">Get a growth plan</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Digital growth, SEO, AI visibility, websites, and automation</p>
            <h1>Turn your website into a clear, fast, search-ready growth system.</h1>
            <p className="hero-lede">
              Mbase Digital combines creativity, logic, research, and technical execution to build professional
              websites, content systems, and digital workflows that help serious buyers find, understand, and trust you.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="#contact">Get my free growth plan</a>
              <a className="button secondary" href="#services">Explore services</a>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="/images/mbase-digital-hero.webp"
              alt="Professional digital strategy workspace showing analytics, research, interface planning, and technical execution"
              width={1600}
              height={900}
              priority
              sizes="(max-width: 980px) 100vw, 46vw"
            />
            <div className="hero-strip" aria-label="Core website priorities">
              <span>Server-rendered</span>
              <span>WebP optimized</span>
              <span>Schema-ready</span>
            </div>
          </div>
        </section>

        <section className="section metrics-section" aria-label="Success metrics">
          {metrics.map((metric) => (
            <div className="metric-card" key={metric.value}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section className="section logo-section" aria-labelledby="logos-title">
          <p id="logos-title">Trusted by growing companies across the world</p>
          <div className="company-logos" aria-label="Trusted company logos">
            {companies.map((company) => (
              <span key={company}>{company}</span>
            ))}
          </div>
        </section>

        <section className="section intro" id="about" aria-labelledby="about-title">
          <div>
            <p className="eyebrow">About Mbase Digital</p>
            <h2 id="about-title">A practical growth partner for teams that need strategy and implementation together.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Many websites look polished but fail at the basics: unclear messaging, weak technical SEO, slow pages,
              thin content, and disconnected workflows. Mbase Digital fixes those foundations first.
            </p>
            <p>
              The work is built around useful content, clean structure, measurable outcomes, and reliable execution so
              the website can support search visibility, buyer confidence, and long-term growth.
            </p>
          </div>
        </section>

        <section className="section" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2 id="services-title">Growth services designed around visibility, trust, and conversion.</h2>
            <p>
              Each service connects research, content, design, and engineering so the website is not just present
              online; it becomes easier to discover, easier to understand, and easier to act on.
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

        <section className="interactive-band" aria-labelledby="interactive-title">
          <div className="section interactive-inner">
            <div>
              <p className="eyebrow">How growth compounds</p>
              <h2 id="interactive-title">One system connects content, search, website performance, and operations.</h2>
            </div>
            <div className="growth-system" aria-label="Mbase Digital growth system">
              <span>Research</span>
              <span>Content</span>
              <span>SEO</span>
              <span>Website</span>
              <span>Automation</span>
              <span>Reporting</span>
            </div>
          </div>
        </section>

        <section className="section" id="industries" aria-labelledby="industries-title">
          <div className="section-heading">
            <p className="eyebrow">Industries</p>
            <h2 id="industries-title">Built for technical, content-heavy, and trust-driven businesses.</h2>
          </div>
          <div className="industry-grid">
            {industries.map((industry) => (
              <article className="industry-card" key={industry.title}>
                <h3>{industry.title}</h3>
                <p>{industry.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="method-band" aria-labelledby="method-title">
          <div className="section method-inner">
            <div className="section-heading">
              <p className="eyebrow">Method</p>
              <h2 id="method-title">A repeatable process from research to measurable improvement.</h2>
            </div>
            <ol className="method-list">
              {method.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section reviews-section" aria-labelledby="reviews-title">
          <div className="section-heading">
            <p className="eyebrow">Client reviews</p>
            <h2 id="reviews-title">Trusted for practical thinking, clear execution, and reliable growth foundations.</h2>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.quote}>
                <p>“{review.quote}”</p>
                <strong>{review.name}</strong>
                <span>{review.role}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section standards" aria-labelledby="standards-title">
          <div className="standards-copy">
            <p className="eyebrow">Build standards</p>
            <h2 id="standards-title">Fast, accessible, optimized, and readable by search engines and LLMs.</h2>
            <p>
              Pages are planned around server-rendered content, semantic headings, compressed WebP assets, useful alt
              text, structured data, sitemap, robots.txt, and llms.txt.
            </p>
          </div>
          <div className="standards-panel">
            <strong>Performance-first foundations</strong>
            <span>SSR/static rendering</span>
            <span>Responsive layouts</span>
            <span>SEO metadata</span>
            <span>Accessible navigation</span>
          </div>
        </section>

        <section className="section blog-section" id="blog" aria-labelledby="blog-title">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Latest published blogs</p>
            <h2 id="blog-title">Insights for better websites, content, search, and growth systems.</h2>
          </div>
          <div className="blog-grid">
            {blogs.map((blog) => (
              <article className="blog-card" key={blog.title}>
                <span>{blog.category}</span>
                <h3>{blog.title}</h3>
                <p>{blog.date}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lead-magnet" aria-labelledby="audit-title">
          <div className="section lead-magnet-inner">
            <div className="audit-copy">
              <p className="eyebrow">Free digital growth audit</p>
              <h2 id="audit-title">Get a clear view of what is holding your website back.</h2>
              <p>
                Share your website and main growth challenge. Mbase Digital will review the core signals that affect
                search visibility, user trust, page performance, and conversion readiness.
              </p>
              <div className="audit-benefits">
                {auditBenefits.map((benefit) => (
                  <article key={benefit.title}>
                    <span aria-hidden="true">✓</span>
                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <form
              className="audit-form"
              action="mailto:hello@mbasedigital.com"
              method="post"
              encType="text/plain"
            >
              <h3>Claim your free website & SEO review</h3>
              <label>
                Name
                <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
              </label>
              <label>
                Email address
                <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
              </label>
              <label>
                Website URL
                <input name="website" type="url" placeholder="https://example.com" required />
              </label>
              <label>
                Main challenge
                <textarea name="challenge" rows={4} placeholder="Tell us what you want to improve" />
              </label>
              <button className="button primary" type="submit">Start my free audit</button>
            </form>
          </div>
        </section>

        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Contact Us</p>
            <h2 id="contact-title">Ready to build a sharper digital growth foundation?</h2>
            <p>
              Share your goals, current website, competitors, and priority services. Mbase Digital can turn that into
              a practical plan for site structure, content, SEO, development, and automation.
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
            <p>Digital strategy, SEO, AI visibility, high-performance websites, content systems, and automation.</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#services">Services</a>
            <a href="#industries">Industry</a>
            <a href="#blog">Blog</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
