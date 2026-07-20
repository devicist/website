import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import MailchimpSignup from "./MailchimpSignup";
import PetShortsCarousel from "./PetShortsCarousel";
import "./PetModal.css";

const PetModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener("openPetModal", open);
    return () => window.removeEventListener("openPetModal", open);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="pet-modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="pet-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="pet-modal-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
        />
        <div className="pet-modal-media">
          <div className="pet-modal-image">
            <img src="/pet_held.jpg" alt="PET robot being cradled in arms" />
          </div>
          <PetShortsCarousel />
        </div>
        <div className="pet-modal-text">
          <p>
            PET is a modular robotic companion, more sculpture than animal. PET
            responds to touch: your grip, your strokes, the way you roll it in
            your arms. It develops a feeling for you, and expresses it through
            movement: cuddling, writhing, purring or more.
          </p>
          <dl className="pet-modal-faq">
            <div>
              <dt>What's it for?</dt>
              <dd>
                To explore comfort, intimacy and stimulation through touch.
              </dd>
            </div>
            <div>
              <dt>How does it know what you're doing?</dt>
              <dd>
                Capacitive sensors + FSRs + MIT mode feedback from motors.
              </dd>
            </div>
            <div>
              <dt>What's controlling the movement?</dt>
              <dd>
                A large LLM interprets touch gestures through an emotional lens
                and enacts behavioral responses.
              </dd>
            </div>
            <div>
              <dt>Is PET for Sale?</dt>
              <dd>
                No, not at this time.{" "}
                <HashLink to="/#contact" onClick={() => setIsOpen(false)}>
                  <u>Reach out</u>
                </HashLink>{" "}
                with inquiries.
              </dd>
            </div>
            <div>
              <dt>More Information</dt>
              <dd>
                <p>
                  Most social robots seek rapport through facial expression,
                  speech, or gaze. PET takes a different approach. It is a
                  speculative robotic companion, more sculpture than animal,
                  designed to be held, handled, and physically engaged rather
                  than observed at a distance. It responds to your strokes,
                  your grip, the way you roll it in your arms; it develops a
                  feeling for you and expresses it through movement — be it
                  cuddling, writhing, or recoiling.
                </p>
                <p>
                  By privileging touch, PET is freed from representational
                  demands, and the aesthetic emerges from function. Its body
                  is a chain of prismatic modules inspired by pixels; more
                  modules raise PET's tactile resolution. The modules have
                  smooth continuous surfaces, each covered in a variety of
                  sensors, joined by compliant, proprioceptive motors. The
                  body is optimized for being lifted, cradled, and
                  repositioned in human arms.
                </p>
                <p>
                  PET's movement emerges from ongoing interaction. Sensor
                  signals are processed in real time and categorized into
                  gestures, encoded into valenced language (e.g. stroke vs.
                  poke, cradle vs. restrict), then sent to an LLM that enacts
                  a behaviour reflecting how it feels about the interaction.
                  The result is a non-anthropomorphic social agent whose
                  expressiveness arises from how it feels to hold rather than
                  how it looks.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default PetModal;
