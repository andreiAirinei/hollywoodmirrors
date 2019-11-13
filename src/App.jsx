import React, { Fragment, Component } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

// Components
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

class App extends Component {
  componentDidMount() {
    // this.props.client.product.fetchAll().then(products => {
    //   console.log(products);
    // });
    // this.props.client.collection.fetchAllWithProducts().then(collections => {
    //   // Do something with the collections
    //   console.log(collections);
    //   this.setState({
    //     descriptionHtml: collections[1].products[0].descriptionHtml
    //   });
    // });
    // this.props.client.shop.fetchInfo().then(shop => {
    //   console.log('This shop: ', shop);
    // });
  }

  render() {
    return (
      <Fragment>
        <Styled>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
          </Switch>
        </Styled>
      </Fragment>
    );
  }
}

export default App;

const Styled = styled.div`
  font-family: "Roboto", sans-serif;
  margin-bottom: 200px;

  // Utils
  .item-hover {
    cursor: pointer;
    transition: all 0.05s ease-in;

    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.01),
        0 3px 5px 0 rgba(0, 0, 0, 0.1);
      transform: scale(1.01) translateY(-5px);
    }
  }
`;
