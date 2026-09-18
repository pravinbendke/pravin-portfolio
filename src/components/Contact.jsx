import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-900 bg-slate-950/60 py-16 sm:py-20 lg:py-24"
    >
      <div className="section-container">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center sm:mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Contact
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Let's build something together
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              I'm open to discussing software development opportunities,
              interesting projects and collaborations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-blue-500/30 sm:p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Mail size={21} />
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-slate-600 transition group-hover:text-blue-400"
                />
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Email
              </p>

              <p className="mt-1 break-all text-sm font-medium text-slate-200 sm:text-base">
                {personalInfo.email}
              </p>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-blue-500/30 sm:p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <FaLinkedin size={21} />
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-slate-600 transition group-hover:text-blue-400"
                />
              </div>

              <p className="mt-5 text-sm text-slate-500">
                LinkedIn
              </p>

              <p className="mt-1 text-sm font-medium text-slate-200 sm:text-base">
                Pravin S. Bendke
              </p>
            </a>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <MapPin size={21} />
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Location
              </p>

              <p className="mt-1 text-sm font-medium text-slate-200 sm:text-base">
                Nashik, Maharashtra, India
              </p>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-blue-500/30 sm:p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <FaGithub size={21} />
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-slate-600 transition group-hover:text-blue-400"
                />
              </div>

              <p className="mt-5 text-sm text-slate-500">
                GitHub
              </p>

              <p className="mt-1 break-all text-sm font-medium text-slate-200 sm:text-base">
                github.com/pravinbendke
              </p>
            </a>
          </div>

          <div className="mt-8 text-center sm:mt-10">
            <a
              href={`mailto:${personalInfo.email}?subject=Portfolio%20Opportunity`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-3 font-medium transition hover:bg-blue-500 sm:w-auto"
            >
              Send Me an Email
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;