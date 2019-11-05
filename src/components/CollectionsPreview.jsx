import React from 'react';
import styled from 'styled-components';

import CollectionsItem from './CollectionsItem';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Column = styled(Col)`
  // border: 1px solid grey;
`;

const CollectionsPreview = () => (
  <Row>
    <Column>
      <CollectionsItem />
    </Column>
    <Column>
      <CollectionsItem />
    </Column>
    <Column>
      <CollectionsItem />
    </Column>
  </Row>
);

export default CollectionsPreview;
