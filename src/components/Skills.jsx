import {
    Code2,
    Database,
    GitBranch,
    Layers,
    Server,
    Wrench,
  } from "lucide-react";
  
  import { skills } from "../data/portfolioData";
  
  const skillGroups = [
    {
      title: "Programming",
      icon: Code2,
      items: skills.programming,
    },
    {
      title: "Frontend",
      icon: Layers,
      items: skills.frontend,
    },
    {
      title: "React",
      icon: Code2,
      items: skills.react,
    },
    {
      title: "Backend",
      icon: Server,
      items: skills.backend,
    },
    {
      title: "Database",
      icon: Database,
      items: skills.database,
    },
    {
      title: "Tools & Dev",
      icon: Wrench,
      items: skills.tools,
    },
    {
      title: "Data Science",
      icon: GitBranch,
      items: skills.dataScience,
    },
    {
      title: "Programming Concepts",
      icon: Code2,
      items: skills.concepts,
    },
  ];
  
  function Skills() {
    return (
      <section id="skills" className="border-t border-slate-900 bg-slate-950/60 py-24">
        <div className="section-container">
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Skills
            </p>
  
            <h2 className="text-3xl font-bold sm:text-4xl">
              Technologies I work with
            </h2>
  
            <p className="mt-4 max-w-2xl text-slate-400">
              A collection of technologies, tools and development
              concepts I have worked with across my projects and
              professional experience.
            </p>
          </div>
  
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => {
              const Icon = group.icon;
  
              return (
                <div
                  key={group.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-blue-500/30"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                      <Icon size={20} />
                    </div>
  
                    <h3 className="font-semibold">
                      {group.title}
                    </h3>
                  </div>
  
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;