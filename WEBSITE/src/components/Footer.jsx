export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__cta-box">
        <h2 className="footer__cta-title">Ready to spark your workflow?</h2>
        <p className="footer__cta-sub">Start free. No credit card required. Cancel anytime.</p>
        <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your work email"
            className="footer__input"
          />
          <button type="submit" className="btn btn--primary">Get Early Access</button>
        </form>
      </div>

      <div className="footer__main">
        <div className="footer__brand">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">NovaSpark</span>
          <p className="footer__tagline">Built for builders. Loved by teams.</p>
          <div className="footer__socials">
            {["𝕏", "in", "gh", "yt"].map((s) => (
              <a href="#" className="social-btn" key={s}>{s}</a>
            ))}
          </div>
        </div>

        {[
          {
            heading: "Product",
            links: ["Features", "Integrations", "Pricing", "Changelog"],
          },
          {
            heading: "Company",
            links: ["About", "Blog", "Careers", "Press"],
          },
          {
            heading: "Support",
            links: ["Docs", "Community", "Status", "Contact"],
          },
        ].map((col) => (
          <div className="footer__col" key={col.heading}>
            <h4 className="footer__col-heading">{col.heading}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <p>© 2025 NovaSpark, Inc. All rights reserved.</p>
        <div className="footer__legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
