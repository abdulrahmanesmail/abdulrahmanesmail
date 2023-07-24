import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import { Work } from "./components/work/work";
import { Skills } from "./components/skills/skills";
import { Manifesto } from "./components/manifesto/manifesto";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import './index.css';
import "./App.css";

function App() {
  return (
    
    <BrowserRouter>
       <Navbar/>
       <div className="Routes">
          <Routes>
            <Route index element={<Home />} />
            <Route path="Work" element={<Work />} />
            <Route path="Skills" element={<Skills />} />
            <Route path="Manifesto" element={<Manifesto />} />
            <Route path="about" element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="*" element={<>No Match</>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;