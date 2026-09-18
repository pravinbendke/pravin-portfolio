import {
    Code2,
    Database,
    Server,
    Sparkles,
  } from "lucide-react";
  
  function About() {
    const cards = [
      {
        icon: Code2,
        title: "Frontend Development",
        text: "Building responsive and reusable interfaces using React, JavaScript, Tailwind CSS and shadcn/ui.",
      },
      {
        icon: Server,
        title: "Backend Development",
        text: "Developing backend applications and REST APIs using Python, Django and MVT architecture.",
      },
      {
        icon: Database,
        title: "Database",
        text: "Working with MySQL, SQLite, Django ORM and CRUD operations for application data management.",
      },
      {
        icon: Sparkles,
        title: "Problem Solving",
        text: "Focused on debugging, clean code, maintainable architecture and solving real-world development problems.",
      },
    ];
  
    return (
      <section id="about" className="border-t border-slate-900 py-24">
        <div className="section-container">
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
              About Me
            </p>
  
            <h2 className="text-3xl font-bold sm:text-4xl">
              Building useful software with{" "}
              <span className="text-blue-400">modern technologies.</span>
            </h2>
          </div>
  
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="leading-8 text-slate-400">
                I'm a Python/React Developer with hands-on experience
                in full-stack web application development. My development
                experience includes React, JavaScript, Python, Django,
                MySQL and REST APIs.
              </p>
  
              <p className="mt-5 leading-8 text-slate-400">
                In my current role as a React Developer, I work on
                reusable components, API integration, product management
                interfaces, search, filtering, pagination and responsive
                UI development.
              </p>
  
              <p className="mt-5 leading-8 text-slate-400">
                I enjoy learning new technologies, debugging complex
                problems and building applications that are simple,
                scalable and easy to maintain.
              </p>
            </div>
  
            <div className="grid gap-4 sm:grid-cols-2">
              {cards.map((card) => {
                const Icon = card.icon;
  
                return (
                  <div
                    key={card.title}
                    className="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <Icon size={22} />
                    </div>
  
                    <h3 className="mb-3 font-semibold">
                      {card.title}
                    </h3>
  
                    <p className="text-sm leading-6 text-slate-400">
                      {card.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;