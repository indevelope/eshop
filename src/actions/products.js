import request from 'superagent';

import { API_ROOT } from '~/src/constants/API';

export const fetchProductsSuccess = (res) => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  res
});

export const fetchProductsFailure = (res) => ({
  type: 'FETCH_PRODUCTS_FAILURE'
});

export const fetchProductsRequest = (error) => ({
  type: 'FETCH_PRODUCTS_REQUEST',
  error
});

export const fetchProducts = () => (
  (dispatch) => {
    dispatch(fetchProductsRequest());
    return request
      .get(`${API_ROOT}/Product`)
      .then((res) => {
        dispatch(fetchProductsSuccess(res.body));
        return res.body;
      })
      .catch((e) => {
        dispatch(fetchProductsFailure(e));
        return e;
      });
  }
);