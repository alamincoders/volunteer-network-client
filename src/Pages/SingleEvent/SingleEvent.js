import React from "react";
import { Card, Col } from "react-bootstrap";
import "./SingleEvent.css";

const SingleEvent = (props) => {
  const { name, image } = props.event;
  return (
    <div>
      <Col>
        <Card className="card-img border-0 text-white text-center">
          <Card.Img className="img-fluid w-100" variant="top" src={image} />
          <Card.Body className="card-text">
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SingleEvent;
