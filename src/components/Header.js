import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  ListGroup,
  DropdownButton,
  Dropdown
} from "react-bootstrap";
import photo from "../static/img/me.jpg";
const Header = () => {
  return (
    <div className="header text-white">
      <Navbar bg="dark" variant="dark" className="px-5">
        <Navbar.Brand href="/">
          <h3>Logo</h3>
          <Link to="/about">About us</Link>
        </Navbar.Brand>
        <Nav className="ml-auto profile-wrap">
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          <ListGroup horizontal>
            <ListGroup.Item className="pr-0 text-right">
              <span>
                <Link to="#">
                  <i className="far fa-bell fa-lg"></i>

                  <small className="text-white">8</small>
                </Link>
              </span>
              <img src={photo} alt="photos" />
            </ListGroup.Item>
            <ListGroup.Item className="px-0">
              <DropdownButton id="dropdown-basic-button" title="Rabby Revalde">
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
              </DropdownButton>
            </ListGroup.Item>
          </ListGroup>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
