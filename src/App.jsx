import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Welcome from "./Pages/Welcome";
import Footer from "./Pages/Footer";
import HairStyles from "./Pages/HairStyles";
import NailStyles from "./Pages/NailStyles";
import LashesStyles from "./Pages/LashesStyles";
import Frontal from "./Pages/Frontal";
import BookingForm from "./Pages/BookingForm";
import PedicureStyles from "./Pages/PedicureStyles";
import MakeupStyles from "./Pages/MakeupStyles";
import Contact from "./Pages/Contact";
import About from "./Pages/About"
import MainNav from "./Pages/MainNav";

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {!isHome && <MainNav />} {/* Only show if not on Home */}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/hairstyles" element={<HairStyles />} />
          <Route path="/nail-styles" element={<NailStyles />} />
          <Route path="/lashes-styles" element={<LashesStyles />} />
          <Route path="/pedicure-styles" element={<PedicureStyles />} />
          <Route path="/frontal" element={<Frontal />} />
          <Route path="/makeup" element={<MakeupStyles />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </main>

      {!isHome && <Footer />} {/* Only show if not on Home */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
