import React from "react";
import styled from "styled-components";

import Searchbar from "./Searchbar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Banner = () => (
  <Styled>
    <p className="p-1 text-center">FREE UK NEXT DAY DELIVERY!</p>
    <Container>
      <Row>
        <Col
          sm={6}
          lg={{ span: 4, order: 1 }}
          className="d-none d-sm-block banner-font"
        >
          <img
            src={require("../assets/white-rating-stars.png")}
            className="mr-2 pb-1"
            alt="Rating Stars"
          ></img>
          AWARD WINNING SERVICE
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={{ span: 4, order: 3 }}
          className="text-right banner-font"
        >
          CALL TO ORDER <span>01422 375940</span>
        </Col>
        <Col
          xs={12}
          lg={{ span: 4, order: 2 }}
          className="text-center banner-font"
        >
          <Searchbar />
        </Col>
      </Row>
    </Container>
  </Styled>
);

export default Banner;

const Styled = styled.div`
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  color: white;
  background: #20232a;

  p {
    font-size: 1.3em;
    background: red;
    margin: 0;
  }

  .banner-font {
    padding: 5px 10px;
    font-size: 0.9rem;
    font-weight: 900;

    @media all and (max-width: 850px) {
      font-size: 0.7rem;
    }

    @media all and (max-width: 635px) {
      text-align: center !important;
    }
  }

  .banner-font:first-child,
  .banner-font:nth-child(2) {
    padding-top: 12px;
  }
`;
