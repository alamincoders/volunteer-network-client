import React from "react";
import { InputGroup, Button } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="menubar">
      <div className="text-center banner-text">
        <h1>I grow by helping people in need.</h1>
        <InputGroup className="my-5 mx-auto" style={{ width: "470px" }}>
          <input className=" bg-transparent p-2" style={{ width: "370px", border: "1px solid lightgrey" }} type="text" placeholder="Search..." />
          <Button style={{ width: "100px" }} className="btn-custom-primary">
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default Banner;
