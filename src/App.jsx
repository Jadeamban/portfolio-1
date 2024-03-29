import React from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Projects/>
      <Contact/>
      <Footer/>
      <ScrollTop/>
    </>
  );
}

export default App;
