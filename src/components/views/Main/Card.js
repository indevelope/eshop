import React from 'react';

import { 
  Card, CardImg, CardBody,
  CardTitle 
} from 'reactstrap';

import AddToCartButton from '~/src/components/shared/AddToCartButton';

const ProductCard = ({ product: { image, name, price }, product }) => (
  <Card>
    <CardImg top width='100%' src={image} alt={name} />
    <CardBody>
      <CardTitle>{name}</CardTitle>
      <AddToCartButton product={product} />
    </CardBody>
  </Card>
);

export default ProductCard;