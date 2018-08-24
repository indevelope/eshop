import { connect } from 'react-redux';

import CartButton from './CartButton';

const stateToProps = (state) => ({
  count: state.cart.entries.length
});

export default connect(stateToProps)(CartButton);