import React from "react";
import Profile from "../../Profile.pdf"
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";

function About(props) {
  return (
    <div className="container text-center">
      <h1 className="mt-5 mb-5">Sang Bae</h1>
      <div className="card">
        <p className='text-muted mt-5 mb-3'>
          Full Stack Web Developer / SW QA Engineer
      </p>
        <p>
          <a href={Profile} target="_blank" className="btn btn-secondary my-2 mb-3">Resume</a>
        </p>
        <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
          More
      </Link>
        <Link to={process.env.PUBLIC_URL + '/about'} role="button" className="btn btn-link">
          Hide
      </Link>
        <Route exact path={`${props.match.url}/learn`} component={Learn} />
      </div>
    </div>
  );
}

export default About;
