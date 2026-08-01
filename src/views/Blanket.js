import React, { useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import BlanketCarousel from "../components/BlanketCarousel";
import blanketHero from "./../assets/images/portfolio/blanket/blanket-hero.jpg";
import blanketVideo from "./../assets/images/portfolio/blanket/blanket.mp4";
import "../components/Blanket.css";

const Blanket = () => {
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;
    // React sets `muted` as a DOM property, not a reflected attribute, so
    // react-snap's prerendered HTML omits it and browsers block the
    // unmuted autoplay attempt before hydration runs. Set the attribute
    // explicitly so it's present in both the live DOM and the snapshot.
    video.setAttribute("muted", "");
    video.defaultMuted = true;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section className="blanket-page section">
      <div className="blanket-page-inner">
        <div className="blanket-page-hero-video">
          <video ref={heroVideoRef} autoPlay loop muted playsInline>
            <source src={blanketVideo} type="video/mp4" />
          </video>
        </div>
        <h1 className="blanket-page-title">The Blanket</h1>
        <p className="blanket-page-intro">
          The Blanket is a robotic artwork that lives on a bed and seeks out the
          people who share it. It engages through physical contact, nestling
          into a resting body, climbing onto a chest, allowing itself to be laid
          upon and cradling those who do.
        </p>
        <div className="blanket-page-secondary-image-wrap">
          <div className="blanket-page-image">
            <img
              src={blanketHero}
              alt="The Blanket robotic sculpture resting on a bed"
            />
          </div>
        </div>
        <dl className="blanket-page-faq">
          <div>
            <dd>
              The blanket's body is a skeletal grid of interconnected motors
              arranged in a flexible polygonal mesh, with actuation at each
              joint. Inspired by CGI wireframe models, thes actuated joints
              allow for fluid deformation, and movement.
            </dd>
          </div>
          <div>
            <BlanketCarousel />
          </div>
          <div>
            <dd>
              <p>
                The Blanket is both familiar and strange. A blanket is a
                transitional object, the first thing a child imbues with life;
                It's lifelike behaviors are instantly recognizable. But without
                a body underneath or a face to gaze into, the movements appear
                as an apparition.
              </p>
              <p>
                The Blanket was developed between 2002 and 2007. It was
                exhibited at Ars Electronica, ISEA and Future Physical; used in
                several live performances; and received a special mention in the
                Japan Media Arts Awards. There are plans to redevelop it with a
                new design and control system, and make it available for future
                exhibitions.
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Blanket;
