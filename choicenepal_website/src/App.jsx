import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Projects" title="What we do" />
        <Projects />
      </div>
    </>
  );
};

export default App;
