import {
    ArrowUpRight,
    CheckCircle2,
    Code2,
  } from "lucide-react";
  
  import { projects } from "../data/portfolioData";
  
  function Projects() {
    return (
      <section
        id="projects"
        className="border-t border-slate-900 bg-slate-950/60 py-24"
      >
        <div className="section-container">
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Projects
            </p>
  
            <h2 className="text-3xl font-bold sm:text-4xl">
              Featured Projects
            </h2>
  
            <p className="mt-4 max-w-2xl text-slate-400">
              Some of the applications and interfaces I have worked
              on using modern frontend and backend technologies.
            </p>
          </div>
  
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 transition duration-300 hover:-translate-y-2 hover:border-blue-500/30"
              >
                <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950">
                  <div className="absolute inset-0 grid-background opacity-30" />
  
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                    <Code2 size={30} />
                  </div>
  
                  <span className="absolute right-4 top-4 rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs text-slate-300">
                    {project.category}
                  </span>
                </div>
  
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold">
                      {project.title}
                    </h3>
  
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-slate-600 transition group-hover:text-blue-400"
                    />
                  </div>
  
                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>
  
                  <div className="mt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Key Features
                    </p>
  
                    <div className="space-y-2">
                      {project.features.slice(0, 5).map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-slate-400"
                        >
                          <CheckCircle2
                            size={15}
                            className="text-blue-400"
                          />
  
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
  
                  <div className="mt-auto pt-7">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md bg-slate-950 px-2.5 py-1.5 text-xs text-slate-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;