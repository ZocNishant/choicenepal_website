import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="About Us" title="Know more about Manabiyasewa" />
        <About />
        <Title subtitle="Projects" title="What we do" />
        <Projects />
        <Title
          subtitle="Gallery"
          title="Pictures from the different projects we are involed in"
        />
        <Gallery />
        <Title subtitle="Testimonials" title="What people says" />
        <Testimonials />
        <Title subtitle="Contact Us" title="Have a word with us" />
        <Contact />
      </div>
        <Footer />
    </>
  );
};

export default App;
