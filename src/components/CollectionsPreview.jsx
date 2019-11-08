import React from 'react';
import styled from 'styled-components';

import CollectionsItem from './CollectionsItem';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StyledRow = styled(Row)`
  margin-top: 150px;
`;

const Column = styled(Col)`
  // border: 1px solid grey;
`;

const CollectionsPreview = () => (
  <StyledRow>
    <Column xs='12' md='6' lg='4'>
      <CollectionsItem />
    </Column>
    <Column xs='12' md='6' lg='4'>
      <CollectionsItem />
    </Column>
    <Column xs='12' md='6' lg='4'>
      <CollectionsItem />
    </Column>
  </StyledRow>
);

export default CollectionsPreview;
