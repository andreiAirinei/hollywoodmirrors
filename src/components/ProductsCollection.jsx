import React, { Fragment, useState, useEffect, useContext } from "react";
import { ClientContext } from "../providers/client/client.provider";
import styled from "styled-components";

import ProductsCollectionItem from "./ProductsCollectionItem";

// Bootstrap
import Row from "react-bootstrap/Row";

const ProductsCollection = ({ match }) => {
  const { client } = useContext(ClientContext);

  const [collection, setCollection] = useState({
    products: [],
    collectionTitle: ""
  });

  const { products, collectionTitle } = collection;
  const collectionHandle = match.params.collectionHandle;

  useEffect(() => {
    // We have to wait for client to load first
    if (client) {
      // @match.params.collectionHandle - reading the collection handle parameter name from it
      client.collection.fetchByHandle(collectionHandle).then(result => {
        // Check if the collection exists
        if (result) {
          setCollection({
            products: result.products,
            collectionTitle: result.title
          });
        }
        // console.log("The result -> ", result.products);
      });
    }
  }, [client, collectionHandle]);

  return (
    <Fragment>
      {console.log("Rendered @ Products Collection")}
      <CollectionTitle className="mt-3 mb-5">
        <h2>{collectionTitle}</h2>
      </CollectionTitle>
      <Row>
        {products.map(product => {
          return (
            <ProductsCollectionItem
              key={product.id}
              productHandle={product.handle}
              image={product.images[0].src}
              title={product.title}
            />
          );
        })}
      </Row>
    </Fragment>
  );
};

export default ProductsCollection;

const CollectionTitle = styled.div`
  color: #20232a;
  text-align: center;
  position: relative;

  h2 {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;

    &:before {
      content: "";
      position: absolute;
      height: 3px;
      width: 100px;
      background: red;
      bottom: -15px;
      left: 50%;
      transform: translate(-50%);
    }
  }
`;
