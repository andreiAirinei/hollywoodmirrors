import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CustomLink = styled(Link)`
  margin: 0;
  padding: 10px 0;
`;

const Styled = styled.div`
  background: #f9f4f1;

  .cart-icon {
    padding: 0;
    margin: 0 0 0 25px;
    cursor: pointer;
  }

  nav > div > a.navbar-brand {
    font-weight: 600;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.9);
    letter-spacing: 2px;
  }

  .navbar .collapse,
  .dropdown .dropdown-menu a,
  #basic-navbar-nav a {
    font-size: 0.7rem;
    font-weight: 900;
    letter-spacing: 2px;
  }

  .dropdown {
    .dropdown-menu {
      background: #f0e3db;
      transition: 0.1s ease-in;
    }

    &:hover .dropdown-menu {
      display: block;
      width: 200px;

      a:hover {
        color: red;
      }
    }
  }

  #basic-navbar-nav > div > a,
  #basic-navbar-nav > div > div > a,
  .link-tags {
    color: #090909;
    margin: 0 7px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
    text-decoration: none;
    position: relative;
    transition: 0.1s linear;

    &:before {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 0;
      width: 100%;
      border-bottom: 4px solid #000;
      opacity: 0;
      transition: 0.1s ease-in;
    }

    &:hover {
      color: red;

      &:before {
        opacity: 1;
        bottom: -10px;
      }
    }
  }

  @media all and (max-width: 1091px) {
    #basic-navbar-nav > div > a,
    #basic-navbar-nav > div > div > a { 
        &:hover:before {
          opacity: 0;
        }
      }
    }
  }
`;
export default Styled;
