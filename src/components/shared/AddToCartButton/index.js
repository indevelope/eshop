import { connect } from 'react-redux';

import { addToCart } from '~/src/actions/cart';
import AddToCartButton from './AddToCartButton';

const actionsToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addToCart(product))
});

export default connect(null, actionsToProps)(AddToCartButton);