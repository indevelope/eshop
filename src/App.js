import React from 'react';

import { Provider } from 'react-redux';

import store from '~/src/store';

import { fetchProducts } from '~/src/actions/products';

import Main from '~/src/components/views/Main';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';

import Layout from '~/src/components/shared/Layout';

store.dispatch(fetchProducts());

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Container>
          <Main />
        </Container>
      </Layout>   
    </Provider>
  );
};

export default App;