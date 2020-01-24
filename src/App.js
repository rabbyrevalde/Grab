import React from "react";

import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import About from "./components/pages/about";
import Job from "./components/pages/Job";
import Listing from "./components/pages/Listing";
import Login from "./components/auth/Login";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function onAuthRequired({ history }) {
  history.push("/login");
}

function App() {
  return (
    <Router>
      <Security
        issuer="https://dev-800849.okta.com/oauth2/default"
        clientId="0oa12ykh99ADnT9PG4x6"
        redirectUri={window.location.origin + "/implicit/callback"}
        onAuthRequired={onAuthRequired}
        pkce={true}
      >
        <Header />
        <Container fluid={true} className="px-5 bg-lightgray">
          <Row>
            <Col md="2" className="pl-0">
              <Sidebar />
            </Col>
            <Col md="10">
              <Route exact path="/" component={Listing} />
              <Route path="/about" component={About} />
              <SecureRoute path="/Job" component={Job} />
              <Route
                path="/login"
                render={() => <Login baseUrl="https://dev-800849.okta.com" />}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </Col>
          </Row>
        </Container>
      </Security>
    </Router>
  );
}

export default App;
