import { connect } from 'react-redux';
import get from 'lodash/get';

import Main from './Main';

const stateToProps = (state) => ({
  products: get(state, 'products.entries', [])
});

export default connect(stateToProps)(Main);