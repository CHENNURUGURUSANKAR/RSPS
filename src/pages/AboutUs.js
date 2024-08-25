import React from "react";
import "../styles/AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <section className="school-history">
        <h2>Our History</h2>
        <p>Information about the school's history.</p>
      </section>
      <section className="mission-vision">
        <h2>Mission & Vision</h2>
        <p>Details about the school's mission and vision.</p>
      </section>
      <section className="faculty">
        <h2>Our Faculty</h2>
        <p>Information about the school's faculty members.</p>
      </section>
    </div>
  );
}

export default AboutUs;
