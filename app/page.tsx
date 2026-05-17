const serviceColumns = [
  { title: "SEO Growth", links: ["SEO Strategy", "Technical SEO", "On-Page SEO", "Local SEO"] },
  { title: "Content & Social", links: ["Content Writing", "Social Media Marketing", "Copywriting", "Content Calendar"] },
  { title: "Web & Automation", links: ["Website Development", "AI Automation Setup", "Landing Pages", "CRM Workflows"] },
  { title: "Consulting", links: ["Digital Marketing Consulting", "Analytics", "Conversion Strategy", "Growth Roadmap"] },
];

const industryColumns = [
  { title: "High-Trust Markets", links: ["Finance", "Investing", "Professional Services", "Education"] },
  { title: "Digital Products", links: ["SaaS", "AI Tools", "Automation Products", "Marketplaces"] },
  { title: "Growth Teams", links: ["Startups", "Agencies", "B2B Services", "Creator Businesses"] },
];

const metrics = [
  { value: "3.2x", label: "Avg ROI focus" },
  { value: "50+", label: "Companies supported" },
  { value: "12+", label: "Years experience" },
];

const companies = ["Finology.in", "Tokenmetrics.com", "Leadangel.com", "Aigenthix.com", "Botsfolio.com"];

const services = [
  {
    icon: "SEO",
    title: "Search Engine Optimization",
    copy: "Improve rankings, technical health, and organic visibility with SEO systems built for people, Google, and AI discovery.",
    points: ["Technical audits", "Topical maps", "Schema planning"],
  },
  {
    icon: "SMM",
    title: "Social Media Marketing",
    copy: "Build a stronger content presence across social channels with campaigns that support awareness, trust, and leads.",
    points: ["Content calendars", "Campaign planning", "Audience growth"],
  },
  {
    icon: "CW",
    title: "Content Writing",
    copy: "Create crisp service pages, blogs, landing copy, and educational content that explains value and supports conversion.",
    points: ["SEO blogs", "Landing copy", "Service pages"],
  },
  {
    icon: "WEB",
    title: "Website Development",
    copy: "Launch fast, responsive, server-rendered websites with clean UX, strong CTAs, and reliable technical foundations.",
    points: ["Next.js builds", "Landing pages", "Mobile UX"],
  },
  {
    icon: "AI",
    title: "AI Automation Setup",
    copy: "Connect tools, data, and workflows so teams can reduce manual tasks and respond to leads faster.",
    points: ["CRM flows", "AI assistants", "Workflow setup"],
  },
  {
    icon: "DM",
    title: "Digital Marketing Consulting",
    copy: "Get a clear growth roadmap across SEO, content, website, analytics, social, and automation priorities.",
    points: ["Growth audits", "Channel strategy", "Reporting plans"],
  },
];

const whyChoose = [
  {
    title: "Growth systems built for execution",
    copy: "We do not stop at recommendations. We plan, launch, optimize, and improve the digital systems that create business results.",
  },
  {
    title: "AI-powered marketing workflows",
    copy: "We use automation, analytics, and AI-assisted processes to improve speed, content quality, targeting, and campaign consistency.",
  },
  {
    title: "Full-funnel digital expertise",
    copy: "SEO, social, content, websites, CRM, and conversion work together instead of operating as disconnected activities.",
  },
  {
    title: "Focused on ROI, not vanity metrics",
    copy: "Every strategy is shaped around leads, revenue, qualified traffic, buyer trust, and long-term scalability.",
  },
];

const process = [
  {
    step: "01",
    label: "Week 1-2",
    title: "Audit & Quick Wins",
    copy: "Review the website, SEO, content, tracking, and conversion gaps to find immediate growth opportunities.",
    tags: ["SEO", "CRO", "Analytics"],
  },
  {
    step: "02",
    label: "Week 3-4",
    title: "90-Day Growth Plan",
    copy: "Create a prioritized roadmap around the fastest path to better visibility, trust, and qualified leads.",
    tags: ["Roadmap", "Content", "Funnels"],
  },
  {
    step: "03",
    label: "Month 2",
    title: "Launch & Optimize",
    copy: "Deploy service pages, campaigns, automation, landing pages, and tests with clean tracking in place.",
    tags: ["Website", "Social", "Automation"],
  },
  {
    step: "04",
    label: "Month 3",
    title: "Scale What Converts",
    copy: "Measure what works, refine weak points, and scale the channels that generate real business outcomes.",
    tags: ["ROI", "Leads", "Scale"],
  },
];

const blogs = [
  {
    category: "SEO Strategy",
    meta: "5 min read",
    title: "How SEO Helps Small Businesses Build Compounding Growth",
    copy: "A practical look at technical foundations, content structure, and authority signals that improve discovery.",
  },
  {
    category: "Website Design",
    meta: "6 min read",
    title: "Website Design Mistakes That Reduce Conversions",
    copy: "Learn the layout, messaging, speed, and CTA problems that make visitors leave before they act.",
  },
  {
    category: "AI Automation",
    meta: "4 min read",
    title: "Where AI Automation Fits in a Modern Marketing System",
    copy: "How to use AI workflows for lead handling, reporting, content operations, and faster follow-up.",
  },
];

const footerGroups = [
  { title: "Services", links: ["SEO", "Social Media", "Content Writing", "Website Development", "AI Automation", "Consulting"] },
  { title: "Industries", links: ["Finance", "SaaS", "B2B Services", "AI Tools", "Digital Products", "Education"] },
  { title: "Resources", links: ["Blog", "Case Studies", "Guides", "Free Audit", "FAQs"] },
  { title: "Company", links: ["About Us", "Contact Us", "Portfolio", "Testimonials", "Privacy Policy"] },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Mbase Digital",
  url: "https://mbasedigital.com",
  description:
    "Mbase Digital builds growth-ready websites, SEO systems, content, social marketing, AI automation, and digital consulting workflows.",
  areaServed: "Worldwide",
  serviceType: [
    "Search Engine Optimization",
    "Social Media Marketing",
    "Content Writing",
    "Website Development",
    "AI Automation Setup",
    "Digital Marketing Consulting",
  ],
};

function MegaMenu({
  label,
  columns,
}: {
  label: string;
  columns: { title: string; links: string[] }[];
}) {
  return (
    <details className="mega-menu">
      <summary>
        {label}
        <span aria-hidden="true">⌄</span>
      </summary>
      <div className="mega-panel">
        {columns.map((column) => (
          <div className="mega-card" key={column.title}>
            <span className="mega-icon" aria-hidden="true">{column.title.slice(0, 2)}</span>
            <strong>{column.title}</strong>
            {column.links.map((link) => (
              <a href={label === "Services" ? "#services" : "#industries"} key={link}>{link}</a>
            ))}
          </div>
        ))}
      </div>
    </details>
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
            <span>
              <strong>Mbase Digital</strong>
              <small>Marketing · Management · Mentorship</small>
            </span>
          </a>

          <nav className="nav" aria-label="Primary navigation">
            <MegaMenu label="Services" columns={serviceColumns} />
            <MegaMenu label="Industries" columns={industryColumns} />
            <a href="#about">About Us</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact Us</a>
          </nav>

          <a className="header-cta" href="#contact">Talk To An Expert ↗</a>
        </div>
      </header>

      <main id="top">
        <section className="hero dark-section">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="hero-badge">AI-powered growth partner</p>
              <h1>Turn search, content, and automation into growth.</h1>
              <p>
                Mbase Digital helps brands build fast websites, sharper content, stronger SEO, and practical automation
                systems for how buyers discover, compare, and choose today.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Talk To An Expert ↗</a>
                <a className="button button-ghost" href="#services">Explore Services</a>
              </div>
              <div className="hero-metrics" aria-label="Success metrics">
                {metrics.map((metric) => (
                  <div key={metric.value}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ai-card" aria-label="AI search recommendation preview">
              <div className="ai-card-top"><span></span><span></span><span></span></div>
              <p className="query">best digital growth partner for scaling brands</p>
              <div className="answer-card">
                <small>#1 Growth Strategy Match</small>
                <h2>Mbase Digital</h2>
                <p>Recommended for SEO, content, website development, AI automation, and conversion-focused strategy.</p>
              </div>
              <div className="signal-grid">
                <span>SEO</span><span>Content</span><span>Web</span><span>AI Ops</span>
              </div>
            </div>
          </div>

          <div className="hero-trust">
            <p>Trusted by growing companies across the world</p>
            <div>
              {companies.map((company) => <span key={company}>{company}</span>)}
            </div>
          </div>
        </section>

        <section className="section services-section" id="services" aria-labelledby="services-title">
          <div className="section-title split-title">
            <div>
              <p className="eyebrow">Our Services</p>
              <h2 id="services-title">Growth services built to connect and convert.</h2>
            </div>
            <a className="button button-outline" href="#contact">View All Services ↗</a>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-visual" aria-hidden="true">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <ul>
                  {service.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section why-section" aria-labelledby="why-title">
          <div className="why-copy">
            <p className="pill-label">Why Mbase Digital ↗</p>
            <h2 id="why-title">We build digital growth engines.</h2>
            <p>
              Strategy, execution, content, automation, and measurement work together so your website becomes a
              dependable growth asset.
            </p>
            <a className="button button-primary" href="#contact">Talk To An Expert ↗</a>
          </div>

          <div className="why-accordion">
            {whyChoose.map((item, index) => (
              <details key={item.title} open={index === 0}>
                <summary><span>{item.title}</span><b aria-hidden="true"></b></summary>
                <p>{item.copy}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section process-section" aria-labelledby="process-title">
          <div className="section-title centered">
            <p className="eyebrow">Growth Process with Mbase Digital</p>
            <h2 id="process-title">Your 90-day digital growth sprint.</h2>
            <p>A focused execution path to uncover quick wins, launch faster, and scale what converts.</p>
          </div>

          <div className="process-card">
            {process.map((item) => (
              <article className="process-step" key={item.step}>
                <div className="process-top"><span>{item.step}</span><small>{item.label}</small></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <div className="tag-row">{item.tags.map((tag) => <b key={tag}>{tag}</b>)}</div>
              </article>
            ))}
          </div>
          <div className="center-cta">
            <a className="button button-primary" href="#contact">Start Your Growth Plan ↗</a>
          </div>
        </section>

        <section className="section contact-section dark-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="hero-badge">Contact Mbase Digital</p>
            <h2 id="contact-title">Ready to build a sharper growth system?</h2>
            <p>
              Tell us about your website, goals, and current challenge. We will review the opportunity and suggest the
              clearest next steps.
            </p>
            <div className="contact-points">
              <article><span>01</span><strong>Growth-focused strategy</strong><p>Clear priorities across SEO, content, website, social, and automation.</p></article>
              <article><span>02</span><strong>Performance tracking</strong><p>Recommendations tied to traffic quality, leads, conversion, and ROI.</p></article>
              <article><span>03</span><strong>One clear conversion path</strong><p>This single form serves as the consultation request and lead magnet.</p></article>
            </div>
          </div>

          <form className="contact-form" action="mailto:hello@mbasedigital.com" method="post" encType="text/plain">
            <h3>Talk To An Expert</h3>
            <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
            <label>Email ID<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
            <label>Business Website<input name="website" type="url" placeholder="https://yourwebsite.com" required /></label>
            <label>
              Service Interest
              <select name="service" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Search Engine Optimization</option>
                <option>Social Media Marketing</option>
                <option>Content Writing</option>
                <option>Website Development</option>
                <option>AI Automation Setup</option>
                <option>Digital Marketing Consulting</option>
              </select>
            </label>
            <label>Message<textarea name="message" rows={5} placeholder="Tell us what you want to improve" required /></label>
            <button className="button button-primary" type="submit">Request a Free Consultation ↗</button>
            <small>No spam. We will only use your details to respond to your request.</small>
          </form>
        </section>

        <section className="section blog-section" id="blog" aria-labelledby="blog-title">
          <div className="section-title centered">
            <p className="pill-label">Latest Blog Posts</p>
            <h2 id="blog-title">Trending blogs and articles.</h2>
            <p>Practical thinking for websites, content, SEO, automation, and digital growth.</p>
          </div>
          <div className="blog-grid">
            {blogs.map((blog, index) => (
              <article className="blog-card" key={blog.title}>
                <div className="blog-image" aria-hidden="true"><span>{index === 0 ? "SEO" : index === 1 ? "UX" : "AI"}</span></div>
                <div className="blog-content">
                  <small>{blog.category} · {blog.meta}</small>
                  <h3>{blog.title}</h3>
                  <p>{blog.copy}</p>
                  <a href="#contact">Read More →</a>
                </div>
              </article>
            ))}
          </div>
          <div className="blog-cta">
            <p>Need a strategy like this for your business?</p>
            <a className="button button-outline" href="#contact">Book a Free Consultation</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand-block">
            <a className="brand footer-brand" href="#top" aria-label="Mbase Digital home">
              <span className="brand-mark" aria-hidden="true">M</span>
              <span><strong>Mbase Digital</strong><small>Marketing, Management and Mentorship</small></span>
            </a>
            <p>We help businesses grow online through search-ready websites, SEO, content, automation, and practical digital strategy.</p>
            <a className="footer-email" href="mailto:hello@mbasedigital.com">hello@mbasedigital.com</a>
            <div className="social-row" aria-label="Social links">
              <a href="#contact">LinkedIn</a><a href="#contact">Instagram</a><a href="#contact">Facebook</a>
            </div>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title + " links"}>
              <h2>{group.title}</h2>
              {group.links.map((link) => (
                <a href={link === "Contact Us" || link === "Free Audit" ? "#contact" : "#top"} key={link}>{link}</a>
              ))}
            </nav>
          ))}
        </div>
        <div className="footer-bottom">
          <p>© 2026 Mbase Digital. All rights reserved.</p>
          <p>Growth systems for brands that care about clarity, performance, and measurable results.</p>
        </div>
      </footer>
    </>
  );
}
