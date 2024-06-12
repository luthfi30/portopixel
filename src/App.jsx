import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./Services";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Blog />
      <Partners />
      <Contact />
      <div className="h-20"></div>
      <Footer />
    </div>
  );
}

export default App;
