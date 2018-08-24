import React from 'react';

import { CardColumns } from 'reactstrap';

import ProductCard from './Card';

const Main = ({ products }) => {
  return (
    <CardColumns>
      {
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      }
    </CardColumns>
  );
};

export default Main;