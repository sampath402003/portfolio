import React, { useState } from "react";
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
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
} from "lucide-react";

const PROFILE = {
  firstName: "Surya Sairama Sampath",
  lastName: "Chavali",
  title: "Graduate Student (MSIS) • Machine Learning & Data Science",
  location: "College Park, Maryland, USA",
  phone: "+1 (227) 259-9116",
  email: "chavalisampath25@gmail.com",
  linkedin: "https://www.linkedin.com/in/surya-sairam-sampath",
  github: "https://github.com/sampath402003",
  tagline: "ML Engineer | Cloud Enthusiast",
  heroTitle: "I'm Surya Sairama Sampath", 
  heroName: "Building ML-Driven, Data-Powered Solutions",
  heroDescription:
    "MS Information Systems graduate student with hands-on experience in machine learning, data analysis, and applied AI. Experienced in building end-to-end data-driven solutions, with a strong interest in AI, machine learning, and data science roles.",
};

const SKILLS = {
  Programming: ["Python", "Java", "C"],
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
  Tools: ["Jupyter Notebook", "Google Colab", "Git", "Visual Studio Code"],
  Cloud: ["Microsoft Azure", "AWS (EC2, IAM)", "Google Cloud Platform"],
  "Computer Vision": ["OpenCV", "Image Processing"],
  "Project & Process": [
    "Project Management Fundamentals",
    "Agile Concepts",
    "Stakeholder Coordination",
  ],
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
      demo: "",
    },
  },
  {
    title: "USA Housing Price Prediction (KNN Regression)",
    tags: ["Machine Learning", "Regression", "scikit-learn"],
    description:
      "Developed a KNN regression model to predict housing prices on the USA Housing dataset, performing preprocessing, scaling, EDA, and hyperparameter tuning.",
    highlights: [
      "R² score ~ 0.89",
      "Hyperparameter tuning (# neighbors)",
      "Evaluated with R² and MSE",
    ],
    links: {
      code: "https://github.com/sampath402003",
      demo: "",
    },
  },
  {
    title: "PAN Card Tampering Detection",
    tags: ["Computer Vision", "OpenCV", "SSIM"],
    description:
      "Built a computer-vision system to detect tampering in PAN card images using OpenCV. Compared original vs tampered images via preprocessing and SSIM; highlighted altered regions with masks and bounding boxes.",
    highlights: [
      "SSIM-based difference scoring",
      "Difference masks + bounding boxes",
      "Fraud detection use case",
    ],
    links: {
      code: "https://github.com/sampath402003",
      demo: "",
    },
  },
  {
    title: "Automated Disease Prediction (Heart Disease)",
    tags: ["Classification", "Healthcare Analytics", "scikit-learn"],
    description:
      "Developed a disease prediction system using structured medical data: preprocessing, feature selection, EDA, and supervised classification. Evaluated using accuracy, precision, recall, and confusion matrix.",
    highlights: [
      "End-to-end ML workflow",
      "Clinical decision support framing",
      "Multiple classification metrics",
    ],
    links: {
      code: "https://github.com/sampath402003",
      demo: "",
    },
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

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const fullName = `${PROFILE.firstName} ${PROFILE.lastName}`;

  const nav = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-orange-500 font-bold text-white">
              SC
            </div>
            <span className="text-xl font-bold text-gray-900">PORTFOLIO</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-gray-700 hover:text-red-500 transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a
  href="resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2 text-white font-semibold"
>


            <Award className="h-4 w-4" />
            Download Resume
          </a>

          <button
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white p-2 md:hidden"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-gray-700" />
            ) : (
              <Menu className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-gray-200 bg-white md:hidden">
            <div className="px-6 py-4">
              <div className="grid gap-3">
{nav.map((n) => (
  <a
    key={n.href}
    href={n.href}
    onClick={() => setMobileOpen(false)}
    className="text-sm font-medium text-gray-700 hover:text-red-500 transition-colors"
  >
    {n.label}
  </a>
))}
<a
  href="portfolio/public/Chavali_Surya_Sairama_Sampath_MSIS_Machine_Learning.pdf"
  download="Chavali_Surya_Sairama_Sampath_Resume.pdf"
  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 text-white font-semibold"
>
  <Award className="h-4 w-4" />
  Download Resume
</a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-6">
        <section id="home" className="py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-medium text-red-600">
                {PROFILE.tagline}
              </div>

              <h1 className="text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
                {PROFILE.heroTitle}
              </h1>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl text-neutral-800">
                {PROFILE.heroName}
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
                {PROFILE.heroDescription}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  View My Work <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-900 bg-white px-8 py-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-all"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-red-100 to-orange-100 opacity-60 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 p-8 shadow-2xl">
                <img
                  src={profileImage}
                  alt={fullName}
                  className="w-full h-auto rounded-2xl object-cover shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded-lg bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-600">
                About Me
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Designing With Passion While Exploring The World
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                I'm a passionate Machine Learning Engineer and Data Scientist focused on
                building intelligent systems that solve real-world problems. With
                expertise in Python, supervised learning, and reinforcement learning,
                I create end-to-end ML solutions across healthcare and cloud domains.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-red-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      End-to-End ML Pipelines
                    </h3>
                    <p className="text-gray-600">
                      From data preprocessing to model evaluation and deployment
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="mt-1 h-6 w-6 flex-shrink-0 text-red-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Applied AI Projects
                    </h3>
                    <p className="text-gray-600">
                      Healthcare analytics and cloud resource optimization
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="mt-1 h-6 w-6 flex-shrink-0 text-red-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Clean, Production-Ready Code
                    </h3>
                    <p className="text-gray-600">
                      Reproducible results with best practices
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4 inline-block rounded-lg bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-600">
                Get In Touch
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Any Type Of Query & Discussion
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Looking for opportunities in Machine Learning and Data Science roles.
                Let's discuss how I can contribute to your team!
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-red-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Email</div>
                    <div className="font-semibold text-gray-900">{PROFILE.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${PROFILE.phone}`}
                  className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-red-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Phone</div>
                    <div className="font-semibold text-gray-900">{PROFILE.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Location</div>
                    <div className="font-semibold text-gray-900">{PROFILE.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl">
          <div className="px-6">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-block rounded-lg bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-600">
                My Skills
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Technical Expertise
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Specialized skills across machine learning, data science, and cloud computing
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(SKILLS).map(([category, skills]) => (
                <div
                  key={category}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-orange-500 p-3">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-lg bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-600">
              Projects
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
            <p className="mt-4 text-lg text-gray-600">
              Machine learning and AI solutions I've built
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-gray-600">{project.description}</p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {project.links.code && (
                  <div className="mt-6">
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700"
                    >
                      View Code <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-lg bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-600">
              Education
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Academic Background</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {EDUCATION.map((edu) => (
              <div
                key={edu.school}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-orange-500 p-3">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{edu.school}</h3>
                <p className="mt-2 text-gray-700">{edu.degree}</p>
                <p className="mt-1 text-sm text-gray-500">
                  {edu.location} • {edu.year}
                </p>

                <div className="mt-6">
                  <div className="text-sm font-semibold text-gray-900">
                    Relevant Coursework:
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-xs text-gray-700"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="rounded-3xl bg-gradient-to-br from-red-500 to-orange-500 p-12 text-center shadow-2xl">
            <h2 className="text-4xl font-bold text-white">Let's Work Together</h2>
            <p className="mt-4 text-lg text-red-50">
              Open to Machine Learning and Data Science opportunities
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-white px-8 py-3.5 text-base font-semibold text-red-600 hover:bg-red-50 transition-all"
              >
                <Mail className="h-5 w-5" /> Email Me
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-3.5 text-base font-semibold text-white hover:bg-white hover:text-red-600 transition-all"
              >
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-3.5 text-base font-semibold text-white hover:bg-white hover:text-red-600 transition-all"
              >
                <Github className="h-5 w-5" /> GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-center sm:flex-row">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} {fullName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-600 hover:text-red-600 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-600 hover:text-red-600 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}