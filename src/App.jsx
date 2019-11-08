import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// Components
// import { Layout } from './layouts/Layout.jsx';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

const Styled = styled.div`
  font-family: 'Roboto', sans-serif;
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      descriptionHtml: []
    };
  }

  componentDidMount() {
    this.props.client.product.fetchAll().then(products => {
      console.log(products);
    });

    this.props.client.collection.fetchAllWithProducts().then(collections => {
      // Do something with the collections
      console.log(collections);
      this.setState({
        descriptionHtml: collections[1].products[0].descriptionHtml
      });
    });

    this.props.client.shop.fetchInfo().then(shop => {
      console.log('This shop: ', shop);
    });
  }

  render() {
    return (
      <Fragment>
        <Styled>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
          </Switch>
          <div
            dangerouslySetInnerHTML={{ __html: this.state.descriptionHtml }}
          />
        </Styled>
      </Fragment>
    );
  }
}

export default App;
