import {
    BriefcaseBusiness,
    CalendarDays,
    MapPin,
  } from "lucide-react";
  
  import { experiences } from "../data/portfolioData";
  
  function Experience() {
    return (
      <section
        id="experience"
        className="border-t border-slate-900 py-24"
      >
        <div className="section-container">
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Experience
            </p>
  
            <h2 className="text-3xl font-bold sm:text-4xl">
              Professional Experience
            </h2>
          </div>
  
          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-slate-800 md:block" />
  
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={`${experience.company}-${index}`}
                  className="relative md:pl-14"
                >
                  <div className="absolute left-0 top-1 hidden h-9 w-9 items-center justify-center rounded-full border border-blue-500/40 bg-slate-950 text-blue-400 md:flex">
                    <BriefcaseBusiness size={17} />
                  </div>
  
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
                    <div className="flex flex-col justify-between gap-5 lg:flex-row">
                      <div>
                        <p className="text-sm font-medium text-blue-400">
                          {experience.role}
                        </p>
  
                        <h3 className="mt-2 text-2xl font-bold">
                          {experience.company}
                        </h3>
                      </div>
  
                      <div className="flex flex-col gap-2 text-sm text-slate-400">
                        <span className="flex items-center gap-2">
                          <CalendarDays size={16} />
                          {experience.duration}
                        </span>
  
                        <span className="flex items-center gap-2">
                          <MapPin size={16} />
                          {experience.location}
                        </span>
                      </div>
                    </div>
  
                    <p className="mt-6 leading-7 text-slate-400">
                      {experience.description}
                    </p>
  
                    <div className="mt-7">
                      <h4 className="mb-4 text-sm font-semibold text-slate-200">
                        Key Responsibilities
                      </h4>
  
                      <ul className="grid gap-3 md:grid-cols-2">
                        {experience.responsibilities.map(
                          (responsibility) => (
                            <li
                              key={responsibility}
                              className="flex gap-3 text-sm leading-6 text-slate-400"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                              <span>{responsibility}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
  
                    <div className="mt-7 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 text-xs text-blue-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Experience;