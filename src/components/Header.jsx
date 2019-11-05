import React, { Fragment } from 'react';
import Banner from './Banner';
import CustomNavbar from './CustomNavbar';
import styled from 'styled-components';

const Styled = styled.div`
  width: 100%;
  z-index: 999;
`;

const Header = () => (
  <Styled className='position-fixed'>
    <Banner />
    <CustomNavbar />
  </Styled>
);

export default Header;
