import React from "react";
import { HashLink } from "react-router-hash-link";
import BlanketCarousel from "../components/BlanketCarousel";
import blanketHero from "./../assets/images/portfolio/blanket/blanket-hero.jpg";
import blanketMesh from "./../assets/images/portfolio/blanket/blanket-4.jpg";
import blanketVideo from "./../assets/images/portfolio/blanket/blanket.mp4";
import "../components/Blanket.css";

const Blanket = () => {
  return (
    <section className="blanket-page section">
      <div className="blanket-page-inner">
        <div className="blanket-page-image">
          <img
            src={blanketHero}
            alt="The Blanket robotic sculpture resting on a bed"
          />
        </div>
        <h1 className="blanket-page-title">The Blanket</h1>
        <p className="blanket-page-intro">
          The Blanket is a robotic artwork that lives on a bed and seeks out the
          people who share it. It has no face, no front, and no gaze. It engages
          only through physical contact — nestling into a resting body, climbing
          onto a chest, allowing itself to be laid upon and cradling those who
          do.
        </p>
        <BlanketCarousel />
        <dl className="blanket-page-faq">
          <div>
            <dd>
              The blanket's body is a skeletal grid of interconnected motors
              arranged in a flexible polygonal mesh, with actuation at each
              joint. The blanket is remote controlled by a human operator.
            </dd>
          </div>
          <div>
            <video
              className="blanket-page-video"
              controls
              playsInline
              preload="metadata"
            >
              <source src={blanketVideo} type="video/mp4" />
            </video>
          </div>
          <div>
            <dd>
              <p>
                The Blanket is animate but distinct from an animal. Amorphously
                shaped, the work holds two ideas at once. A blanket is a
                transitional object, the first thing a child imbues with life;
                The Blanket takes that belief and makes it tangible. Secondly, a
                moving blanket with no body underneath is a figure of absence —
                movement as if from ghosts. Comfort and haunting coexist.
              </p>
              <p>
                The Blanket was developed between 2002 and 2007. It was
                exhibited at Ars Electronica, ISEA and Future Physical; used in
                several live performances; and received a special mention in the
                Japan Media Arts Awards. There are plans to redevelop it with a
                new design and control system, and to make it available for
                future exhibitions.
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Blanket;
