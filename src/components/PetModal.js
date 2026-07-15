import React, { useState } from 'react';
import './PetModal.css';

const PetModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="pet-modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="pet-modal" onClick={e => e.stopPropagation()}>
        <button className="pet-modal-close" onClick={() => setIsOpen(false)} aria-label="Close">
          &#215;
        </button>
        <div className="pet-modal-image">
          <img src="/pet_held4.jpg" alt="PET robot being cradled in arms" />
        </div>
        <div className="pet-modal-text">
          <h2>PET</h2>
          <p>PET (Personal Embodied Touch) is an experimental artwork exploring companionship and intimacy through embodied, non-verbal interaction. Designed to be held, handled, and physically engaged rather than observed at a distance, PET reframes human–robot interaction around touch, feel, and physical responsiveness rather than language, faces, or task-oriented behaviour.</p>
          <p>The robot's aesthetic emerges from function and materiality: smooth continuous surfaces, distributed articulation, and a body optimized for being lifted, cradled, and repositioned in human arms. PET's segmented architecture increases the spatial resolution of touch, enabling the robot to distinguish where and how it is being touched across its entire body.</p>
          <p>PET's movement emerges from ongoing interaction rather than fixed choreography — a four-stage control system governs its behaviour through reflexive, tactile, interpretive, and expressive layers.</p>
        </div>
      </div>
    </div>
  );
};

export default PetModal;
