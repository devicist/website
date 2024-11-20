import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import Process from "../components/sections/Process";
import Portfolio from "../components/sections/Portfolio";
import About from "../components/sections/About";
import Capabilities from "../components/sections/Capabilities";
import OtherProjects from "../components/sections/OtherProjects";
import Cta from "../components/sections/Cta";

const Home = () => {
  return (
    <>
      <Hero />
      <Portfolio topDivider />
      <OtherProjects />
      <About />
      <Capabilities />
      <Process invertMobile topDivider />
      <Cta />
    </>
  );
};

export default Home;
