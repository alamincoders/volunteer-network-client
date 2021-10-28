import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

import logo from "../../images/logos/Group 1329.png";

import "./Menubar.css";

const Menubar = () => {
  const { user, logOut } = useFirebase();
  return (
    <div>
      <Navbar fixed="top" bg="light" collapseOnSelect expand="lg" className="pt-5" variant="light">
        <Container>
          <Navbar.Brand className="text-dark">
            <img className="img-fluid " src={logo} alt="" style={{ width: "200px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavLink className="text-decoration-none text-dark fs-5 me-5" to="/home">
                Home
              </NavLink>
              <NavLink className="text-decoration-none text-dark fs-5 me-5" to="/donation">
                Donation
              </NavLink>
              <NavLink className="text-decoration-none text-dark fs-5 me-5" to="/events">
                Events
              </NavLink>
              <NavLink className="text-decoration-none text-dark fs-5 me-5" to="/blog">
                Blog
              </NavLink>
              {user?.email ? (
                <div>
                  {user?.email ? (
                    <NavLink className="text-decoration-none  fs-5" to="/home">
                      <button onClick={logOut} className="btn btn-info px-4 text-white me-3">
                        {" "}
                        Logout
                      </button>
                    </NavLink>
                  ) : (
                    <NavLink className="text-decoration-none  fs-5" to="/login">
                      <button className="btn btn-info px-4 text-white me-3"> Login</button>
                    </NavLink>
                  )}
                  <span>
                    {" "}
                    <img className="img-fluid" style={{ width: "35px", borderRadius: "50%" }} src={user?.photoURL} alt="" /> {user?.displayName}
                  </span>
                </div>
              ) : (
                <div>
                  <NavLink className="text-decoration-none  fs-5" to="/register">
                    <button className="btn btn-custom-primary text-white px-4 me-3"> Register</button>
                  </NavLink>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
