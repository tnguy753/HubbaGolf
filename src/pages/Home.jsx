import React, { useState } from "react";
import Info from "../components/Info";
import Header from "../components/Header";
import HeroSection from "../sections/HeroSection";
import About from "../sections/About";
import Footer from "../components/Footer";
import FormBooking from "../sections/Form";
import Facilities from "../sections/Facilities";
import Courses from "../sections/Courses";
import Shop from "../sections/Shop";

import "../index.css";

const Home = () => {
  return (
    <>
      <Info />
      <Header />
      <HeroSection />
      <Facilities />
      <About />
      <Courses />
      <Shop />

      <FormBooking />
      <Footer />
    </>
  );
};

export default Home;
