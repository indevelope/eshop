const INITIAL_STATE = {
  entries: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return Object.assign(
        {},
        state,
        {
          entries: [...state.entries, action.product]
        }
      )
    default:
      return state;
  }
}