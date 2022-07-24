import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Header.css'

export default function Header() {
  return (
    <header className="ztekHeader">
      <Container className="h-100">
        <Row fluid="true" className="h-100 align-items-center">
          <Col className="text-center">
          </Col>
        </Row>
      </Container>
    </header>
  );
}
