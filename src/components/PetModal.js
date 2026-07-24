import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import MailchimpSignup from "./MailchimpSignup";
import PetShortsCarousel from "./PetShortsCarousel";
import PetConferenceCarousel from "./PetConferenceCarousel";
import petCradledNewLarge from "./../assets/images/portfolio/pet/cradled.jpg";
import petConceptMedium from "./../assets/images/portfolio/pet/concept-medium.jpg";
import "./PetModal.css";

const PetModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener("openPetModal", open);
    return () => window.removeEventListener("openPetModal", open);
  }, []);

  // Deep-link support: opening a URL that already carries #pet should open the modal.
  useEffect(() => {
    if (location.hash === "#pet") {
      setIsOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  // Keep the URL hash in sync so the modal has its own shareable link.
  useEffect(() => {
    const hasPetHash = location.hash === "#pet";
    if (isOpen && !hasPetHash) {
      history.replace({ ...location, hash: "#pet" });
    } else if (!isOpen && hasPetHash) {
      history.replace({ ...location, hash: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="pet-modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="pet-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="pet-modal-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
        />
        <div className="pet-modal-body">
          <div className="pet-modal-image">
            <img
              src={petCradledNewLarge}
              alt="PET robot being cradled in arms"
            />
          </div>
          <PetShortsCarousel />
          <h2 className="pet-modal-title">PET</h2>
          <p className="pet-modal-intro">
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
          <dl className="pet-modal-faq">
            <div>
              <dt>What's it for?</dt>
              <dd>
                To explore affect, intimacy and reciprocity through touch.
              </dd>
            </div>
            <div>
              <dt>How does it know what you're doing?</dt>
              <dd>
                Capacitive sensors + FSRs + IMU + MIT mode feedback from bldc
                motors.
              </dd>
            </div>
            <div>
              <dt>What's controlling the movement?</dt>
              <dd>
                An LLM interprets touch gestures through an emotional lens and
                enacts behavioral responses.
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
                <HashLink to="/#contact" onClick={() => setIsOpen(false)}>
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
                  designed to be held, handled, and physically engaged rather
                  than observed at a distance. It responds to your strokes, your
                  grip, the way you roll it in your arms; it develops a feeling
                  for you and expresses it through movement — be it cuddling,
                  writhing, or recoiling.
                </p>
                <p>
                  By privileging touch, PET is freed from representational
                  demands, and the aesthetic emerges from function. Its body is
                  a chain of prismatic modules inspired by pixels; more modules
                  raise PET's tactile resolution. The modules have smooth
                  continuous surfaces, each covered in a variety of sensors,
                  joined by compliant, proprioceptive motors. The body is
                  optimized for being lifted, cradled, and repositioned in human
                  arms.
                </p>
                <p>
                  PET's movement emerges from ongoing interaction. Sensor
                  signals are processed in real time and categorized into
                  gestures, encoded into valenced language (e.g. stroke vs.
                  poke, cradle vs. restrict), then sent to an LLM that enacts a
                  behaviour reflecting how it feels about the ongoing
                  interaction. The result is a non-anthropomorphic social agent
                  whose expressiveness arises from how it feels rather than how
                  it looks.
                </p>{" "}
                <p>
                  PET is in active development. Multiple versions are in
                  development: a collectible, a human-sized version for
                  performance, and one that is room-scale for installation. If
                  you are interested in collaborating, please{" "}
                  <HashLink to="/#contact" onClick={() => setIsOpen(false)}>
                    <u>reach out</u>
                  </HashLink>
                  .
                </p>
              </dd>
            </div>
          </dl>
          <div className="pet-modal-concept">
            <img src={petConceptMedium} alt="PET installation concept" />
            <p className="pet-modal-concept-caption">Installation concept</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetModal;
