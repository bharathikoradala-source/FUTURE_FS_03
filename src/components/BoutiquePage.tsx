import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Menu, X, MessageCircle, Phone, ChevronDown, Star, Sparkles, Award, Heart,
  Users, Layers, MapPin, Mail, Clock, Instagram, Facebook, ArrowUp, Sun, Moon,
  Plus, Minus, Send, Check,
} from "lucide-react";
import { collections, arrivals, testimonials, faqs, IMG } from "@/lib/boutique-data";

const WA = "https://wa.me/919999999999?text=Hi%20Elegance%20Boutique";
const TEL = "tel:+919999999999";

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("eb-theme") : null;
    const isDark = saved === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("eb-theme", next ? "dark" : "light");
  };
  return { dark, toggle };
}

function Nav() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { h: "#about", t: "About" },
    { h: "#collections", t: "Collections" },
    { h: "#arrivals", t: "New Arrivals" },
    { h: "#gallery", t: "Gallery" },
    { h: "#contact", t: "Contact" },
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "glass py-3" : "py-5"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-tight">Elegance</span>
          <span className="gold-text font-display text-2xl">Boutique</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(l => (
            <a key={l.h} href={l.h} className="text-sm text-foreground/80 transition hover:text-foreground">{l.t}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle theme" className="rounded-full p-2 transition hover:bg-secondary">
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <a href={WA} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition hover:opacity-90 md:inline-flex">
            <MessageCircle className="size-4" /> WhatsApp
          </a>
          <button onClick={() => setOpen(v => !v)} className="rounded-full p-2 md:hidden" aria-label="Menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="glass mx-4 mt-3 rounded-2xl p-4 md:hidden">
            {links.map(l => (
              <a key={l.h} href={l.h} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sm hover:bg-secondary">{l.t}</a>
            ))}
            <a href={WA} className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm text-primary-foreground"><MessageCircle className="size-4" /> WhatsApp</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img src={IMG.hero} alt="Elegance Boutique fashion" className="absolute inset-0 size-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 md:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-3xl text-white">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] backdrop-blur">
            <Sparkles className="size-3.5" /> Est. Couture Boutique
          </span>
          <h1 className="font-display text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
            Style That <em className="gold-text not-italic">Defines</em> You
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 md:text-xl">
            Discover our hand-curated collection of trendy, timeless, and premium fashion — crafted for the woman who dresses with intention.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#collections" className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-white/90">
              Explore Collection
            </a>
            <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20">
              <MessageCircle className="size-4" /> Contact on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
      <motion.a href="#about" aria-label="Scroll down" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="size-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}

function Section({ id, eyebrow, title, subtitle, children }: { id?: string; eyebrow?: string; title: React.ReactNode; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="mb-14 max-w-2xl">
        {eyebrow && <div className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</div>}
        <h2 className="text-4xl md:text-5xl">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  );
}

function About() {
  const points = [
    { icon: Heart, t: "Our Story", d: "Born from a lifelong love of fabric, cut, and craft — Elegance was founded to give women couture-grade fashion without compromise." },
    { icon: Award, t: "Uncompromising Quality", d: "Every piece is inspected by hand. We work only with heritage weavers and ateliers we trust." },
    { icon: Users, t: "Personalized Service", d: "One-to-one styling sessions, private fittings, and a relationship that lasts far beyond the sale." },
  ];
  return (
    <Section id="about" eyebrow="About the Boutique" title={<>A house of <em className="gold-text not-italic">quiet luxury</em>.</>} subtitle="Elegance Boutique is a family-founded atelier dedicated to the woman who values craft, cut, and character above trend.">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="overflow-hidden rounded-3xl">
          <img src={IMG.about} alt="Inside Elegance Boutique" className="h-full w-full object-cover" loading="lazy" />
        </motion.div>
        <div className="space-y-6">
          {points.map((p, i) => (
            <motion.div key={p.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex gap-5 rounded-2xl border border-border bg-card p-6 hover-lift">
              <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent/30 text-ink">
                <p.icon className="size-5" />
              </div>
              <div>
                <h3 className="text-xl">{p.t}</h3>
                <p className="mt-1.5 text-muted-foreground">{p.d}</p>
              </div>
            </motion.div>
          ))}
          <div className="grid grid-cols-2 gap-4 rounded-2xl bg-secondary p-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Our Mission</div>
              <p className="mt-2 text-sm">To dress every woman in pieces that feel as considered as they look.</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Our Vision</div>
              <p className="mt-2 text-sm">To become the most trusted destination for slow, meaningful fashion in the city.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Collections() {
  return (
    <Section id="collections" eyebrow="Featured Collections" title={<>Curated <em className="gold-text not-italic">wardrobes</em> for every chapter.</>} subtitle="From heritage weaves to modern silhouettes — each collection is styled by our in-house team.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((c, i) => (
          <motion.div key={c.key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl bg-card hover-lift">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={c.img} alt={c.title} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 text-white">
              <h3 className="text-2xl">{c.title}</h3>
              <p className="mt-1 text-sm text-white/80">{c.desc}</p>
              <a href={WA} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs backdrop-blur transition hover:bg-white/25">
                View Collection <ChevronDown className="size-3 -rotate-90" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Arrivals() {
  return (
    <Section id="arrivals" eyebrow="New Arrivals" title={<>This season's <em className="gold-text not-italic">picks</em>.</>} subtitle="Fresh off the atelier — enquire directly and we'll reserve your piece.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {arrivals.map((a, i) => (
          <motion.div key={a.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="group overflow-hidden rounded-2xl bg-card hover-lift">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={a.img} alt={a.name} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{a.cat}</div>
              <h3 className="mt-1 font-display text-lg">{a.name}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="gold-text font-medium">{a.price}</span>
                <a href={WA} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-3.5 py-1.5 text-xs text-primary-foreground transition hover:opacity-90">Enquire Now</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0; const start = performance.now(); const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span>{n.toLocaleString()}{suffix}</span>;
}

function WhyUs() {
  const items = [
    { icon: Award, t: "Premium Quality", d: "Fabric-forward pieces built to last." },
    { icon: Sparkles, t: "Affordable Luxury", d: "Boutique craft at honest prices." },
    { icon: Layers, t: "Latest Trends", d: "New drops every fortnight." },
    { icon: Heart, t: "Personal Styling", d: "One-to-one appointments." },
    { icon: Users, t: "Friendly Staff", d: "Warmth, not pressure — always." },
    { icon: Star, t: "Wide Collection", d: "Ethnic to western, casual to bridal." },
  ];
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-secondary" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 max-w-2xl">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Why Choose Us</div>
          <h2 className="text-4xl md:text-5xl">The <em className="gold-text not-italic">Elegance</em> difference.</h2>
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div key={it.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6 hover-lift">
              <div className="mb-4 grid size-12 place-items-center rounded-xl bg-accent/30"><it.icon className="size-5" /></div>
              <h3 className="text-xl">{it.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl bg-card p-8 md:grid-cols-4">
          {[
            { n: 12, s: "+", l: "Years of Craft" },
            { n: 8500, s: "+", l: "Happy Clients" },
            { n: 300, s: "+", l: "New Pieces / Year" },
            { n: 100, s: "%", l: "Curated by Hand" },
          ].map(x => (
            <div key={x.l} className="text-center">
              <div className="font-display text-4xl md:text-5xl gold-text"><Counter to={x.n} suffix={x.s} /></div>
              <div className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">{x.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <Section eyebrow="Testimonials" title={<>Loved by <em className="gold-text not-italic">women</em> who know style.</>}>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.figure key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="rounded-3xl border border-border bg-card p-8 hover-lift">
            <div className="mb-4 flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-current" />)}
            </div>
            <blockquote className="font-display text-xl leading-relaxed">"{t.quote}"</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img src={t.img} alt={t.name} className="size-11 rounded-full object-cover" loading="lazy" />
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground">Verified Client</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  const imgs = [IMG.g1, IMG.g2, IMG.g3, IMG.g4, IMG.g5, IMG.g6, IMG.g7, IMG.g8];
  const spans = ["row-span-2", "", "", "row-span-2", "", "row-span-2", "", ""];
  return (
    <Section id="gallery" eyebrow="Gallery" title={<>The <em className="gold-text not-italic">boutique</em>, in moments.</>} subtitle="Peek inside our world of fabrics, fittings, and finishing touches.">
      <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px]">
        {imgs.map((src, i) => (
          <motion.button key={src} onClick={() => setOpen(src)}
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
            className={`group relative overflow-hidden rounded-2xl ${spans[i]}`}>
            <img src={src} alt="Boutique" loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)} className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-6 backdrop-blur">
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} src={open} alt="" className="max-h-[85vh] max-w-full rounded-2xl object-contain" />
            <button aria-label="Close" onClick={() => setOpen(null)} className="absolute right-6 top-6 rounded-full bg-white/15 p-3 text-white backdrop-blur"><X className="size-5" /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function Offers() {
  const offers = [
    { t: "Seasonal Discounts", d: "Up to 30% off end-of-season edits.", tag: "Now on" },
    { t: "Festive Collection", d: "Handpicked festive drops with complimentary styling.", tag: "Limited" },
    { t: "Wedding Offers", d: "Bridal packages with trousseau, fittings & alterations.", tag: "Bespoke" },
    { t: "Member Exclusives", d: "Early access to drops & private preview evenings.", tag: "Members" },
  ];
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink via-ink to-[oklch(0.22_0.02_60)]" />
      <div className="mx-auto max-w-7xl px-5 text-white md:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-white/60">Special Offers</div>
          <h2 className="text-4xl md:text-5xl">Occasions to <em className="gold-text not-italic">celebrate</em>.</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((o, i) => (
            <motion.div key={o.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 text-white hover-lift">
              <span className="inline-block rounded-full border border-white/25 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.25em]">{o.tag}</span>
              <h3 className="mt-4 text-xl">{o.t}</h3>
              <p className="mt-2 text-sm text-white/75">{o.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section eyebrow="FAQ" title={<>Everything you'd <em className="gold-text not-italic">ask</em>, answered.</>}>
      <div className="mx-auto max-w-3xl divide-y divide-border rounded-3xl border border-border bg-card">
        {faqs.map((f, i) => (
          <div key={f.q}>
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-6 text-left">
              <span className="font-display text-lg">{f.q}</span>
              {open === i ? <Minus className="size-4 shrink-0" /> : <Plus className="size-4 shrink-0" />}
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <p className="px-6 pb-6 text-muted-foreground">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<Record<string, string>>({});
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const msg = String(f.get("msg") || "").trim();
    const errs: Record<string, string> = {};
    if (name.length < 2) errs.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "Please enter a valid email.";
    if (msg.length < 5) errs.msg = "Tell us a little more.";
    setErr(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      e.currentTarget.reset();
      setTimeout(() => setSent(false), 4000);
    }
  };
  return (
    <Section id="contact" eyebrow="Visit or Enquire" title={<>Come see us. We'd love to <em className="gold-text not-italic">style</em> you.</>}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { i: MapPin, t: "Address", d: "24, Boutique Lane, Bandra West, Mumbai 400050" },
              { i: Phone, t: "Phone", d: "+91 99999 99999" },
              { i: Mail, t: "Email", d: "hello@eleganceboutique.in" },
              { i: Clock, t: "Hours", d: "Mon–Sat · 11am – 8:30pm" },
            ].map(x => (
              <div key={x.t} className="rounded-2xl border border-border bg-card p-5">
                <div className="mb-3 grid size-10 place-items-center rounded-lg bg-accent/30"><x.i className="size-4" /></div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{x.t}</div>
                <div className="mt-1 text-sm">{x.d}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.72_0.15_150)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90">
              <MessageCircle className="size-4" /> Chat on WhatsApp
            </a>
            <a href={TEL} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              <Phone className="size-4" /> Click to Call
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe title="Elegance Boutique location" loading="lazy"
              src="https://www.google.com/maps?q=Bandra+West+Mumbai&output=embed"
              className="h-64 w-full" />
          </div>
        </div>
        <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-6 md:p-8" noValidate>
          <h3 className="text-2xl">Send us a message</h3>
          <p className="mt-1 text-sm text-muted-foreground">We reply within a few hours during business days.</p>
          <div className="mt-6 space-y-4">
            {[
              { n: "name", l: "Full name", type: "text" },
              { n: "email", l: "Email", type: "email" },
              { n: "phone", l: "Phone (optional)", type: "tel" },
            ].map(f => (
              <div key={f.n}>
                <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{f.l}</label>
                <input name={f.n} type={f.type} maxLength={120}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/40" />
                {err[f.n] && <p className="mt-1 text-xs text-destructive">{err[f.n]}</p>}
              </div>
            ))}
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
              <textarea name="msg" rows={4} maxLength={800}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/40" />
              {err.msg && <p className="mt-1 text-xs text-destructive">{err.msg}</p>}
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              {sent ? (<><Check className="size-4" /> Message sent</>) : (<><Send className="size-4" /> Send message</>)}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl">Elegance</span>
            <span className="gold-text font-display text-2xl">Boutique</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">A house of quiet luxury for the woman who dresses with intention.</p>
          <div className="mt-5 flex gap-2">
            {[Instagram, Facebook].map((I, i) => (
              <a key={i} href="#" aria-label="social" className="grid size-10 place-items-center rounded-full border border-border bg-background transition hover:bg-accent/30"><I className="size-4" /></a>
            ))}
            <a href="#" aria-label="Pinterest" className="grid size-10 place-items-center rounded-full border border-border bg-background text-sm transition hover:bg-accent/30">P</a>
          </div>
        </div>
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Explore</div>
          <ul className="space-y-2 text-sm">
            {["About", "Collections", "New Arrivals", "Gallery", "Contact"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(" ", "")}`} className="hover:text-foreground text-muted-foreground">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Support</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms & Conditions</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground">Exchanges</a></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Visit</div>
          <p className="text-sm text-muted-foreground">24, Boutique Lane<br />Bandra West, Mumbai 400050</p>
          <p className="mt-3 text-sm">+91 99999 99999<br />hello@eleganceboutique.in</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted-foreground md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Elegance Boutique. All rights reserved.</p>
          <p>Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 22 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-gradient-to-r from-accent via-gold to-accent" />;
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"
          className="fixed bottom-24 right-5 z-40 grid size-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg">
          <ArrowUp className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function StickyWA() {
  return (
    <a href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp"
      className="fixed bottom-6 right-5 z-40 grid size-14 place-items-center rounded-full bg-[oklch(0.72_0.15_150)] text-white shadow-xl transition hover:scale-105">
      <MessageCircle className="size-6" />
    </a>
  );
}

function Loader() {
  const [gone, setGone] = useState(false);
  useEffect(() => { const t = setTimeout(() => setGone(true), 900); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {!gone && (
        <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="fixed inset-0 z-[100] grid place-items-center bg-background">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="font-display text-4xl md:text-5xl">Elegance <span className="gold-text">Boutique</span></div>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8 }} className="mx-auto mt-4 h-px w-40 origin-left bg-gradient-to-r from-transparent via-accent to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function BoutiquePage() {
  return (
    <div className="min-h-screen">
      <Loader />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Collections />
        <Arrivals />
        <WhyUs />
        <Testimonials />
        <Gallery />
        <Offers />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <StickyWA />
    </div>
  );
}
