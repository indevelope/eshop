const INITIAL_STATE = {
  entries: [],
  isFetching: false,
  isError: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return Object.assign({}, INITIAL_STATE, { isFetching: true });

    case 'FETCH_PRODUCTS_FAILURE':
      return Object.assign({}, INITIAL_STATE, { isError: true });

    case 'FETCH_PRODUCTS_SUCCESS': 
      return Object.assign({}, INITIAL_STATE, { entries: action.res });

      default:
      return state;
  }
}