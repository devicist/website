import React from "react";
import { HashLink } from "react-router-hash-link";
import PetShortsCarousel from "../components/PetShortsCarousel";
import PetConferenceCarousel from "../components/PetConferenceCarousel";
import petCradledNewLarge from "./../assets/images/portfolio/pet/cradled.jpg";
import petConceptMedium from "./../assets/images/portfolio/pet/concept-medium.jpg";
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
        <p className="pet-page-intro">
          PET is a robotic companion, more sculpture than animal. PET responds
          to touch: your grip, your strokes, the way you roll it in your arms.
          It develops a feeling for you, and expresses it through movement:
          cuddling, writhing, curling, recoiling. PET was awarded{" "}
          <a
            href="https://icsr2026.uk/awards/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>Best Art and Design</u>
          </a>{" "}
          at ICSR 2026.
        </p>
        <dl className="pet-page-faq">
          <div>
            <dt>What's it for?</dt>
            <dd>
              To explore affect, intimacy and reciprocity through embodiment and
              touch.
            </dd>
          </div>
          <div>
            <dt>How does it know what you're doing?</dt>
            <dd>
              PET senses skin contact, hand pressure, orientation, temperature,
              energy level, position, velocity and torque for each module.
            </dd>
          </div>
          <div>
            <dt>What's controlling the movement?</dt>
            <dd>
              An LLM agent interprets touch gestures through an emotional lens
              and enacts behavioral responses.
            </dd>
          </div>
          <div>
            <dt>Why modular design?</dt>
            <dd>
              Like pixels, more modules increase PET's tactile and expressive
              resolution.
            </dd>
          </div>
          <div>
            <dt>Is PET finished? Is it for Sale?</dt>
            <dd>
              The next version is in development. PET is not available for
              purchase at this time, but you are welcome to{" "}
              <HashLink to="/#contact">
                <u>inquire</u>.
              </HashLink>{" "}
            </dd>
          </div>
          <div>
            <PetConferenceCarousel />
            <dt>More Information</dt>
            <dd>
              <p>
                Most social robots seek rapport through facial expression,
                speech, or gaze. PET takes a different approach. It is a
                speculative robotic companion, more sculpture than animal,
                designed to be held, handled, and physically engaged rather than
                observed at a distance. It responds to your strokes, your grip,
                the way you roll it in your arms; it develops a feeling for you
                and expresses it through movement — be it cuddling, writhing, or
                recoiling.
              </p>
              <p>
                By privileging touch, PET is freed from representational
                demands, and the aesthetic emerges from function. Its body is a
                chain of prismatic modules inspired by pixels; more modules
                raise PET's tactile resolution. The modules have smooth
                continuous surfaces, each covered in a variety of sensors,
                joined by compliant, proprioceptive motors. The body is
                optimized for being lifted, cradled, and repositioned in human
                arms.
              </p>
              <p>
                PET's movement emerges from ongoing interaction. Sensor signals
                are processed in real time and categorized into gestures,
                encoded into valenced language (e.g. stroke vs. poke, cradle vs.
                restrict), then sent to an LLM that enacts a behaviour
                reflecting how it feels about the ongoing interaction. The
                result is a non-anthropomorphic social agent whose
                expressiveness arises from how it feels rather than how it
                looks.
              </p>{" "}
              <p>
                PET is in active development. Multiple versions are in the
                works: a collectible, a human-sized version for performance, and
                one that is room-scale for installation. If you are interested
                in collaborating, please{" "}
                <HashLink to="/#contact">
                  <u>reach out</u>
                </HashLink>
                .
              </p>
            </dd>
          </div>
        </dl>
        <div className="pet-page-concept">
          <img src={petConceptMedium} alt="PET installation concept" />
          <p className="pet-page-concept-caption">Installation concept</p>
        </div>
      </div>
    </section>
  );
};

export default Pet;
