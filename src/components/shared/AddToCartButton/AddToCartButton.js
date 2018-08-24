import React from 'react';

import { Button } from 'reactstrap';

const AddToCartButton = ({ product, addToCart }) => {
  return (
    <Button 
      onClick={() => {
        addToCart(product);
      }}
    >
      Buy for ${product.price}
    </Button>
  );
};

export default AddToCartButton;