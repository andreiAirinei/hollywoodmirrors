import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

// Bootstrap
import Spinner from "../components/Spinner";

// import ProductsCollection from "../components/ProductsCollection";
// import ProductPage from "./ProductPage";

import Container from "react-bootstrap/Container";

const ProductsCollection = lazy(() =>
  import("../components/ProductsCollection")
);
const ProductPage = lazy(() => import("./ProductPage"));

const ShopPage = ({ match }) => {
  return (
    <StyledContainer>
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}/:collectionHandle`}
            component={ProductsCollection}
          />
          <Route
            path={`${match.path}/:collectionHandle/:productHandle`}
            component={ProductPage}
          />
        </Suspense>
      </Switch>
    </StyledContainer>
  );
};

export default ShopPage;

const StyledContainer = styled(Container)`
  padding-top: 150px;
  @media all and (max-width: 992px) {
    padding-top: 180px;
  }
`;
