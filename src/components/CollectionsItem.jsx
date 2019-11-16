import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

// Bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CollectionsItem = ({ history, collectionHandle, image, title }) => {
  return (
    <StyledCard
      className="item-hover"
      onClick={() => history.push(`shop/${collectionHandle}`)}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="title">{title}</Card.Title>
        <Card.Text className="type">MIRRORS</Card.Text>
        <Button variant="danger">SHOP NOW</Button>
      </Card.Body>
    </StyledCard>
  );
};

export default withRouter(CollectionsItem);

const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
  background: #f9f4f1;

  .title,
  .type {
    font-size: 24px;
    letter-spacing: 3px;
  }

  .title {
    margin: 10px 0 0 0;
  }

  .type {
    text-transform: uppercase;
    font-weight: bold;
    text-shadow: 2px 2px #000;
  }

  button {
    padding: 10px 30px;
  }
`;
