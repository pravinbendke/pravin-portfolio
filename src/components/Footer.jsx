import {
    Mail,
    ArrowUp,
  } from "lucide-react";
  import {
    FaGithub,
    FaLinkedin,
  } from "react-icons/fa";
  import { personalInfo } from "../data/portfolioData";

  function Footer() {
    return (
      <footer className="border-t border-slate-900 bg-slate-950">
        <div className="section-container py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <p className="font-semibold">
                Pravin S. Bendke
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Python / React Developer
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-800 p-2.5 text-slate-400 transition hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-800 p-2.5 text-slate-400 transition hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="rounded-lg border border-slate-800 p-2.5 text-slate-400 transition hover:text-blue-400"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="#home"
                className="rounded-lg border border-slate-800 p-2.5 text-slate-400 transition hover:text-white"
                aria-label="Back to top"
              >
                <ArrowUp size={18} />
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-900 pt-6 text-center text-xs text-slate-600">
            © {new Date().getFullYear()} Pravin S. Bendke. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;