import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../assets/hero-image.jpg";

import Jumbotron from "react-bootstrap/Jumbotron";

const Hero = () => (
  <Jumbo fluid>
    <div className="hero-text">
      <h1>UK's #1 HOLLYWOOD MIRROR BRAND</h1>
      <p>Feel and Look Great</p>
      <p>Every Day</p>
      <p>
        <Link to="/shop/all">SHOP NOW</Link>
      </p>
    </div>
  </Jumbo>
);

const Jumbo = styled(Jumbotron)`
  background: url(${img}) no-repeat center center/cover;

  .hero-text {
    margin: 10%;
    color: #fff;
    text-shadow: 2px 2px #000;

    h1 {
      font-size: 2vw;
    }

    p {
      font-size: 3vw;
      font-weight: bold;
    }

    a {
      border-radius: 3px;
      text-decoration: none;
      text-shadow: none;
      font-size: 1.3vw;
      font-weight: bold;
      background: #fff;
      color: #000;
      border: none;
      padding: 15px 50px;
      pointer: cursor;

      &:hover {
        background: #f9f4f1;
      }
    }
  }
`;

export default Hero;
