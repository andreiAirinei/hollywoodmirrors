import React, { Fragment } from 'react';
import styled from 'styled-components';

// Sections
import Hero from '../components/Hero';
import BannerHome from '../components/BannerHome';
import CollectionsPreview from '../components/CollectionsPreview';

import Container from 'react-bootstrap/Container';

const StyledContainer = styled(Container)`
  padding-top: 150px;
  @media all and (max-width: 992px) {
    padding-top: 180px;
  }
`;

const HomePage = () => {
  return (
    <Fragment>
      <StyledContainer>
        <BannerHome />
      </StyledContainer>
      <Hero />
      <Container>
        <CollectionsPreview />
      </Container>
    </Fragment>
  );
};

export default HomePage;
