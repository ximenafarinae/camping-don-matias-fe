import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Image, Col, Container, Row } from "react-bootstrap";
import Search from "../Search/Search";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="m-auto">
        <Col xs={6} md={4}>
          <Image
            className="mr-3"
            style={{ width: "3em" }}
            src="https://scontent.faep14-2.fna.fbcdn.net/v/t1.0-0/p526x296/138462547_4184951204853116_960239295681754321_o.jpg?_nc_cat=101&ccb=2&_nc_sid=730e14&_nc_ohc=zM3NrcB5lW8AX9qmGzf&_nc_ht=scontent.faep14-2.fna&tp=6&oh=ee5c03f8ec6f76b9719e3b1665fecd96&oe=6022C023"
            roundedCircle
          />
          <Link style={{ color: "#a8aaad", textDecoration: "none" }} to={"/"}>
            Camping Don Matías
          </Link>
        </Col>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container className="d-inline-flex justify-content-end mt-1" sm={9}>
          <Row>
            <Col>
              <Search></Search>
            </Col>
          </Row>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
