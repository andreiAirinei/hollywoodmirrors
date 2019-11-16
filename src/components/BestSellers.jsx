import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

// Contexts
import { ClientContext } from "../providers/client/client.provider";

// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const BestSellers = ({ history }) => {
  console.log("Rendered @ BestSellers");

  const { client } = useContext(ClientContext);

  const [collection, setCollection] = useState({
    collectionTitle: "",
    products: []
  });

  const { collectionTitle, products } = collection;

  // Fetch Best Sellers products by HANDLE
  useEffect(() => {
    // !!! The HANDLE should be made dynamic
    const collectionHandle = "best-sellers";

    client.collection.fetchByHandle(collectionHandle).then(collection => {
      setCollection({
        collectionTitle: collection.title,
        products: collection.products
      });
    });
  }, [client]);

  const handleProductTitle = title => {
    const titleArray = title.split(" ");
    return titleArray[0] + " " + titleArray[1];
  };

  return (
    <Styled>
      <h1 className="text-center mb-5">{`${collectionTitle}`}</h1>

      <Row>
        {products.map(product => {
          return (
            <Col xs="12" md="6" lg="4" key={product.id} className="mb-5">
              <Card className="card">
                <Card.Img
                  variant="top"
                  src={product.images[0].src}
                  className="item-hover"
                  onClick={() =>
                    history.push(
                      `/shop/${product.variableValues.handle}/${product.handle}`
                    )
                  }
                />
                <Card.Body className="body">
                  <Card.Title className="title">
                    {handleProductTitle(product.title)}
                  </Card.Title>
                  <Card.Text className="type">{product.productType}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Styled>
  );
};

export default withRouter(BestSellers);

const Styled = styled.div`
  margin-top: 150px;

  .card {
    border: none;

    .body {
      padding: 0;
      margin: 0;

      .title,
      .type {
        display: block;
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
