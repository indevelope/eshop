import { API_CALL } from '~/src/middleware/API';

export const fetchProducts = () => ({
  [API_CALL]: {
    endpoint: '/Product',
    method: 'GET',
    types: [
      'FETCH_PRODUCTS_REQUEST',
      'FETCH_PRODUCTS_SUCCESS',
      'FETCH_PRODUCTS_FAILURE'
    ]
  }
});
