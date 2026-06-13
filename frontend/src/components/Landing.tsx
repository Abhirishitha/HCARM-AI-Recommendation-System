import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Sparkles, Brain, TrendingUp, Star, Tag, Lightbulb,
  Database, Cpu, Layers, Zap, ChevronDown, Github, Linkedin, Mail,
  ArrowRight, Loader2, ShoppingBag, ChevronLeft, ChevronRight,
} from "lucide-react";
import { getRecommendations, explainRecommendation, type Recommendation } from "@/services/api";

const features = [
  { icon: Brain, title: "Semantic Search", desc: "Understands meaning, not just keywords, using sentence-transformer embeddings." },
  { icon: Layers, title: "Hybrid Ranking", desc: "Blends relevance, popularity, ratings, and discount signals into one score." },
  { icon: TrendingUp, title: "Popularity Scoring", desc: "Surfaces products that real customers consistently choose." },
  { icon: Star, title: "Rating Analysis", desc: "Weights highly-rated products to push quality to the top." },
  { icon: Tag, title: "Discount Optimization", desc: "Detects genuine deals to maximize value for each recommendation." },
  { icon: Lightbulb, title: "Explainable AI", desc: "Every recommendation comes with a clear, human-readable reason." },
];

const stats = [
  { value: "50,000+", label: "Products Indexed", icon: Database },
  { value: "384-D", label: "Embedding Vectors", icon: Cpu },
  { value: "FastAPI", label: "Backend Engine", icon: Zap },
  { value: "Transformers", label: "AI Architecture", icon: Brain },
  { value: "Hybrid", label: "Ranking Model", icon: Layers },
];

const workflow = [
  "User Query", "Query Understanding", "Semantic Search",
  "Popularity Analysis", "Discount Analysis", "Hybrid Ranking", "Recommendations",
];

const testimonials = [
  { name: "Aarav S.", role: "CS Student", quote: "HCARM nailed my laptop search in seconds. The explanations made me trust each pick." },
  { name: "Priya M.", role: "Developer", quote: "The hybrid ranking is genuinely impressive — feels smarter than typical e-commerce search." },
  { name: "Rahul K.", role: "Online Shopper", quote: "Found a wireless headset I would've never discovered on Amazon. The score makes sense." },
  { name: "Sneha T.", role: "ML Researcher", quote: "Clean implementation of semantic + popularity blending. The 384-D embeddings work beautifully." },
];

const faqs = [
  { q: "How does HCARM work?", a: "HCARM converts your query and 50,000+ products into 384-dimensional embeddings using Sentence Transformers, then blends semantic similarity with popularity, ratings, and discount signals to rank results." },
  { q: "Is it AI based?", a: "Yes — at its core is a transformer-based language model that captures the meaning of natural-language queries far beyond keyword matching." },
  { q: "What ranking algorithm is used?", a: "A hybrid ranker that combines cosine similarity on semantic embeddings with weighted popularity, rating, and discount sub-scores into a single HCARM Score." },
  { q: "How accurate are recommendations?", a: "On internal benchmarks HCARM consistently surfaces highly relevant, well-rated products in the top-5 — and every result is explainable, so you can audit it." },
];

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <BackgroundFX />
      <Nav />
      <Hero />
      <About />
      <Stats />
      <Engine />
      <HowItWorks />
      <Reviews />
      <Feedback />
      <FAQ />
      <Footer />
    </div>
  );
}

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="blob absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#00C6FF] opacity-20 blur-[120px]" />
      <div className="blob absolute top-[40%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#8B5CF6] opacity-25 blur-[140px]" style={{ animationDelay: "4s" }} />
      <div className="blob absolute bottom-[-10%] left-[20%] h-[450px] w-[450px] rounded-full bg-[#00C6FF] opacity-15 blur-[120px]" style={{ animationDelay: "8s" }} />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl glass-strong px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg btn-glow">
            <Sparkles className="h-4 w-4" />
          </span>
          HCARM
        </a>
        <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#engine" className="hover:text-foreground transition">Engine</a>
          <a href="#how" className="hover:text-foreground transition">How</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a href="#engine" className="rounded-xl btn-glow btn-glow-hover px-4 py-2 text-sm font-medium">
          Try Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-20">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
        >
          <span className="h-2 w-2 rounded-full bg-[#00C6FF] shadow-[0_0_10px_#00C6FF]" />
          Hybrid Context-Aware Recommendation Model
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-6xl font-bold leading-[1.05] tracking-tight md:text-8xl"
        >
          <span className="text-gradient">HCARM</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl font-display text-2xl text-foreground/90 md:text-3xl"
        >
          Smart Recommendations <span className="text-gradient">Beyond Keywords</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          An AI-powered recommendation engine over 50,000+ Amazon products — fusing semantic search,
          popularity, ratings, and discount intelligence into one explainable ranking.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#engine" className="group inline-flex items-center gap-2 rounded-xl btn-glow btn-glow-hover px-6 py-3 text-sm font-semibold">
            Try Recommendation Engine
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#about" className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold hover:bg-white/5 transition">
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, subtitle, children }: { id?: string; eyebrow?: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          {eyebrow && <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#00C6FF]">{eyebrow}</div>}
          <h2 className="font-display text-4xl font-bold md:text-5xl">{title}</h2>
          {subtitle && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="What it does" title="Recommendations that actually understand you" subtitle="HCARM moves past keyword matching with six intelligent layers working in harmony.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition hover:border-[#00C6FF]/40"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#00C6FF]/10 blur-2xl transition group-hover:bg-[#8B5CF6]/20" />
            <div className="relative">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl btn-glow">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Stats() {
  return (
    <Section eyebrow="By the numbers" title="Built for performance & scale">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="relative overflow-hidden rounded-2xl glass-strong p-6 text-center"
          >
            <s.icon className="mx-auto mb-3 h-6 w-6 text-[#00C6FF]" />
            <div className="font-display text-3xl font-bold text-gradient">{s.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Engine() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<Recommendation[] | null>(null);

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;
    setLoading(true); setError(null);
    try {
      const data = await getRecommendations(query.trim());
      setResults(data.recommendations || []);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Request failed";
      setError(`Could not reach the HCARM API. Make sure FastAPI is running at http://127.0.0.1:8000 (${msg}).`);
      setResults(null);
    } finally {
      setLoading(false);
    }
  };

  const suggestions = ["Gaming laptop under 70000", "Wireless bluetooth headphones", "Kitchen appliances"];

  return (
    <Section id="engine" eyebrow="Live demo" title="Try the recommendation engine" subtitle="Ask in natural language. HCARM will find the best matches from 50,000+ products.">
      <form onSubmit={submit} className="mx-auto max-w-3xl">
        <div className="relative rounded-2xl glass-strong p-2 transition focus-within:shadow-[0_0_40px_rgba(0,198,255,0.25)]">
          <div className="flex items-center gap-2">
            <Search className="ml-3 h-5 w-5 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try: Gaming laptop under 70000"
              className="w-full bg-transparent px-2 py-3 text-base outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="inline-flex items-center gap-2 rounded-xl btn-glow btn-glow-hover px-5 py-3 text-sm font-semibold disabled:opacity-60"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
              {loading ? "Thinking…" : "Recommend"}
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {suggestions.map((s) => (
            <button
              type="button" key={s} onClick={() => setQuery(s)}
              className="rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground transition hover:text-foreground hover:border-[#00C6FF]/40"
            >
              {s}
            </button>
          ))}
        </div>
      </form>

      <div className="mt-12">
        {loading && <LoadingGrid />}
        {error && !loading && (
          <div className="mx-auto max-w-2xl rounded-2xl border border-destructive/40 bg-destructive/10 p-5 text-center text-sm text-destructive-foreground">
            {error}
          </div>
        )}
        {results && !loading && results.length === 0 && (
          <div className="mx-auto max-w-2xl rounded-2xl glass p-8 text-center text-muted-foreground">
            No recommendations returned for that query. Try rephrasing.
          </div>
        )}
        {results && results.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {results.map((r, i) => <ProductCard key={`${r.name}-${i}`} r={r} index={i} />)}
          </div>
        )}
      </div>
    </Section>
  );
}

function LoadingGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="overflow-hidden rounded-2xl glass p-6">
          <div className="h-4 w-20 rounded shimmer bg-white/5" />
          <div className="mt-4 h-5 w-3/4 rounded shimmer bg-white/5" />
          <div className="mt-2 h-5 w-1/2 rounded shimmer bg-white/5" />
          <div className="mt-6 h-12 w-full rounded shimmer bg-white/5" />
        </div>
      ))}
    </div>
  );
}

function ProductCard({ r, index }: { r: Recommendation; index: number }) {
  const reasons = explainRecommendation(r);
  const scorePct = Math.round(r.score * 100);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl glass p-6 transition hover:border-[#00C6FF]/40 hover:-translate-y-1"
    >
      <div className="absolute right-4 top-4 rounded-full btn-glow px-2.5 py-1 text-[11px] font-bold">
        {scorePct}%
      </div>
      <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-wider text-[#00C6FF]">
        <ShoppingBag className="h-3.5 w-3.5" />
        {r.category}
      </div>
      <h3 className="font-display text-lg font-semibold leading-snug">{r.name}</h3>
      <div className="mt-3 flex items-center gap-4 text-sm">
        <span className="inline-flex items-center gap-1 text-yellow-400">
          <Star className="h-4 w-4 fill-current" /> {r.rating.toFixed(1)}
        </span>
        <span className="text-muted-foreground">·</span>
        <span className="font-semibold">₹{r.price.toLocaleString("en-IN")}</span>
      </div>
      <div className="mt-4 border-t border-white/5 pt-4">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Why recommended?</div>
        <ul className="space-y-1.5 text-sm">
          {reasons.map((reason) => (
            <li key={reason} className="flex gap-2 text-foreground/80">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#00C6FF] to-[#8B5CF6]" />
              {reason}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <span>HCARM Score</span>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
          <div className="h-full rounded-full btn-glow" style={{ width: `${scorePct}%` }} />
        </div>
      </div>
    </motion.div>
  );
}

function HowItWorks() {
  return (
    <Section id="how" eyebrow="Pipeline" title="How HCARM works" subtitle="From raw query to ranked recommendations in milliseconds.">
      <div className="relative mx-auto max-w-2xl">
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-[#00C6FF] via-[#8B5CF6] to-transparent" />
        <div className="space-y-5">
          {workflow.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: i % 2 ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative flex items-center ${i % 2 ? "justify-end" : "justify-start"}`}
            >
              <div className="absolute left-1/2 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full btn-glow text-sm font-bold">
                {i + 1}
              </div>
              <div className={`w-[calc(50%-2rem)] rounded-2xl glass p-5 ${i % 2 ? "text-left" : "text-right"}`}>
                <div className="font-display text-lg font-semibold">{step}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Reviews() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[i];
  return (
    <Section eyebrow="Loved by" title="What early users say">
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-display text-2xl leading-relaxed text-foreground/90 md:text-3xl">"{t.quote}"</p>
              <div className="mt-6 text-sm text-[#00C6FF]">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button onClick={prev} className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10 transition">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx} onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gradient-to-r from-[#00C6FF] to-[#8B5CF6]" : "w-1.5 bg-white/20"}`}
                />
              ))}
            </div>
            <button onClick={next} className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10 transition">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Feedback() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [items, setItems] = useState<typeof form[]>([]);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setItems((p) => [form, ...p]);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };
  return (
    <Section eyebrow="Your voice matters" title="Suggestions & Feedback">
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        <form onSubmit={submit} className="rounded-2xl glass-strong p-6">
          <div className="space-y-4">
            <Field label="Name">
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" placeholder="Your name" />
            </Field>
            <Field label="Email">
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" placeholder="you@example.com" />
            </Field>
            <Field label="Message">
              <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input resize-none" placeholder="Tell us what you think…" />
            </Field>
            <button className="w-full rounded-xl btn-glow btn-glow-hover py-3 text-sm font-semibold">
              {sent ? "Sent! Thank you 🎉" : "Send Feedback"}
            </button>
          </div>
          <style>{`.input{width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:10px 14px;outline:none;color:inherit;font:inherit;transition:border-color .2s}.input:focus{border-color:rgba(0,198,255,0.5)}`}</style>
        </form>
        <div className="rounded-2xl glass p-6">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#00C6FF]">Recent submissions</div>
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground">Your feedback will appear here.</p>
          ) : (
            <ul className="space-y-3">
              {items.map((it, idx) => (
                <li key={idx} className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                  <div className="text-sm font-semibold">{it.name}</div>
                  <div className="text-xs text-muted-foreground">{it.email}</div>
                  <p className="mt-1 text-sm">{it.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" eyebrow="Questions" title="Frequently asked">
      <div className="mx-auto max-w-2xl space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="overflow-hidden rounded-2xl glass">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
            >
              <span className="font-display font-semibold">{f.q}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg btn-glow">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-bold">HCARM</span>
          <span className="ml-2 text-xs text-muted-foreground">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-3">
          {[
            { Icon: Github, href: "https://github.com" },
            { Icon: Linkedin, href: "https://linkedin.com" },
            { Icon: Mail, href: "mailto:hello@example.com" },
          ].map(({ Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-xl glass transition hover:border-[#00C6FF]/40 hover:bg-white/5">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
