import React, { useContext, useState, useEffect, lazy, Suspense } from "react";
import styled from "styled-components";

// Contexts
import { ClientContext } from "../providers/client/client.provider";

// import CollectionsItem from './CollectionsItem';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CollectionsItem = lazy(() => import("./CollectionsItem"));

const CollectionsPreview = () => {
  console.log("Rendered @ CollectionsPreview");

  const { client } = useContext(ClientContext);

  const [collections, setCollections] = useState([]);

  // Fetch Shopify collections without products
  useEffect(() => {
    client.collection.fetchAll().then(res => {
      let filteredCollections = res.filter(
        el =>
          el.title === "View All" ||
          el.title === "Wall Mounted" ||
          el.title === "Table top"
      );
      setCollections(filteredCollections);
    });
  }, [client]);

  return (
    <StyledRow>
      <Suspense fallback={<h1>Loading...</h1>}>
        {collections.map(collection => {
          return (
            // Confused why does the Column need a key and not the CollectionItem
            // CollectionItem without key still works
            <Column xs="12" md="4" key={collection.id.toString()}>
              <CollectionsItem
                key={collection.id.toString()}
                collectionHandle={collection.handle}
                image={collection.image.src}
                title={collection.title}
              />
            </Column>
          );
        })}
      </Suspense>
    </StyledRow>
  );
};

export default CollectionsPreview;

const StyledRow = styled(Row)`
  margin-top: 150px;
`;

const Column = styled(Col)`
  margin-bottom: 30px;
  padding: 0 5px 0 5px;
`;
