import React from "react";
import styled from "styled-components";

import Container from "react-bootstrap/Container";

const StyledContainer = styled(Container)`
  padding-top: 150px;
  @media all and (max-width: 992px) {
    padding-top: 180px;
  }
`;

const ShopPage = () => {
  return (
    <StyledContainer>
      <h1>Shop Page</h1>
    </StyledContainer>
  );
};

export default ShopPage;
