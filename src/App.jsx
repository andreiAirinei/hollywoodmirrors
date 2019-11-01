import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Layout } from './layouts/Layout';

function App() {
  return (
    <Fragment>
      <h1>HELLO !!!</h1>
      <Layout>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          quisquam voluptatum cumque eius et, iusto officia perspiciatis
          reiciendis quos veritatis nobis consequuntur ducimus consequatur
          aliquam. Odit, amet sit nisi animi a ab doloribus, dignissimos
          inventore ut blanditiis aliquid maiores cumque asperiores pariatur?
          Voluptas porro quisquam eveniet perferendis neque quia reprehenderit!
        </p>
      </Layout>
    </Fragment>
  );
}

export default App;
