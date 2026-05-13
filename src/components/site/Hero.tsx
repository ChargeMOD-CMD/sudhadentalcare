import { motion } from "framer-motion";
import heroImg from "@/assets/hero-smile.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-hero pt-32 pb-24 md:pt-40 md:pb-32">
      {/* ambient orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl smile-pulse" />
      <div className="pointer-events-none absolute right-[-10%] top-1/3 h-[400px] w-[400px] rounded-full bg-highlight/15 blur-3xl" />

      {/* scan line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-primary"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            AI-Assisted Smile Care
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-5xl font-semibold leading-[1.05] md:text-7xl"
          >
            Crafting healthy & <br />
            <span className="text-gradient">confident smiles.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            A next-generation smile-care ecosystem in Chennai blending precision dentistry,
            calming healthcare aesthetics and intelligent patient interaction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#book"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-accent-gradient px-7 py-3.5 text-sm font-medium text-primary-foreground glow-primary transition-transform hover:scale-[1.03]"
            >
              Book Appointment
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a href="#ai-smile" className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3.5 text-sm font-medium glass transition-colors hover:border-primary/50">
              <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M8 12c1.5 2.5 6.5 2.5 8 0"/><circle cx="9" cy="10" r=".8" fill="currentColor"/><circle cx="15" cy="10" r=".8" fill="currentColor"/></svg>
              Try AI Smile Analyser
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6"
          >
            {[
              { v: "15+", l: "Years Care" },
              { v: "10k+", l: "Smiles" },
              { v: "98%", l: "Satisfaction" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-semibold text-gradient">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square w-full max-w-[560px] mx-auto">
            <div className="absolute inset-0 rounded-[2rem] bg-accent-gradient opacity-30 blur-3xl smile-pulse" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-primary/20 shadow-card">
              <img
                src={heroImg}
                alt="Holographic smile visualization"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>

            {/* floating chip */}
            <div className="absolute -left-4 bottom-10 glass rounded-2xl p-4 shadow-card animate-float">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l2.4 5 5.6.8-4 3.9 1 5.5L12 14.8 7 17.2l1-5.5-4-3.9 5.6-.8z"/></svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Smile Score</div>
                  <div className="font-display text-lg font-semibold">94 / 100</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-10 glass rounded-2xl p-4 shadow-card" style={{ animation: "float 7s ease-in-out infinite" }}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-highlight/15 text-highlight">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10z"/></svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Pain-free</div>
                  <div className="font-display text-sm font-semibold">Comfort Care</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
