import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import SingleEvent from "../SingleEvent/SingleEvent";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div>
      <Row xs={2} sm={2} md={4} className="g-4 container mx-auto events-card">
        {events.map((event) => (
          <SingleEvent key={event._id} event={event}></SingleEvent>
        ))}
      </Row>
    </div>
  );
};

export default Events;
