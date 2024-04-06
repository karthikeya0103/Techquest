import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const About = () => {
  return (
    <div className="about-container">
      <main className="about-main">
        <h2 className="about-heading">Who are we?</h2>
        <p className="about-description">
          That feels like an existential question, don't you think?
        </p>
      </main>
      <nav className="about-nav">
        <Link to="/" className="about-link">Return to Home</Link>
      </nav>
    </div>
  );
}

export default About;

