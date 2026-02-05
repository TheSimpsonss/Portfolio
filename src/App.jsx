import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { profile } from "./data/profile";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = stored ? stored === "dark" : prefersDark;
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    if (!resumeOpen) return;
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setResumeOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [resumeOpen]);

  const contactLinks = useMemo(
    () => [
      { icon: Github, label: "GitHub", href: profile.links.github },
      { icon: Linkedin, label: "LinkedIn", href: profile.links.linkedin },
      { icon: Mail, label: "Email", href: profile.links.email },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-charcoal text-slate-100">
      <header className="sticky top-0 z-50 bg-charcoal/80 backdrop-blur-md border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-lg font-semibold">
              {profile.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </span>
            <div>
              <p className="text-sm font-semibold">{profile.name}</p>
              <p className="text-xs text-slate-400">DevOps • MLOps • AI</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={() => setIsDark((prev) => !prev)}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-white/30"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-white/30 md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-white/5 px-6 pb-4 md:hidden">
            <nav className="flex flex-col gap-3 pt-3 text-sm">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-glow opacity-80" />
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.1fr,0.9fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-accent-teal">
                DevOps • Data • AI
              </p>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                {profile.title}
              </h1>
              <p className="text-lg text-slate-300">{profile.tagline}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#resume"
                  className="rounded-full bg-accent-teal px-6 py-3 text-sm font-semibold text-charcoal transition hover:brightness-110"
                >
                  View Resume
                </a>
                <a
                  href="#projects"
                  className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/30"
                >
                  View Projects
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Open to MLOps + GenAI roles
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Remote • Global
                </span>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft"
            >
              <div className="space-y-2">
                <p className="text-sm text-slate-400">Currently learning</p>
                <h2 className="text-2xl font-semibold">Data Science & ML Foundations</h2>
                <p className="text-sm text-slate-300">
                  Building experimentation workflows, model evaluation, and NLP prototypes
                  alongside production DevOps practices.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-slate-400">Future direction</p>
                <h3 className="text-xl font-semibold">GenAI • Agentic AI • MLOps</h3>
                <p className="text-sm text-slate-300">
                  Creating intelligent automation that ships with observability, safety, and
                  reliable deployments.
                </p>
              </div>
              <div className="gradient-border inline-flex items-center gap-2 px-4 py-2 text-xs text-slate-200">
                <span className="rounded-full bg-charcoal px-3 py-1">Always learning</span>
                <ArrowUpRight size={14} />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 md:grid-cols-[1fr,1.2fr]"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent-blue">About</p>
              <h2 className="mt-4 text-3xl font-semibold">Engineering for scale and intelligence</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">{profile.summary}</p>
          </motion.div>
        </section>

        <section id="tech" className="bg-ink/40">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-accent-purple">Tech Stack</p>
              <h2 className="mt-4 text-3xl font-semibold">Tooling across infrastructure and AI</h2>
            </motion.div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {profile.techStack.map((group) => (
                <motion.div
                  key={group.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{group.label}</h3>
                    {group.future && (
                      <span className="rounded-full border border-accent-purple/40 bg-accent-purple/10 px-3 py-1 text-xs text-accent-purple">
                        Future Focus
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-accent-teal">Projects</p>
            <h2 className="mt-4 text-3xl font-semibold">Solutions with room to scale</h2>
          </motion.div>
          <div className="mt-10 space-y-10">
            {profile.projects.map((group) => (
              <div key={group.category} className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-200">{group.category}</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {group.items.map((project) => (
                    <motion.a
                      key={project.name}
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5 }}
                      className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white">{project.name}</h4>
                          <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                        </div>
                        <ArrowUpRight className="text-slate-500 transition group-hover:text-white" />
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="bg-ink/40">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-accent-blue">Experience</p>
              <h2 className="mt-4 text-3xl font-semibold">Training, impact, and growth</h2>
            </motion.div>
            <div className="mt-10 space-y-6">
              {profile.experience.map((role, index) => (
                <motion.div
                  key={role.role}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{role.role}</h3>
                      <p className="text-sm text-slate-300">{role.org}</p>
                    </div>
                    <span className="text-sm text-slate-400">{role.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{role.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="mx-auto max-w-6xl px-6 py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-accent-purple">Resume</p>
            <h2 className="mt-4 text-3xl font-semibold">Download or preview the resume</h2>
          </motion.div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={profile.links.resume}
              className="inline-flex items-center gap-2 rounded-full bg-accent-purple px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              <Download size={18} />
              View / Download Resume
            </a>
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/30"
            >
              Preview Resume
            </button>
            <p className="text-sm text-slate-400">
              Replace <span className="text-slate-200">public/resume.pdf</span> with your latest resume.
            </p>
          </div>
        </section>

        <section id="contact" className="bg-ink/40">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]"
            >
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-accent-teal">Contact</p>
                <h2 className="text-3xl font-semibold">Let&apos;s build resilient AI systems</h2>
                <p className="text-slate-300">
                  Reach out to collaborate on cloud-native, MLOps, or intelligent automation projects.
                </p>
                <div className="flex flex-wrap gap-4">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-white/30"
                    >
                      <link.icon size={16} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <form className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="grid gap-4">
                  <div>
                    <label className="text-xs uppercase text-slate-400">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-charcoal px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-accent-teal focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase text-slate-400">Email</label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-charcoal px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-accent-teal focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase text-slate-400">Message</label>
                    <textarea
                      rows="4"
                      placeholder="Share what you want to build"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-charcoal px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-accent-teal focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-full bg-accent-teal px-6 py-3 text-sm font-semibold text-charcoal transition hover:brightness-110"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row">
          <p>© 2024 {profile.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {resumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-charcoal"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div>
                  <h3 className="text-lg font-semibold">Resume Preview</h3>
                  <p className="text-xs text-slate-400">Replace with your latest PDF.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setResumeOpen(false)}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 hover:border-white/30"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="h-[70vh] bg-ink">
                <iframe
                  title="Resume preview"
                  src={profile.links.resume}
                  className="h-full w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
