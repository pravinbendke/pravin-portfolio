import { Contact } from "lucide-react";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;