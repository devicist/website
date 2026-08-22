import React from "react";
import { HashLink } from "react-router-hash-link";
import PetShortsCarousel from "../components/PetShortsCarousel";
import PetConferenceCarousel from "../components/PetConferenceCarousel";
import petCradledNewLarge from "./../assets/images/portfolio/pet/cradled.jpg";
import petConceptMedium from "./../assets/images/portfolio/pet/concept-medium.jpg";
import petViz from "./../assets/images/portfolio/pet/pet_viz.png";
import "../components/Pet.css";

const Pet = () => {
  return (
    <section className="pet-page section">
      <div className="pet-page-inner">
        <div className="pet-page-image">
          <img src={petCradledNewLarge} alt="PET robot being cradled in arms" />
        </div>
        <PetShortsCarousel />
        <h1 className="pet-page-title">PET</h1>
        <div className="pet-page-intro-block">
          <p className="pet-page-intro">
            PET is a speculative robot that is part sculpture, part companion.
            PET responds to touch: your grip, your strokes, the way you roll it
            in your arms. It develops a feeling for you, and expresses it
            through movement: exploring, writhing, cuddling, recoiling. PET was
            awarded{" "}
            <a
              href="https://icsr2026.uk/awards/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>Best Art and Design</u>
            </a>{" "}
            at ICSR 2026.
          </p>
        </div>
        <div className="pet-page-content">
          <p className="pet-page-intro">
            PET’s body is optimized for being lifted, cradled, and repositioned
            in human arms. With smooth surfaces, each module is endowed with
            varied sensors, and joined by compliant, proprioceptive motors. Like
            pixels, PET’s modularity increases the resolution of sensing and
            movement.
          </p>
          <PetConferenceCarousel />
          <p className="pet-page-intro">
            PET's movement emerges from ongoing interaction. Sensor signals are
            processed in real time, categorized into gestures, encoded into
            valenced language (e.g. stroke vs. poke), processed by an LLM that
            enacts movements reflecting how it feels about the way it is being
            touched. The result is an embodied agent whose expressiveness
            emerges from how it feels rather than anthropomorphic imitation.
          </p>
          <div className="pet-page-concept pet-page-viz">
            <img src={petViz} alt="PET sensor and motor telemetry visualization" />
            <p className="pet-page-concept-caption">
              Real-time sensor and motor telemetry
            </p>
          </div>
          <p className="pet-page-intro">
            PET is in active development. Multiple versions are in the works: a
            collectible, a human-sized version for performance, and one that is
            room-scale for installation. If you are interested in collaborating,
            please{" "}
            <HashLink to="/#contact">
              <u>reach out</u>
            </HashLink>
            .
          </p>
          <div className="pet-page-concept">
            <img src={petConceptMedium} alt="PET installation concept" />
            <p className="pet-page-concept-caption">Installation concept</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pet;
