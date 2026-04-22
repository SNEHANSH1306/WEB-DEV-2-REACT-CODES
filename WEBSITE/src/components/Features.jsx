const features = [
  {
    icon: "🤖",
    title: "AI Code Review",
    desc: "Instantly get smart suggestions, catch bugs early, and ship cleaner code — all powered by cutting-edge AI.",
    tag: "Popular",
  },
  {
    icon: "⚡",
    title: "Lightning Deploys",
    desc: "Push to production in seconds with zero-config pipelines, rollback support, and global edge delivery.",
    tag: "Fast",
  },
  {
    icon: "🔗",
    title: "150+ Integrations",
    desc: "Connect GitHub, Slack, Jira, Figma, and more in one click. Your tools, your workflow, fully unified.",
    tag: "Flexible",
  },
  {
    icon: "🛡️",
    title: "Enterprise Security",
    desc: "SOC2 compliant, end-to-end encrypted, with SSO, audit logs, and role-based access out of the box.",
    tag: "Secure",
  },
  {
    icon: "📊",
    title: "Real-Time Analytics",
    desc: "Monitor performance, error rates, and user flows live. Make data-driven decisions with beautiful dashboards.",
    tag: "Insights",
  },
  {
    icon: "🤝",
    title: "Team Collaboration",
    desc: "Comment, review, and co-edit in real time. Keep everyone aligned without leaving your workspace.",
    tag: "Teamwork",
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="section-header">
        <span className="section-tag">Why NovaSpark</span>
        <h2 className="section-title">Everything your team needs</h2>
        <p className="section-subtitle">
          One platform to plan, build, deploy, and monitor — no duct tape required.
        </p>
      </div>

      <div className="features__grid">
        {features.map((f) => (
          <div className="feature-card" key={f.title}>
            <div className="feature-card__icon">{f.icon}</div>
            <span className="feature-card__tag">{f.tag}</span>
            <h3 className="feature-card__title">{f.title}</h3>
            <p className="feature-card__desc">{f.desc}</p>
            <a href="#contact" className="feature-card__link">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
