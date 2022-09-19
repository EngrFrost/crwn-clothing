import React from 'react';
import { useContext } from 'react';
import Button from '../Button/Button';
import { userContext } from '../userContext/userContext';
import './ProductCard.scss';
function ProductCard({ product }) {
  const { AddItemtoCart } = useContext(userContext);
  const { name, price, imageUrl } = product;
  return (
    <div className='product-card-container'>
      <img
        src={imageUrl}
        alt='images'
      />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button
        buttonType='inverted'
        onClick={() => AddItemtoCart(product)}
      >
        Add to Card
      </Button>
    </div>
  );
}

export default ProductCard;
