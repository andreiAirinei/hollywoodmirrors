import React, { Fragment, Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

// Components
import Header from "./components/Header";
// import HomePage from "./pages/HomePage";
// import ShopPage from "./pages/ShopPage";
import Spinner from "./components/Spinner";
import SectionSponsors from "./components/SectionSponsors";
import Footer from "./components/Footer";

const HomePage = lazy(() => import("./pages/HomePage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));

class App extends Component {
  render() {
    return (
      <Fragment>
        <Styled>
          <Header />
          <Switch>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
            </Suspense>
          </Switch>
          <SectionSponsors />
          <Footer />
        </Styled>
      </Fragment>
    );
  }
}

export default App;

const Styled = styled.div`
  font-family: "Roboto", sans-serif;

  *::selection {
    background-color: #ffe9f0;
  }

  *::-moz-selection {
    background-color: #ffe9f0;
  }

  // Utils
  .item-hover {
    cursor: pointer;
    transition: all 0.05s ease-in;

    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.01),
        0 3px 5px 0 rgba(0, 0, 0, 0.1);
      transform: scale(1.01) translateY(-5px);
      opacity: 0.9;
    }
  }
`;
