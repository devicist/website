import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import MailchimpSignup from "./MailchimpSignup";
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
        <div className="pet-modal-image">
          <img src="/pet_held.jpg" alt="PET robot being cradled in arms" />
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
                A large language model interprets touch gestures through an
                emotional lens and issues behavioral responses.
              </dd>
            </div>
            <div>
              <dt>Is PET for Sale?</dt>
              <dd>
                No, not at this time.{" "}
                <HashLink to="/#contact" onClick={() => setIsOpen(false)}>
                  <u>Get in touch</u>
                </HashLink>{" "}
                for inquiries.
              </dd>
            </div>
            <div>
              <dt>How do I learn more?</dt>
              <dd>
                <a href="/pet.pdf" target="_blank" rel="noopener noreferrer">
                  <u>Read</u> the overview.
                </a>{" "}
                <MailchimpSignup />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default PetModal;
