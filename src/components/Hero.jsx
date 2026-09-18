import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-background opacity-60" />
      <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="section-container relative z-10 w-full py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Available for opportunities
            </div>

            <p className="mb-4 text-base font-medium text-blue-400 sm:text-lg">
              Hello, I'm
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              Pravin S. <span className="gradient-text">Bendke</span>
            </h1>

            <h2 className="mt-5 text-xl font-semibold text-slate-300 sm:text-2xl md:text-3xl">
              Python / React Developer
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
              Python/React Developer with hands-on experience building
              full-stack web applications using Python, Django, React,
              MySQL, and REST APIs. I enjoy creating responsive user
              interfaces, integrating APIs, and building clean and
              maintainable software solutions.
            </p>

            <div className="mt-6 flex flex-col items-center gap-3 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0 text-blue-400" />
                {personalInfo.location}
              </span>

              <span className="hidden text-slate-600 sm:block">•</span>

              <span className="flex items-center gap-2 break-all">
                <Mail size={16} className="shrink-0 text-blue-400" />
                {personalInfo.email}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium transition duration-300 hover:bg-blue-500"
              >
                View My Work
                <ArrowDown size={18} />
              </a>

              <a
                href="/PravinBendke_9767196869 (1).pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 font-medium transition duration-300 hover:border-blue-500 hover:bg-slate-800"
              >
                Download Resume
                <Download size={18} />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-800 p-3 text-slate-400 transition duration-300 hover:border-slate-600 hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-800 p-3 text-slate-400 transition duration-300 hover:border-blue-500 hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="rounded-lg border border-slate-800 p-3 text-slate-400 transition duration-300 hover:border-blue-500 hover:text-blue-400"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 scale-90 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="relative rounded-full border border-blue-500/20 p-2 sm:p-3">
                <img
                  src="/PROFILE.jpeg"
                  alt="Pravin S. Bendke"
                  className="h-56 w-56 rounded-full object-cover shadow-2xl shadow-blue-500/20 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;