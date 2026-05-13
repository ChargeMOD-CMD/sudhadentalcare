import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#ai-smile", label: "AI Smile" },
  { href: "#doctors", label: "Doctors" },
  { href: "#stories", label: "Stories" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
          scrolled ? "glass rounded-2xl" : ""
        }`}
        style={scrolled ? { padding: "0.75rem 1.25rem" } : undefined}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-gradient glow-soft">
            <span className="absolute inset-0 rounded-xl bg-accent-gradient opacity-50 blur-md" />
            <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M3 12c2 4 6 6 9 6s7-2 9-6" />
              <path d="M7 12V9M12 12V8M17 12V9" />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Sudha<span className="text-primary">.</span>Dental
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#book"
          className="hidden rounded-xl bg-accent-gradient px-5 py-2.5 text-sm font-medium text-primary-foreground glow-soft transition-transform hover:scale-105 md:inline-flex"
        >
          Book Appointment
        </a>

        <button
          aria-label="Menu"
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="mx-6 mt-2 glass rounded-2xl p-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <a href="#book" onClick={() => setOpen(false)} className="rounded-xl bg-accent-gradient px-5 py-2.5 text-center text-sm font-medium text-primary-foreground">
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
