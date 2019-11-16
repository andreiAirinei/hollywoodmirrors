import React from "react";
import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SectionSponsors = () => {
  return (
    <ContainerStyled>
      <h5>TRUSTED BY THE BEST</h5>
      <Row>
        <Col>
          <img src={require("../assets/hollyoaks.png")} alt="" />
        </Col>
        <Col>
          <img src={require("../assets/HarveyNichols_180X80.png")} alt="" />
        </Col>
        <Col>
          <img src={require("../assets/TanyaBurr_180X80.png")} alt="" />
        </Col>
        <Col>
          <img
            src={require("../assets/CheshireHousewives_180X80.png")}
            alt=""
          />
        </Col>
        <Col>
          <img src={require("../assets/ft_180X80.png")} alt="" />
        </Col>
      </Row>
    </ContainerStyled>
  );
};

export default SectionSponsors;

const ContainerStyled = styled(Container)`
  border-top: 1px solid #20232a;
  padding-top: 40px;
  margin-top: 40px;

  h5 {
    color: #20232a;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 3px;
    padding: 20px 0;
  }
`;
