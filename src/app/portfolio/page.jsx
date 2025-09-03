"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";

const projects = [
  
  {
    title: "Hermes",
    description: "Campus Placement CRM frontend demo built using react.js",
    image: "https://res.cloudinary.com/campus-placement/image/upload/v1756938205/Screenshot_2025-09-04_at_3.49.54_AM_c0fgk9.png",
    githubLink: "https://github.com/abhishiktemmanuel/Campus-Placement-SaaS.git",
    publicLink: "https://campus-placement-saas.vercel.app",
    demoEmail: "as@as.com",
    demoPassword: "123456",
  },
  {
    title: "Nuncio",
    description:
      "Efficiently manage and allocate invigilation duties for your school examinations with our SaaS solution. Built using MERN stack.",
    image: "https://res.cloudinary.com/campus-placement/image/upload/v1756942014/Screenshot_2025-09-04_at_4.56.25_AM_vtchvd.png",
    githubLink: "https://github.com/abhishiktemmanuel/duty-allocator.git",
    publicLink: "https://nuncio.abhishikt.com/login",
    demoEmail: "mwmw@gmail.com",
    demoPassword: "123456",
  },
  {
    title: "Women Complaint Portal",
    description: "PHP based Women Complaint Portal",
    image: "https://res.cloudinary.com/campus-placement/image/upload/v1756938205/Screenshot_2025-09-04_at_3.46.12_AM_kv8ncy.png",
    githubLink:
      "https://github.com/abhishiktemmanuel/women-complaint-portal.git",
    publicLink:
      "https://women-complaint-portal.vercel.app/login-register/index.html#",
    demoEmail: "",
    demoPassword: "",
  },
];

function ProjectCard({ project, onShowModal }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="relative overflow-hidden w-full h-48">
        <img
          src={project.image || "/placeholder.png"}
          alt={`Preview of ${project.title}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => onShowModal(project)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Live
          </button>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPassword, setCopiedPassword] = useState(false);

  const filteredProjects = projects.filter((p) =>
    activeTab === "all" ? true : p.tags?.includes(activeTab)
  );

  // Robust copy helper: uses Clipboard API when available, falls back otherwise.
  const copyText = async (text, onDone) => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for http or older browsers
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      onDone?.();
    } catch {
      // Last-resort fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      onDone?.();
    }
  };

  const handleCopyEmail = () => {
    copyText(selectedProject.demoEmail, () => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 1200);
    });
  };

  const handleCopyPassword = () => {
    copyText(selectedProject.demoPassword, () => {
      setCopiedPassword(true);
      setTimeout(() => setCopiedPassword(false), 1200);
    });
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen">
      <main className="container mx-auto px-4 py-16 pt-32 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            My Projects
          </h1>
          <p className="mt-4 text-lg font-light text-neutral-400 md:text-xl">
            A selection of my recent work showcasing my passion for building
            beautiful and functional web applications.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onShowModal={setSelectedProject}
            />
          ))}
        </section>
      </main>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-credentials-title"
        >
          <div className="bg-gray-900 rounded-2xl shadow-lg p-8 max-w-md w-full relative">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
              aria-label="Close"
            >
              ✕
            </button>

            <h2 id="demo-credentials-title" className="text-2xl font-bold mb-4">
              {selectedProject.title} Demo Credentials
            </h2>
            <p className="text-gray-400 mb-6">
              Use the following credentials to explore the demo:
            </p>

            <div className="space-y-4">
              <div className="flex justify-between items-center bg-gray-800 px-4 py-3 rounded">
                <span className="truncate">
                  <span className="text-gray-400">Email:</span>{" "}
                  {selectedProject.demoEmail}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="min-w-[84px] text-sm px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
                  aria-live="polite"
                >
                  {copiedEmail ? "Copied!" : "Copy"}
                </button>
              </div>

              <div className="flex justify-between items-center bg-gray-800 px-4 py-3 rounded">
                <span className="truncate">
                  <span className="text-gray-400">Password:</span>{" "}
                  {selectedProject.demoPassword}
                </span>
                <button
                  type="button"
                  onClick={handleCopyPassword}
                  className="min-w-[84px] text-sm px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
                  aria-live="polite"
                >
                  {copiedPassword ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            <a
              href={selectedProject.publicLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block w-full text-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Continue to Live Demo
            </a>

            <p className="sr-only" role="status" aria-live="polite">
              {copiedEmail || copiedPassword ? "Copied to clipboard" : ""}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
