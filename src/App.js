import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import { FindUs, Footer, Navbar } from "./scenes/global";
import HomePage from "./scenes/home/HomePage";
import AboutUs from "./scenes/about/AboutUs";
import { useEffect } from "react";
import Services from "./scenes/services/Services";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/service-&-menu" element={<Services />} />
        </Routes>
        <FindUs />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
