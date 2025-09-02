"use client";

import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJest,
  SiCypress,
  SiFigma,
  SiAppwrite,
  SiAngular,
  SiSvelte,
  SiKotlin,
  SiFlutter,
  SiJetpackcompose,
  SiIonic,
  SiJunit5,
  SiDocker,
  SiGit,
  SiPostman,
  SiKubernetes,
  SiGoogle,
  SiHtml5,
  SiUdacity,
  SiCisco,
  SiHuggingface,
} from "react-icons/si";
import me from "../../public/me.png";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const projects = [
    {
      title: "SharpDine",
      description: "A restaurant discovery app with user reviews and ratings.",
      tech: ["React Native", "Firebase", "Tailwind CSS", "Context API"],
      github: "https://github.com/Horllymobile/sharpdine",
      demo: "https://dev.sharpdine.com/",
    },
    {
      title: "CASA Website",
      description: "Official website for a financial services company.",
      tech: ["Next.js", "Sanity", "Tailwind CSS"],
      demo: "http://mycasabank.com/",
    },
    {
      title: "Video Status Chunker",
      description:
        "Video status chunker app for WhatsApp with offline support.",
      tech: ["Kotlin", "Android", "Jetpack Compose"],
      github: "https://github.com/Horllymobile/status-video-trimmer",
      demo: "https://expo.dev/@abraham/video-status-chunker",
    },
    {
      title: "Casa MFB Admin Dashboard",
      description:
        "Admin dashboard for managing user accounts and transactions.",
      tech: [
        "API",
        "React",
        "TypeScript",
        "Zod",
        "Tailwind CSS",
        "Tanstack Query",
      ],
      demo: "https://staging-admin.mycasabank.com/",
    },
  ];

  const experiences = [
    {
      role: "Senior Frontend Engineer",
      company: "Finceptive",
      period: "April 2025 - August 2025",
      highlights: [
        "Led UI/UX overhaul of core banking dashboard using React & TypeScript.",
        "Improved performance by 40% via code-splitting and lazy loading.",
        "Mentored 3 junior developers in modern frontend practices.",
        "Collaborated with backend team to design scalable RESTful APIs.",
        "Built the newly launched fintech app website.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Vendease",
      period: "2020 – 2022",
      highlights: [
        "Built scalable product catalog with dynamic filtering and search.",
        "Collaborated with UX team to deliver accessible, mobile-first designs.",
        "Collaborated with backend team to integrate RESTful APIs.",
        "Collaborated with QA team to ensure high-quality deliverables.",
        "Participated in code reviews and contributed to team knowledge sharing.",
        "Collaborated with other frontend developers to create a cohesive design system.",
        "Delivered an E-procurement platform with real-time tracking and analytics.",
      ],
    },
    {
      role: "Frontend Intern",
      company: "Vendease",
      period: "2022 – 2023",
      highlights: [
        "Converted Figma designs into responsive Angular components.",
        "Implemented unit and integration tests with Jest and Angular Testing Library.",
        "Contributed to internal design system with reusable UI components.",
        "Built a new website for Vendease, e-procurement platform.",
      ],
    },
  ];

  const certifications = [
    {
      name: "Web Development",
      issuer: "IBM",
      // logo: <SiInter className="text-cyan-500" />,
    },
    {
      name: "AI Agents Fundamentals",
      issuer: "Hugging Face",
      logo: <SiHuggingface className="text-cyan-500" />,
    },
    {
      name: "Networking Basics",
      issuer: "Cisco",
      logo: <SiCisco className="text-cyan-500" />,
    },
    {
      name: "Mobile Web Developer",
      issuer: "Google Africa Developer",
      logo: <SiGoogle className="text-blue-600" />,
    },
    {
      name: "Web Development with HTML and CSS",
      issuer: "Betterchalk",
      logo: <SiHtml5 className="text-cyan-500" />,
    },
    {
      name: "AWS Machine Learning Foundation 2022",
      issuer: "Udacity",
      logo: <SiUdacity className="text-orange-500" />,
    },
    {
      name: "Cloud DevOps Engineer",
      issuer: "Udacity",
      logo: <SiUdacity className="text-orange-500" />,
    },
    {
      name: "Cloud Developer",
      issuer: "Udacity",
      logo: <SiUdacity className="text-orange-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Header & Nav */}
      <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b dark:border-gray-700">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl font-bold">Horllymobile</h1>
          </Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-24 pb-16">
        {/* Hero Section */}
        <section id="home" className="py-20 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Abraham James</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Software Developer
          </p>
          <p className="text-lg mb-8 leading-relaxed">
            Based in Lagos, Nigeria. Building performant, accessible, and
            user-centric software experiences with modern tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition text-center"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition text-center"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="mb-4 leading-relaxed">
                I&apos;m a Software Developer with 5+ years of experience
                crafting clean, scalable softwares for startups and tech-driven
                organizations. I thrive in collaborative environments and focus
                on writing maintainable code with strong attention to detail.
              </p>
              <p className="mb-4">
                My approach combines modern frameworks with performance-first
                practices to deliver fast, accessible, and delightful
                experiences.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Angular",
                  "React Native",
                  "Firebase",
                  "Tailwind CSS",
                  "Svelte",
                  "SvelteKit",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <Image
                src={me.src}
                width={me.width}
                height={me.height}
                alt="Abraham James"
                className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-blue-500"
              />
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Lagos, Nigeria 🇳🇬
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Frontend",
                icons: [
                  <SiReact key="react" title="React" />,
                  <SiNextdotjs key="nextjs" title="Next.js" />,
                  <SiTypescript key="typescript" title="TypeScript" />,
                  <SiTailwindcss key="tailwindcss" title="Tailwind CSS" />,
                  <SiSvelte key="svelte" title="Svelte" />,
                  <SiAngular key="angular" title="Angular" />,
                ],
              },
              {
                title: "Backend",
                icons: [
                  <SiNodedotjs key="nodejs" title="Node.js" />,
                  <SiExpress key="express" title="Express" />,
                  <SiFirebase key="firebase" title="Firebase" />,
                  <SiMongodb key="mongodb" title="MongoDB" />,
                ],
              },
              {
                title: "Mobile",
                icons: [
                  <SiReact key="react-native" title="React Native" />,
                  <SiIonic key="ionic" title="Ionic" />,
                  <SiKotlin key="kotlin" title="Kotlin" />,
                  <SiFlutter key="flutter" title="Flutter" />,
                  <SiJetpackcompose
                    key="jetpack-compose"
                    title="Jetpack Compose"
                  />,
                ],
              },
              {
                title: "Tools",
                icons: [
                  <SiFigma key="figma" title="Figma" />,
                  <SiFirebase key="firebase" title="Firebase" />,
                  <SiAppwrite key="appwrite" title="Appwrite" />,
                  <SiDocker key="docker" title="Docker" />,
                  <SiPostman key="postman" title="Postman" />,
                  <SiGit key="git" title="Git" />,
                  <SiKubernetes key="kubernetes" title="Kubernetes" />,
                ],
              },
              {
                title: "Testing",
                icons: [
                  <SiJest key="jest" title="Jest" />,
                  <SiCypress key="cypress" title="Cypress" />,
                  <SiJunit5 key="junit5" title="JUnit 5" />,
                ],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.icons.map((icon, i) => (
                    <span
                      key={i}
                      className="text-2xl text-gray-600 dark:text-gray-300"
                    >
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-6 ml-4 space-y-10 relative">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="w-3 h-3 bg-blue-600 rounded-full absolute -left-5 mt-1"></div>
                  <h3 className="font-bold text-lg">{exp.role}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.company} · {exp.period}
                  </p>
                  <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    {exp.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Certifications
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow text-center w-48 hover:shadow-md transition"
              >
                <div className="text-4xl mb-2">{cert.logo}</div>
                <h4 className="font-medium">{cert.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <p className="mb-6 leading-relaxed">
                I&apos;m open to freelance opportunities, collaborations, or
                just a chat about frontend development. Feel free to reach out!
              </p>
              <div className="flex space-x-6 text-2xl">
                <a
                  href="https://github.com/abrahamjames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-500 dark:hover:text-gray-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/abrahamjames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:abraham@james.dev"
                  className="hover:text-red-500"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
            <form
              action="https://formspree.io/f/mzzajddy"
              method="POST"
              className="space-y-4"
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center text-gray-600 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Abraham James. Built with Next.js,
        React & Tailwind CSS.
      </footer>
    </div>
  );
}
