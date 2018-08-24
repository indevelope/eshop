import React from 'react';

import { Button } from 'reactstrap';

export default ({ count }) => {
  return (
    <Button color='info'>Cart ({count})</Button>
  );
};