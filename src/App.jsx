import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import profileImage from "./assets/profile.jpg";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Code,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

/**
 * Single-file, functional portfolio website with dark bluish background.
 * - TailwindCSS for styling
 * - Framer Motion for subtle animations
 *
 * How to use:
 * 1) Drop this into App.jsx (Vite/React) or a page component (Next.js).
 * 2) Ensure Tailwind + framer-motion + lucide-react are installed.
 * 3) Replace image placeholders with your real photos.
 */

const PROFILE = {
  firstName: "Surya Sairama Sampath",
  lastName: "Chavali",
  title: "Graduate Student (MSIS) • Machine Learning & Data Science",
  location: "College Park, Maryland, USA",
  phone: "+1 (227) 259-9116",
  email: "chavalisampath25@gmail.com",
  linkedin: "https://www.linkedin.com/in/surya-sairam-sampath",
  github: "https://github.com/sampath402003",
  summary:
    "MS Information Systems student with hands-on experience in machine learning, data analysis, and applied AI. Strong in Python, preprocessing, supervised learning, and reinforcement learning—building end-to-end solutions across healthcare and cloud domains.",
};

const SKILLS = {
  "Programming": ["Python", "Java", "C"],
  "ML & Data": [
    "Supervised Learning",
    "Reinforcement Learning",
    "Feature Engineering",
    "Model Evaluation",
    "Data Preprocessing",
    "Exploratory Data Analysis (EDA)",
    "scikit-learn",
    "NumPy",
    "Pandas",
  ],
  "Visualization & BI": ["Tableau", "Data Dashboards", "Data Storytelling"],
  "Tools": ["Jupyter Notebook", "Google Colab", "Git", "Visual Studio Code"],
  "Cloud": ["Microsoft Azure", "AWS (EC2, IAM)", "Google Cloud Platform"],
  "Computer Vision": ["OpenCV", "Image Processing"],
  "Project & Process": ["Project Management Fundamentals", "Agile Concepts", "Stakeholder Coordination"],
};

const EXPERIENCE = [
  {
    role: "Machine Learning Intern",
    company: "ORBITOR",
    period: "(Internship)",
    bullets: [
      "Applied Python for data manipulation, cleaning, and exploratory data analysis (EDA) on structured datasets.",
      "Performed preprocessing and feature engineering with Pandas, NumPy, and scikit-learn.",
      "Implemented supervised ML models including KNN and regression for prediction tasks.",
      "Tuned hyperparameters and evaluated performance using metrics like R² and MSE.",
      "Worked end-to-end: data wrangling → training → validation → evaluation.",
    ],
  },
];

const EDUCATION = [
  {
    school: "University of Maryland, College Park",
    degree: "Master of Science — Information Systems",
    location: "College Park, MD, USA",
    year: "Expected Dec 2026",
    coursework: [
      "Database Management",
      "Data, Models, and Decisions using R",
      "Data Processing and Analysis in Python",
      "Project Management",
      "Managing Digital Businesses",
      "Data Mining",
      "Big Data",
      "Cloud Computing",
    ],
  },
  {
    school: "Vignana Bharathi Institute of Technology",
    degree: "Bachelor of Technology — Computer Science & Engineering",
    location: "Telangana, India",
    year: "May 2025",
    coursework: [
      "Analysis of Algorithms",
      "Operating Systems",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Analytics",
      "Computer Networks",
      "DBMS",
      "OOP (Java)",
    ],
  },
];

const CERTIFICATIONS = [
  { name: "Microsoft Certified: Azure AI Fundamentals", issuer: "Microsoft" },
  { name: "Introduction to Generative AI", issuer: "Google" },
  { name: "Machine Learning", issuer: "Google" },
  { name: "Java Fundamentals", issuer: "Oracle / Authorized Platform" },
  { name: "Networking Essentials", issuer: "Cisco Networking Academy" },
];

const PROJECTS = [
  {
    title: "Resource Allocation in Cloud using Reinforcement Learning (MDP)",
    tags: ["Reinforcement Learning", "MDP", "Cloud"],
    description:
      "Built an RL-based resource allocation model using a Markov Decision Process to manage dynamic cloud workloads; designed state/action/reward functions to reduce inefficient allocation under fluctuating demand.",
    highlights: [
      "Designed and tuned state, action, and reward functions",
      "Compared allocation behavior before/after RL optimization",
      "Observed improved resource utilization and adaptability",
    ],
    links: {
      code: "https://github.com/sampath402003",
      demo: ""
    }
  },
  {
    title: "USA Housing Price Prediction (KNN Regression)",
    tags: ["Machine Learning", "Regression", "scikit-learn"],
    description:
      "Developed a KNN regression model to predict housing prices on the USA Housing dataset, performing preprocessing, scaling, EDA, and hyperparameter tuning.",
    highlights: ["R² score ~ 0.89", "Hyperparameter tuning (# neighbors)", "Evaluated with R² and MSE"],
    links: {
      code: "https://github.com/sampath402003",
      demo: ""
    }
  },
  {
    title: "PAN Card Tampering Detection", 
    tags: ["Computer Vision", "OpenCV", "SSIM"],
    description:
      "Built a computer-vision system to detect tampering in PAN card images using OpenCV. Compared original vs tampered images via preprocessing and SSIM; highlighted altered regions with masks and bounding boxes.",
    highlights: ["SSIM-based difference scoring", "Difference masks + bounding boxes", "Fraud detection use case"],
    links: {
      code: "https://github.com/sampath402003",
      demo: ""
    }
  },
  {
    title: "Automated Disease Prediction (Heart Disease)",
    tags: ["Classification", "Healthcare Analytics", "scikit-learn"],
    description:
      "Developed a disease prediction system using structured medical data: preprocessing, feature selection, EDA, and supervised classification. Evaluated using accuracy, precision, recall, and confusion matrix.",
    highlights: ["End-to-end ML workflow", "Clinical decision support framing", "Multiple classification metrics"],
    links: {
      code: "https://github.com/sampath402003",
      demo: ""
    }
  },
];

const LEADERSHIP = [
  {
    org: "Google Crowdsource — VBIT",
    roles: [
      { title: "Technical Lead", period: "Nov 2024 – May 2025" },
      { title: "Head of Organizing Committee", period: "Oct 2023 – Nov 2024" },
    ],
    bullets: [
      "Led and coordinated technical events, managing planning, scheduling, and on-ground execution.",
      "Organized seminars/workshops on Data Science and AI; mentored juniors in foundational ML and data science.",
      "Coordinated with external stakeholders to deliver large-scale events smoothly.",
    ],
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs text-slate-200">
      {children}
    </span>
  );
}

function Section({ id, title, icon: Icon, children, className }) {
  return (
    <section id={id} className={cn("scroll-mt-28", className)}>
      <div className="mb-6 flex items-center gap-3">
        {Icon ? (
          <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-3 shadow-lg">
            <Icon className="h-5 w-5 text-blue-400" />
          </div>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm p-6 shadow-xl",
        "hover:border-slate-600 hover:shadow-2xl transition-all",
        className
      )}
    >
      {children}
    </div>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="rounded-xl px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800/50 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}

function SocialIconLink({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-800/50 p-3 text-blue-400 shadow-lg hover:shadow-xl hover:border-slate-600 transition-all"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

function CopyField({ label, value, icon: Icon }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1200);
        } catch {
          // ignore
        }
      }}
      className="w-full rounded-2xl border border-slate-700 bg-slate-800/50 p-4 text-left shadow-lg hover:shadow-xl hover:border-slate-600 transition-all"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-2">
          <Icon className="h-4 w-4 text-blue-400" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-xs text-slate-400">{label}</div>
          <div className="truncate text-sm font-medium text-slate-200">{value}</div>
        </div>
        <div className="text-xs font-medium text-blue-400">{copied ? "Copied" : "Copy"}</div>
      </div>
    </button>
  );
}

function ProjectCard({ project }) {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </div>
          {(project.links?.demo || project.links?.code) && (
            <div className="flex items-center gap-2">
              {project.links.demo && (
                <a
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-200 shadow-lg hover:shadow-xl hover:border-slate-600 transition-all"
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {project.links.code && (
                <a
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-200 shadow-lg hover:shadow-xl hover:border-slate-600 transition-all"
                  href={project.links.code}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code <Github className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>

        <p className="text-sm leading-6 text-slate-300">{project.description}</p>

        <ul className="grid gap-2 text-sm text-slate-300">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-400" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

function TimelineItem({ title, subtitle, meta, bullets }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-400" />
      <div className="absolute left-1.5 top-5 h-full w-px bg-slate-700" />
      <div className="flex flex-col gap-1">
        <div className="text-base font-semibold text-white">{title}</div>
        {subtitle ? <div className="text-sm text-slate-300">{subtitle}</div> : null}
        {meta ? <div className="text-xs text-slate-400">{meta}</div> : null}
      </div>
      {bullets?.length ? (
        <ul className="mt-3 grid gap-2 text-sm text-slate-300">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-400" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const fullName = useMemo(
    () => `${PROFILE.firstName} ${PROFILE.lastName}`,
    []
  );

  const nav = useMemo(
    () => [
      { href: "#about", label: "About" },
      { href: "#skills", label: "Skills" },
      { href: "#projects", label: "Projects" },
      { href: "#experience", label: "Experience" },
      { href: "#education", label: "Education" },
      { href: "#certifications", label: "Certifications" },
      { href: "#leadership", label: "Leadership" },
      { href: "#contact", label: "Contact" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-slate-100">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800/50 font-bold text-blue-400">
              {PROFILE.firstName[0]}
              {PROFILE.lastName[0]}
            </div>
            <div>
              <div className="text-sm font-semibold leading-tight text-white">{fullName}</div>
              <div className="text-xs text-slate-400 leading-tight">{PROFILE.title}</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <NavLink key={n.href} href={n.href}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <SocialIconLink href={PROFILE.linkedin} label="LinkedIn" icon={Linkedin} />
            <SocialIconLink href={PROFILE.github} label="GitHub" icon={Github} />
          </div>

          <button
            className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-800/50 p-3 shadow-lg md:hidden"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5 text-slate-200" /> : <Menu className="h-5 w-5 text-slate-200" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-slate-700/50 bg-slate-900/95 backdrop-blur-xl md:hidden">
            <div className="mx-auto max-w-6xl px-4 py-3">
              <div className="grid gap-1">
                {nav.map((n) => (
                  <NavLink
                    key={n.href}
                    href={n.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    {n.label}
                  </NavLink>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <SocialIconLink href={PROFILE.linkedin} label="LinkedIn" icon={Linkedin} />
                <SocialIconLink href={PROFILE.github} label="GitHub" icon={Github} />
              </div>
            </div>
          </div>
        ) : null}
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-4">
        <section className="py-14">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="md:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-xs text-slate-300 shadow-lg">
                <MapPin className="h-4 w-4 text-blue-400" />
                {PROFILE.location}
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {fullName}
              </h1>
              <p className="mt-3 text-lg text-slate-300">{PROFILE.title}</p>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300">
                {PROFILE.summary}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all"
                >
                  View Projects <Code className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/50 px-5 py-3 text-sm font-semibold text-slate-200 shadow-lg hover:shadow-xl hover:border-slate-600 transition-all"
                >
                  Contact <Mail className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <Pill>Machine Learning</Pill>
                <Pill>Data Analysis</Pill>
                <Pill>Reinforcement Learning</Pill>
                <Pill>Computer Vision</Pill>
                <Pill>Cloud</Pill>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="md:col-span-5"
            >
              <Card className="p-5">
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/30">
                    <img 
                      src={profileImage} 
                      alt={fullName}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="grid gap-3">
                    <CopyField label="Email" value={PROFILE.email} icon={Mail} />
                    <CopyField label="Phone" value={PROFILE.phone} icon={Phone} />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-sm font-semibold text-slate-200 shadow-lg hover:shadow-xl hover:border-slate-600 transition-all"
                      href={PROFILE.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-sm font-semibold text-slate-200 shadow-lg hover:shadow-xl hover:border-slate-600 transition-all"
                      href={PROFILE.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <div className="grid gap-14 pb-16">
          <Section id="about" title="About" icon={GraduationCap}>
            <Card>
              <p className="text-sm leading-7 text-slate-300">
                {PROFILE.summary}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/30 p-4">
                  <div className="text-xs font-semibold text-slate-300">What I'm focused on</div>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-300">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-400" />
                      <span>Building ML pipelines from data preprocessing to evaluation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-400" />
                      <span>Applied AI projects across healthcare and cloud workloads</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-400" />
                      <span>Shipping clean, readable code and reproducible results</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/30 p-4">
                  <div className="text-xs font-semibold text-slate-300">Quick info</div>
                  <div className="mt-3 grid gap-2 text-sm text-slate-300">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-400" />
                      <span>{PROFILE.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-blue-400" />
                      <span>MS Information Systems (Expected 2026)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-blue-400" />
                      <span>Open to ML/Data internships & roles</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Section>

          <Section id="skills" title="Skills" icon={Code}>
            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(SKILLS).map(([group, items]) => (
                <Card key={group}>
                  <div className="text-sm font-semibold text-white">{group}</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((s) => (
                      <Pill key={s}>{s}</Pill>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="projects" title="Projects" icon={Code}>
            <div className="grid gap-4 md:grid-cols-2">
              {PROJECTS.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-slate-700 bg-slate-800/50 p-5 text-sm text-slate-300 shadow-lg">
              <div className="font-semibold text-white">Tip to make this stand out</div>
              <div className="mt-2">
                Add 1 GitHub link (repo) + 1 short demo link per project (not required, but it boosts callbacks).
              </div>
            </div>
          </Section>

          <Section id="experience" title="Experience" icon={Briefcase}>
            <Card>
              <div className="grid gap-8">
                {EXPERIENCE.map((e) => (
                  <TimelineItem
                    key={e.company}
                    title={`${e.role} — ${e.company}`}
                    subtitle={""}
                    meta={e.period}
                    bullets={e.bullets}
                  />
                ))}
              </div>
            </Card>
          </Section>

          <Section id="education" title="Education" icon={GraduationCap}>
            <div className="grid gap-4 md:grid-cols-2">
              {EDUCATION.map((ed) => (
                <Card key={ed.school}>
                  <div className="text-base font-semibold text-white">{ed.school}</div>
                  <div className="mt-1 text-sm text-slate-300">{ed.degree}</div>
                  <div className="mt-2 text-xs text-slate-400">{ed.location} • {ed.year}</div>

                  <div className="mt-4">
                    <div className="text-xs font-semibold text-slate-300">Relevant coursework</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {ed.coursework.map((c) => (
                        <Pill key={c}>{c}</Pill>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="certifications" title="Certifications" icon={Award}>
            <Card>
              <div className="grid gap-3 sm:grid-cols-2">
                {CERTIFICATIONS.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-2xl border border-slate-700 bg-slate-900/30 p-4"
                  >
                    <div className="text-sm font-semibold text-white">{c.name}</div>
                    <div className="mt-1 text-xs text-slate-400">{c.issuer}</div>
                  </div>
                ))}
              </div>
            </Card>
          </Section>

          <Section id="leadership" title="Leadership" icon={Briefcase}>
            <div className="grid gap-4">
              {LEADERSHIP.map((l) => (
                <Card key={l.org}>
                  <div className="text-base font-semibold text-white">{l.org}</div>
                  <div className="mt-3 grid gap-2">
                    {l.roles.map((r) => (
                      <div key={r.title} className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900/30 px-4 py-3">
                        <div className="text-sm font-medium text-white">{r.title}</div>
                        <div className="text-xs text-slate-400">{r.period}</div>
                      </div>
                    ))}
                  </div>
                  <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                    {l.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="contact" title="Contact" icon={Mail}>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <div className="text-sm font-semibold text-white">Let's connect</div>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  If you're hiring for Machine Learning / Data roles, I'd love to chat. The fastest way to reach me is email.
                </p>
                <div className="mt-5 grid gap-3">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all"
                  >
                    Email me <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/50 px-5 py-3 text-sm font-semibold text-slate-200 shadow-lg hover:shadow-xl hover:border-slate-600 transition-all"
                  >
                    Message on LinkedIn <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </Card>

              <Card>
                <div className="text-sm font-semibold text-white">Contact details</div>
                <div className="mt-4 grid gap-3">
                  <CopyField label="Email" value={PROFILE.email} icon={Mail} />
                  <CopyField label="Phone" value={PROFILE.phone} icon={Phone} />
                </div>
                <div className="mt-5">
                  <a
                    href="/resume.pdf"
                    download="Chavali_Surya_Sairama_Sampath_Resume.pdf"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/50 px-5 py-3 text-sm font-semibold text-slate-200 shadow-lg hover:shadow-xl hover:border-slate-600 transition-all"
                  >
                    Download Resume <Award className="h-4 w-4" />
                  </a>
                </div>
              </Card>
            </div>
          </Section>

          <footer className="pb-10 pt-4">
            <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-700/50 pt-6 text-xs text-slate-400 sm:flex-row">
              <div>© {new Date().getFullYear()} {fullName}. All rights reserved.</div>
              <div className="flex items-center gap-3">
                <a className="hover:text-slate-200 transition-colors" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="hover:text-slate-200 transition-colors" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}