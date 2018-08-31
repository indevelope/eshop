import React from 'react';

import { fetchProducts } from '~/src/actions/products';
import Main from '~/src/components/views/Main';

export default [
  {
    path: '/',
    exact: true,
    strict: true,
    render: () => (
      <Main />
    ),
    prepareData: (store, query, params, routes) => {
      return store.dispatch(fetchProducts());
    }
  }
];