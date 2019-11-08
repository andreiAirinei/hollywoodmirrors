import React, { Fragment } from 'react';
import styled from 'styled-components';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StyledRow = styled(Row)`
  margin-top: 150px;
  border: 1px solid red;
`;

const Column = styled(Col)`
  border: 1px solid grey;
  height: 200px;
`;

const BestSellers = () => (
  <Fragment>
    <h1>Best Sellers</h1>
    <StyledRow>
      <Column xs='12' md='6' lg='4'></Column>
      <Column xs='12' md='6' lg='4'></Column>
      <Column xs='12' md='6' lg='4'></Column>
    </StyledRow>
  </Fragment>
);

export default BestSellers;
