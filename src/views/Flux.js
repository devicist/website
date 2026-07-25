import React from "react";
// import sections
import Intro from "../components/sections/CaseStudy/Intro";
import Design from "../components/sections/CaseStudy/Design";
import Build from "../components/sections/CaseStudy/Build";
import Deploy from "../components/sections/CaseStudy/Deploy";

const IntroContent = {
  title: "Flux",
  description:
    "We designed and built a 40 foot kinetic installation for Shopify's Offices in Toronto. Metallic prisms are rotated in coordinated patterns to create rolling waves of refracted light.",
  imgSrc: require("./../assets/images/fluxOutline.png"),
  videoUrl: "https://www.youtube.com/embed/Z2o9WQWpmp4",
  hideBackArrow: true,
  hideCaseStudyLabel: true,
};

const DesignContent = {
  body: "Inspired by bodies of water and existing kinetic artworks, we proposed a design to fill out the long and low ceiling, and detailed it into a 3D model and an animated simulation.",
  bgImage: require("./../assets/images/portfolio/flux/prismGraphic.png"),
  images: [
    {
      src: require("./../assets/images/portfolio/flux/16.png"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/14b.png"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/ceilingSim.gif"),
      width: 1,
      height: 1,
    },
  ],
};

const BuildContent = {
  body: "Prototypes of the rotating module were engineered, and distributed to stakeholders. A report was provided for ESA certification. Parts were sourced and assembled into the full rig and tested for weeks before deployment.",

  images: [
    {
      src: require("./../assets/images/portfolio/flux/many_in_progress.jpg"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/1.jpg"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/prism_prototype.jpg"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/8.jpg"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/6.jpg"),
      width: 1,
      height: 1,
    },
  ],
};

const DeployContent = {
  body: "The complete work refracts ambient light in rolling wave patterns. Like a lake, viewers can be transfixed by the rhythms, or it can melt into the background.",
  images: [
    {
      src: require("./../assets/images/portfolio/flux/deployImage1_1.jpg"),
      width: 2,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/deployImage2_2.jpg"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/deployImage3_3.jpg"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/deployImage4_4.jpg"),
      width: 3,
      height: 1,
    },
  ],
};

const Flux = () => {
  return (
    <>
      <Intro {...IntroContent} />
      {/* <FirstContact {...FirstContactContent} /> */}
      <Design {...DesignContent} />
      <Build {...BuildContent} />
      <Deploy {...DeployContent} />
    </>
  );
};

export default Flux;
