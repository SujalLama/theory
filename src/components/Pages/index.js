import React from "react";
import Article from "../Article";
import Card from "../Card";
import Footer from "../Footer";
import Gallery from "../Gallery";
import Hero from "../Hero";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Gallery />
      <Article />
      <Footer />
    </>
  );
};

export default Home;
