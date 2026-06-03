import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
