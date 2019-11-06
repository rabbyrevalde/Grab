import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import About from "./components/about";
import Job from "./components/Job";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Listing from "./components/Listing";

function App() {
  return (
    <Router>
      <Header />
      <Container fluid={true} className="px-5 bg-lightgray">
        <Row>
          <Col md="2" className="pl-0">
            <Sidebar />
          </Col>
          <Col md="10">
            <Route exact path="/" component={Listing} />
            <Route path="/about" component={About} />
            <Route path="/Job" component={Job} />
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
