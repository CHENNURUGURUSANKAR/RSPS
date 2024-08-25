import React, { useState } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles
import {
  faFlask,
  faMusic,
  faDumbbell,
  faBook,
  faLevelDownAlt,
} from "@fortawesome/free-solid-svg-icons"; // Correct imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import bgImg from "../assets/rising-star-bg.jpg";
import img1 from "../assets/img1.jpeg";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="home">
      <section className="gallery">
        <div className="carousel-container">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            transitionTime={500}
            swipeable
            emulateTouch
            className="carousel"
          >
            <div className="gallery-div">
              <img src={bgImg} alt="School Event 1" />
            </div>
            <div className="gallery-div">
              <img src={bgImg} alt="School Event 2" />
            </div>
            <div className="gallery-div">
              <img src={bgImg} alt="School Event 3" />
            </div>
            <div className="gallery-div">
              <img src={bgImg} alt="School Event 4" />
            </div>
          </Carousel>
          <div className="carousel-text">
            <h1>Welcome to Rising Stars Public School</h1>
            <p>Empowering students to reach their full potential.</p>
          </div>
        </div>
      </section>
      <section className="featured-programs">
        <h2>Featured Programs</h2>
        <div className="program-grid">
          <div className="program-card">
            <FontAwesomeIcon
              icon={faFlask}
              size="3x"
              className="program-icon"
            />
            <h3>STEM Program</h3>
            <p>
              Explore our science, technology, engineering, and math curriculum
              designed to ignite curiosity.
            </p>
          </div>

          <div className="program-card">
            <FontAwesomeIcon
              icon={faMusic}
              size="3x"
              className="program-icon"
            />
            <h3>Arts & Music</h3>
            <p>Unleash creativity with our vibrant arts and music programs.</p>
          </div>

          <div className="program-card">
            <FontAwesomeIcon
              icon={faDumbbell}
              size="3x"
              className="program-icon"
            />
            <h3>Sports & Fitness</h3>
            <p>
              Develop teamwork and physical fitness through our sports programs.
            </p>
          </div>
          <div className="program-card">
            <FontAwesomeIcon
              icon={faBook} // New icon for Library
              size="3x"
              className="program-icon"
            />
            <h3>Library</h3>
            <p>
              Enhance your learning with our extensive collection of books and
              resources.
            </p>
          </div>
        </div>
      </section>
      <section className="gallery">
        <h2>Our School in Pictures</h2>
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          transitionTime={500}
          swipeable
          emulateTouch
          className="bg-gray"
        >
          <div className="gallery-div">
            <img src={bgImg} alt="School Event 1" />
          </div>
          <div className="gallery-div">
            <img src={bgImg} alt="School Event 2" />
          </div>
          <div className="gallery-div">
            <img src={bgImg} alt="School Event 3" />
          </div>
          <div className="gallery-div">
            <img src={bgImg} alt="School Event 4" />
          </div>
        </Carousel>
      </section>
      <section className="call-to-action">
        <h2>Join Our School Community</h2>
        <p>
          Interested in learning more about what we offer? Please fill out the
          form below to schedule a visit or apply now!
        </p>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="cta-button">
            Submit
          </button>
        </form>
      </section>
      <section className="announcements">
        <h2>Upcoming Events</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faLevelDownAlt} className="event-icon" />
            <div className="event-details">
              <h3>Back to School Night</h3>
              <p>
                <FontAwesomeIcon icon={faCalendarAlt} className="icon-small" />{" "}
                Date: August 20, 2024
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} className="icon-small" /> Time:
                6:00 PM - 8:00 PM
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-small" />{" "}
                Location: School Auditorium
              </p>
              <p>
                Join us for an evening of introductions and information about
                the new school year.
              </p>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faLevelDownAlt} className="event-icon" />
            <div className="event-details">
              <h3>Parent-Teacher Conferences</h3>
              <p>
                <FontAwesomeIcon icon={faCalendarAlt} className="icon-small" />{" "}
                Date: August 25, 2024
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} className="icon-small" /> Time:
                2:00 PM - 6:00 PM
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-small" />{" "}
                Location: Main Hall
              </p>
              <p>
                Meet with teachers to discuss your child's progress and set
                goals for the year.
              </p>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faLevelDownAlt} className="event-icon" />
            <div className="event-details">
              <h3>School Fundraiser Gala</h3>
              <p>
                <FontAwesomeIcon icon={faCalendarAlt} className="icon-small" />{" "}
                Date: September 1, 2024
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} className="icon-small" /> Time:
                7:00 PM - 10:00 PM
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-small" />{" "}
                Location: Gymnasium
              </p>
              <p>
                Support our school programs by attending our annual fundraising
                gala. Enjoy dinner, entertainment, and more.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="testimonials">
        <h2>What Parents Say</h2>
        <div className="testimonial-item">
          <p>
            "Our child has thrived at School Name. The teachers are exceptional
            and truly care about the students."
          </p>
          <p>- Parent Name</p>
        </div>
        <div className="testimonial-item">
          <p>
            "The school's commitment to academics and extracurricular activities
            is impressive."
          </p>
          <p>- Parent Name</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
