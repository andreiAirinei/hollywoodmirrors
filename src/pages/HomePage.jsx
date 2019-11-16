import React, { Fragment, lazy, Suspense } from "react";
import styled from "styled-components";

// Sections
import Hero from "../components/Hero";
import BannerHome from "../components/BannerHome";
// import CollectionsPreview from '../components/CollectionsPreview';
import FeefoRatings from "../components/FeefoRatings";
// import BestSellers from '../components/BestSellers';

import Container from "react-bootstrap/Container";

const StyledContainer = styled(Container)`
  padding-top: 150px;
  @media all and (max-width: 992px) {
    padding-top: 180px;
  }
`;
// const BannerHome = lazy(() => import('../components/BannerHome'));
// const Hero = lazy(() => import('../components/Hero'));
// const CollectionsPreview = lazy(() =>
//   import('../components/CollectionsPreview')
// );
const CollectionsPreview = lazy(() =>
  import("../components/CollectionsPreview")
);
const BestSellers = lazy(() => import("../components/BestSellers"));

const HomePage = () => {
  return (
    <Fragment>
      <StyledContainer>
        <BannerHome />
      </StyledContainer>
      <Hero />
      <Container>
        <Suspense fallback={<h3>Loading...</h3>}>
          <CollectionsPreview />
        </Suspense>
        <FeefoRatings />
        {/* Solved double rendering with Lazy */}
        <Suspense fallback={<h3>Loading...</h3>}>
          <BestSellers />
        </Suspense>
      </Container>
    </Fragment>
  );
};

export default HomePage;
