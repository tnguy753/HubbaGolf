import React from "react";
import Info from "../sections/Info";
import Header from "../components/Header";
import HeroSection from "../sections/HeroSection";
import Footer from "../components/Footer";
import Facilities from "../sections/Facilities";

import "../index.css";

const Home = () => {
  return (
    <>
      <Info />
      <Header />
      <HeroSection />
      <Facilities />
      <Footer />
    </>
  );
};

export default Home;
