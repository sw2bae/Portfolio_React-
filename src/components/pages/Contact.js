import React from "react";


function Contact() {
  return (
    <div className="container text-center">
      <h1 className="mt-5 mb-5">Contact</h1>
      <div className="card">
        <p className="mt-5 mb-5">
          <a href="mailto:sw2.bae@gmail.com" className="lead text-muted">sw2.bae@gmail.com</a>
        </p>
        <p>
          <a href="https://github.com/sw2bae" target="_blank" className="btn btn-secondary my-2 mr-3 mt-5 mb-5">GitHub</a>
          <a href="https://www.linkedin.com/in/sang-bae-8a38011a0/" target="_blank"
            className="btn btn-secondary my-2 mt-5 mb-5">Linkedin</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
