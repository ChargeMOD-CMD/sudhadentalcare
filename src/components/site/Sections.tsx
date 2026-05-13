import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

export function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <motion.div {...fade} className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </div>
      <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </motion.div>
  );
}

export function About() {
  const pillars = [
    { t: "Patient-First Comfort", d: "Calming environments and pain-minimised treatments centered on you." },
    { t: "Precision Dentistry", d: "Digital diagnostics and AI-assisted planning for predictable outcomes." },
    { t: "Cosmetic Mastery", d: "Smile design crafted with cinematic detail and clinical excellence." },
  ];
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="About the Clinic"
          title={<>Premium dentistry, <span className="text-gradient">human warmth.</span></>}
          sub="Sudha Dental Care is a future-forward dental healthcare clinic in Chennai delivering advanced restorative, cosmetic and preventive dentistry through compassion and modern technology."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.t}
              {...fade}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              data-cursor-hover
              className="group relative overflow-hidden rounded-2xl border border-border bg-card-gradient p-7 shadow-card transition-all hover:border-primary/40"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-gradient text-primary-foreground">
                  0{i + 1}
                </div>
                <h3 className="font-display text-xl font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    cat: "General Dentistry",
    items: ["Dental Check-up", "Teeth Cleaning & Scaling", "Tooth Extraction", "Fillings & Restorations", "Preventive Oral Care"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M8 4c-2 0-4 2-4 5 0 4 2 6 2 9 0 1 1 2 2 2s2-1 2-3v-2c0-1 .5-2 2-2s2 1 2 2v2c0 2 1 3 2 3s2-1 2-2c0-3 2-5 2-9 0-3-2-5-4-5-1.5 0-2.5.5-4 1-1.5-.5-2.5-1-4-1z"/></svg>
    ),
  },
  {
    cat: "Cosmetic Dentistry",
    items: ["Teeth Whitening", "Smile Design", "Dental Veneers", "Cosmetic Smile Correction"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l2.4 5 5.6.8-4 3.9 1 5.5L12 14.8 7 17.2l1-5.5-4-3.9 5.6-.8z"/></svg>
    ),
  },
  {
    cat: "Advanced Dental Care",
    items: ["Root Canal Treatment", "Dental Implants", "Braces & Aligners", "Crowns & Bridges"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Dental Services"
          title={<>Treatment pathways, <span className="text-gradient">precision-built.</span></>}
          sub="From preventive check-ups to full smile transformations — every treatment is engineered around your comfort."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.cat}
              {...fade}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              data-cursor-hover
              className="group relative overflow-hidden rounded-2xl border border-border bg-card-gradient p-8 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-highlight/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary glow-soft">
                  <span className="h-7 w-7">{s.icon}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold">{s.cat}</h3>
                <ul className="mt-5 space-y-2.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AISmile() {
  const insights = [
    { l: "Alignment", v: 92 },
    { l: "Whiteness", v: 78 },
    { l: "Gum Health", v: 88 },
    { l: "Symmetry", v: 95 },
  ];
  return (
    <section id="ai-smile" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)/0.08,_transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div {...fade}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-primary">
              AI Smile Analytics
            </div>
            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              An intelligent <span className="text-gradient">smile dashboard.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Upload a photo and our AI assistant — SUDHA Smile Guide — generates personalised oral
              health insights, treatment recommendations and preventive guidance in seconds.
            </p>
            <ul className="mt-8 space-y-3">
              {["Smile visualization", "Oral-health insights", "Treatment recommendations", "Preventive dental guidance"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12l5 5L20 7"/></svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fade} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="absolute inset-0 -z-10 bg-accent-gradient opacity-20 blur-3xl" />
            <div className="rounded-3xl border border-border bg-card-gradient p-8 shadow-card glass">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Smile Report</div>
                  <div className="mt-1 font-display text-2xl font-semibold">Score 88 <span className="text-primary">/100</span></div>
                </div>
                <div className="relative h-16 w-16">
                  <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                    <circle cx="18" cy="18" r="15" fill="none" stroke="oklch(1 0 0 / 0.08)" strokeWidth="3"/>
                    <circle cx="18" cy="18" r="15" fill="none" stroke="url(#g)" strokeWidth="3" strokeLinecap="round" strokeDasharray="83 100" pathLength="100"/>
                    <defs>
                      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="oklch(0.78 0.16 200)"/>
                        <stop offset="1" stopColor="oklch(0.74 0.13 180)"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="mt-8 space-y-5">
                {insights.map((i, idx) => (
                  <div key={i.l}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span className="text-muted-foreground">{i.l}</span>
                      <span className="font-medium">{i.v}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${i.v}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: idx * 0.15, ease: "easeOut" }}
                        className="h-full bg-accent-gradient"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm">
                <span className="text-primary">Recommendation:</span> Consider a teeth-whitening session and a 6-month preventive cleaning schedule.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const doctors = [
  { name: "Dr. Sudha R.", role: "Founder & Lead Dentist", exp: "15+ yrs", spec: "Cosmetic & Restorative" },
  { name: "Dr. Arjun M.", role: "Implantologist", exp: "10+ yrs", spec: "Implants & Surgery" },
  { name: "Dr. Meera K.", role: "Orthodontist", exp: "8+ yrs", spec: "Braces & Aligners" },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Doctors & Specialists"
          title={<>Specialists who <span className="text-gradient">care deeply.</span></>}
          sub="A team of dental experts combining clinical mastery with genuine warmth."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {doctors.map((d, i) => (
            <motion.div
              key={d.name}
              {...fade}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              data-cursor-hover
              className="group relative overflow-hidden rounded-2xl border border-border bg-card-gradient p-7 shadow-card transition-all hover:border-primary/40"
            >
              <div className="flex h-44 w-full items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-highlight/10 to-transparent">
                <svg className="h-20 w-20 text-primary/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="font-display text-xl font-semibold">{d.name}</h3>
                <p className="mt-1 text-sm text-primary">{d.role}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{d.spec}</span>
                  <span className="rounded-full bg-white/5 px-3 py-1">{d.exp}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stories = [
  { name: "Priya S.", quote: "The smile design transformation changed my confidence completely. The clinic feels like a calm sanctuary." },
  { name: "Karthik R.", quote: "Painless implants, world-class technology, and the most patient doctors I've met." },
  { name: "Anjali M.", quote: "From the AI consultation to the final treatment — every step felt premium and personal." },
];

export function Stories() {
  return (
    <section id="stories" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Patient Smile Stories"
          title={<>Real transformations, <span className="text-gradient">real joy.</span></>}
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <motion.figure
              key={s.name}
              {...fade}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card-gradient p-7 shadow-card"
            >
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, k) => (
                  <svg key={k} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 5 5.6.8-4 3.9 1 5.5L12 14.8 7 17.2l1-5.5-4-3.9 5.6-.8z"/></svg>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">"{s.quote}"</blockquote>
              <figcaption className="mt-5 font-display text-sm font-semibold">— {s.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
