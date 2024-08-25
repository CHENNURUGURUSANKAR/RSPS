import React from "react";
import "../styles/NewsEvents.css";

function NewsEvents() {
  return (
    <div className="news-events">
      <h1>News & Events</h1>
      <section className="latest-news">
        <h2>Latest News</h2>
        <p>Stay updated with the latest news from our school.</p>
      </section>
      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <p>Details about upcoming school events.</p>
      </section>
    </div>
  );
}

export default NewsEvents;
