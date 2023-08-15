import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Components/Pages/Home";
import AboutMe from "./Components/Pages/AboutMe";
import Skills from "./Components/Pages/Skills";
import ContactMe from "./Components/Pages/ContactMe";
import Transparensii from "./Components/Pages/Transparensii";
import PowerBI from "./Components/Pages/PowerBI";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SmartContract from "./Components/Pages/SmartContract";
import Nft from "./Components/Pages/Nft";
import ERP from "./Components/Pages/ERP";
import ScrollToTopOnNavigation from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTopOnNavigation />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/transparensii" element={<Transparensii />} />
          <Route path="/prisme" element={<PowerBI />} />
          <Route path="/smart-contract" element={<SmartContract />} />
          <Route path="/NFT" element={<Nft />} />
          <Route path="ERP" element={<ERP />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
