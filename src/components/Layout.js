import React from "react";
import Header from "./Header";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col md="2">
            <Sidebar />
          </Col>
          <Col md="10" className="border-left">
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
