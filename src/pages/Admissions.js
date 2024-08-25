import React from "react";
import "../styles/Admissions.css";

function Admissions() {
  return (
    <div className="admissions">
      <h1>Admissions</h1>
      <section className="admission-process">
        <h2>Admission Process</h2>
        <p>Details about how to apply to the school.</p>
      </section>
      <section className="requirements">
        <h2>Requirements</h2>
        <p>Information about admission requirements.</p>
      </section>
      <section className="deadlines">
        <h2>Deadlines</h2>
        <p>Important dates and deadlines for admission.</p>
      </section>
    </div>
  );
}

export default Admissions;
