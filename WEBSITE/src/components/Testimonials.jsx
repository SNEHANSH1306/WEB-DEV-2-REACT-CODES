const testimonials = [
  {
    name: "Aisha Patel",
    role: "CTO @ Stackly",
    avatar: "AP",
    color: "#f97316",
    text: "NovaSpark cut our deployment time by 60%. The AI review catches issues before they reach production — it's like having a senior dev on call 24/7.",
    stars: 5,
  },
  {
    name: "Marcus Chen",
    role: "Lead Engineer @ Driftly",
    avatar: "MC",
    color: "#06b6d4",
    text: "We evaluated 6 platforms. NovaSpark was the only one that felt designed for how developers actually work. The integrations are seamless.",
    stars: 5,
  },
  {
    name: "Sara Novak",
    role: "Founder @ Lunara",
    avatar: "SN",
    color: "#a855f7",
    text: "Went from idea to live product in 3 days. The team collaboration features kept us in sync without any overhead. Absolutely love it.",
    stars: 5,
  },
  {
    name: "Rohan Mehta",
    role: "DevOps @ Fintrek",
    avatar: "RM",
    color: "#10b981",
    text: "The analytics dashboard is stunning and actually useful. I can spot anomalies in seconds. Nothing else comes close.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-header">
        <span className="section-tag">Loved by Builders</span>
        <h2 className="section-title">Don't take our word for it</h2>
        <p className="section-subtitle">
          Join thousands of developers and teams who ship faster with NovaSpark.
        </p>
      </div>

      <div className="testimonials__grid">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.name}>
            <div className="testimonial-card__stars">
              {"★".repeat(t.stars)}
            </div>
            <p className="testimonial-card__text">"{t.text}"</p>
            <div className="testimonial-card__author">
              <div
                className="testimonial-card__avatar"
                style={{ background: t.color }}
              >
                {t.avatar}
              </div>
              <div>
                <p className="testimonial-card__name">{t.name}</p>
                <p className="testimonial-card__role">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
