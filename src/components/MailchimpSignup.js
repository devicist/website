import React, { useState } from 'react';

const MailchimpSignup = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <button className="pet-modal-list-btn" onClick={() => setOpen(!open)}>
        <u>Sign up</u>
      </button>
      {' '}for the mailing list.
      {submitted ? (
        <div className="mc-signup-thanks">Thanks — you're on the list.</div>
      ) : open && (
        <form
          action="https://devicist.us14.list-manage.com/subscribe/post?u=1960e060b6a123cf33b617dd7&id=19f122e29b&f_id=002aeee0f0"
          method="post"
          target="_blank"
          className="mc-signup-form"
          onSubmit={() => setSubmitted(true)}
        >
          <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
            <input type="text" name="b_1960e060b6a123cf33b617dd7_19f122e29b" tabIndex="-1" defaultValue="" />
          </div>
          <div className="mc-signup-row">
            <input type="email" name="EMAIL" placeholder="Email" required className="mc-signup-input" />
            <input type="text" name="FNAME" placeholder="First name" className="mc-signup-input" />
            <input type="text" name="LNAME" placeholder="Last name" className="mc-signup-input" />
            <button type="submit" className="mc-signup-submit">Subscribe</button>
          </div>
        </form>
      )}
    </>
  );
};

export default MailchimpSignup;
