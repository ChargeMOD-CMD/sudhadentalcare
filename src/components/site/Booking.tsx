import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export function Booking() {
  const [loading, setLoading] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Appointment request received. We'll call you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  }
  const fld = "w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";
  return (
    <section id="book" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--primary)/0.1,_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card-gradient shadow-card">
          <div className="grid lg:grid-cols-2">
            <div className="relative p-10 md:p-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-primary">
                Appointment & Consultation
              </div>
              <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
                Book your <span className="text-gradient">smile session.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Choose a time that suits you. We'll confirm by phone within working hours.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                {[
                  ["Phone", "+91 9841338012"],
                  ["WhatsApp", "+91 9841338012"],
                  ["Email", "info@sudhadentalcare.com"],
                  ["Hours", "Mon–Fri 9am–8pm · Sat–Sun 10am–5pm"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{k}</div>
                      <div className="font-medium">{v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4 border-t border-border bg-background/40 p-10 md:p-14 lg:border-l lg:border-t-0"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <input className={fld} placeholder="Full name" required />
                <input className={fld} placeholder="Phone" required type="tel" />
              </div>
              <input className={fld} placeholder="Email" type="email" />
              <select className={fld} required defaultValue="">
                <option value="" disabled>Select treatment</option>
                <option>Dental Check-up</option>
                <option>Teeth Whitening</option>
                <option>Smile Design</option>
                <option>Root Canal</option>
                <option>Implants</option>
                <option>Braces / Aligners</option>
              </select>
              <input className={fld} type="date" required />
              <textarea className={fld + " min-h-[100px] resize-none"} placeholder="Tell us a bit about your concern (optional)" />
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-accent-gradient px-6 py-3.5 text-sm font-medium text-primary-foreground glow-primary transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                {loading ? "Sending..." : "Request Appointment"}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-gradient">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M3 12c2 4 6 6 9 6s7-2 9-6"/><path d="M7 12V9M12 12V8M17 12V9"/>
              </svg>
            </span>
            <span className="font-display text-lg font-semibold">Sudha Dental Care</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Crafting healthy & confident smiles in Chennai through precision dentistry, intelligent
            patient care and a calming clinical experience.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Visit</div>
          <p className="mt-3 text-sm">Chennai, Tamil Nadu, India</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Contact</div>
          <p className="mt-3 text-sm">+91 9841338012</p>
          <p className="text-sm text-muted-foreground">info@sudhadentalcare.com</p>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border px-6 pt-6 text-xs text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} Sudha Dental Care. All rights reserved.</span>
        <span>Crafting Healthy & Confident Smiles.</span>
      </div>
    </footer>
  );
}

export function ChatOrb() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label="Open SUDHA AI Smile Guide"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-accent-gradient glow-primary transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-accent-gradient opacity-60 blur-xl smile-pulse" />
        <svg className="relative h-7 w-7 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9"/>
          <path d="M8 13c1.5 2 6.5 2 8 0"/>
          <circle cx="9" cy="10" r="1" fill="currentColor"/>
          <circle cx="15" cy="10" r="1" fill="currentColor"/>
        </svg>
      </button>
      {open && (
        <div className="fixed bottom-28 right-6 z-40 w-[320px] rounded-2xl glass p-5 shadow-card">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-gradient text-primary-foreground">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M8 13c1.5 2 6.5 2 8 0"/></svg>
            </span>
            <div>
              <div className="font-display text-sm font-semibold">SUDHA Smile Guide</div>
              <div className="text-xs text-muted-foreground">Online · here to help</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Hi! I can help with treatment guidance, appointment booking and smile-care tips.
            Tell me what you're looking for.
          </p>
          <a href="#book" className="mt-4 block rounded-xl bg-accent-gradient px-4 py-2.5 text-center text-sm font-medium text-primary-foreground">
            Book a consultation
          </a>
        </div>
      )}
    </>
  );
}
