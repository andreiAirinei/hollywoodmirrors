import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ProductsCollectionItem = ({
  productHandle,
  image,
  title,
  history,
  match
}) => {
  // const handleProductTitle = title => {
  //   const titleArray = title.split(" ");
  //   return titleArray[0] + " " + titleArray[1];
  // };

  return (
    <Column xs="12" md="6" lg="4" className="mb-5">
      <Card className="card">
        <Card.Img
          variant="top"
          src={image}
          className="item-hover"
          onClick={() => history.push(`${match.url}/${productHandle}`)}
        />
        <Card.Body className="body">
          <div className="title">{title}</div>
        </Card.Body>
      </Card>
    </Column>
  );
};

export default withRouter(ProductsCollectionItem);

const Column = styled(Col)`
  .card {
    border: none;

    .body {
      padding: 0;
      margin: 0;

      .title,
        display: block;
        margin: 10px 0 0 0;
      }

      // USE THIS FOR REVIEWS SECTION IN ITEM
      @media all and (max-width: 1200px) and (min-width: 993px) {
        min-height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    img {
      max-height: 350px;
    }
  }
`;
