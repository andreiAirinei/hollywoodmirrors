import React from 'react';
import styled from 'styled-components';

// Bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.01), 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    transform: scale(1.01);
  }
`;

const CollectionsItem = () => (
  <StyledCard>
    <Card.Img variant='top' src={require('../assets/feature1.webp')} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button variant='primary'>SHOP NOW</Button>
    </Card.Body>
  </StyledCard>
);

export default CollectionsItem;
