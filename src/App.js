import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Job from "/pages/job";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Listing from "./components/Listing";

function App() {
  return (
    <Router>
      <Layout>
        <Container>
          <Row>
            <Col sm="12">
              <h3 className="my-5">Category Title</h3>
              <div className="list-wrapper my-5">
                <Listing />
              </div>
            </Col>
          </Row>
        </Container>
        <Route path="/pages/job" component={Job} />
      </Layout>
    </Router>
  );
}

export default App;
