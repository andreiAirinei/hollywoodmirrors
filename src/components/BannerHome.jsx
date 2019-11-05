import React from 'react';
import styled from 'styled-components';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CustomRow = styled(Row)`
  font-weight: bold;
  letter-spacing: 2px;

  span {
    display: block;
  }

  .column-border {
    border-right: 1px solid red;

    @media all and (max-width: 575px) {
      border-right: none;
      border-bottom: 1px solid red;
      padding-bottom: 5px;
      margin-bottom: 5px;
    }
  }
`;

const PrimaryText = styled.span`
  font-size: 15px;
`;

const SecondaryText = styled.span`
  font-size: 11px;
`;

const BannerHome = () => (
  <CustomRow className='text-center p-2'>
    <Col sm='6' className='column-border'>
      <PrimaryText>FREE UK NEXT DAY DELIVERY</PrimaryText>
      <SecondaryText>INCLUDING WEEKENDS</SecondaryText>
    </Col>
    <Col sm='6'>
      <PrimaryText>THE ORIGINAL AND THE BEST</PrimaryText>
      <SecondaryText>QUALITY HOLLYWOOD MIRRORS</SecondaryText>
    </Col>
  </CustomRow>
);

export default BannerHome;
