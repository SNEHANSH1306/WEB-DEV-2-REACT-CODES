export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg-orbs">
        <div className="orb orb--1"></div>
        <div className="orb orb--2"></div>
        <div className="orb orb--3"></div>
      </div>

      <div className="hero__content">
        <div className="hero__badge">🚀 Now in Public Beta</div>
        <h1 className="hero__title">
          Build Faster.<br />
          <span className="hero__title--accent">Ship Smarter.</span>
        </h1>
        <p className="hero__subtitle">
          NovaSpark supercharges your workflow with AI-powered tools, seamless
          integrations, and a team-first platform built for the modern builder.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">Start for Free →</a>
          <a href="#features" className="btn btn--ghost">See How It Works</a>
        </div>
        <div className="hero__stats">
          {[["12K+", "Developers"], ["98%", "Uptime"], ["4.9★", "Rating"]].map(([val, label]) => (
            <div className="hero__stat" key={label}>
              <span className="hero__stat-value">{val}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__card hero__card--main">
          <div className="card-dot card-dot--green"></div>
          <p className="card-label">Live Deployment</p>
          <p className="card-value">v2.4.1 → Production</p>
          <div className="card-progress"><div className="card-progress-bar"></div></div>
        </div>
        <div className="hero__card hero__card--side">
          <div className="card-dot card-dot--blue"></div>
          <p className="card-label">AI Suggestions</p>
          <p className="card-value">3 optimizations found</p>
        </div>
        <div className="hero__card hero__card--bottom">
          <p className="card-label">⚡ Build time</p>
          <p className="card-value">1.2s (-43%)</p>
        </div>
      </div>
    </section>
  );
}
