import React from 'react';
// import sections
import Hero from '../components/sections/CaseStudy/CsHero';
import FirstContact from "../components/sections/CaseStudy/FirstContact";
import Design from "../components/sections/CaseStudy/Design";
import Build from "../components/sections/CaseStudy/Build";



const CaseStudy = () => {

  return (
    <>
      <Hero/>
      <FirstContact/>
      <Design />
      <Build />
    </>
  );
}

export default CaseStudy;