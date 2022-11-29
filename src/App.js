import "./App.css";
import { Route, Routes } from "react-router-dom"; 

import { Navbar } from "../src/components/Navbar";
import { Intro } from "../src/components/Intro";
import { About } from "../src/components/About";
import { Skills } from "../src/components/Skills";
import { Projects } from "../src/components/Projects";
import { Contact } from "../src/components/Contact";
import { Footer } from "../src/components/Footer";
// import Card from "../src/components/Card";
// import Idea from "../src/components/Idea";

// import photo from '../src/images/female.jpg'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/card" element={<Card />} />  */}
      </Routes>

      
      <Footer /> 
      {/* <Idea  /> */}

      
    </div>
  );
}

export default App;
