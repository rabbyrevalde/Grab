import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import About from "./components/about";
import Job from "./components/Job";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Listing from "./components/Listing";

function App() {
  return (
    <Router>
      <Header />
      <Container className="container-fluid">
        <Row>
          <Col md="2" className="border-right">
            <Sidebar />
          </Col>
          <Col md="10">
            <Route exact path="/" component={Listing} />
            <Route path="/about" component={About} />
            <Route path="/job" component={Job} />
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
