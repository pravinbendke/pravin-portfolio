import {
    GraduationCap,
    MapPin,
    Calendar,
  } from "lucide-react";
  
  import { education } from "../data/portfolioData";
  
  function Education() {
    return (
      <section
        id="education"
        className="border-t border-slate-900 py-24"
      >
        <div className="section-container">
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Education
            </p>
  
            <h2 className="text-3xl font-bold sm:text-4xl">
              Academic Background
            </h2>
          </div>
  
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <div
                key={item.degree}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 transition hover:border-blue-500/30"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <GraduationCap size={24} />
                  </div>
  
                  <div>
                    <h3 className="text-xl font-bold">
                      {item.degree}
                    </h3>
  
                    <p className="mt-2 leading-6 text-slate-400">
                      {item.institute}
                    </p>
  
                    <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-2">
                        <Calendar size={15} />
                        {item.year}
                      </span>
  
                      <span className="flex items-center gap-2">
                        <MapPin size={15} />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Education;