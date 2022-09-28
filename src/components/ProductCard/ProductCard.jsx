import React from 'react';
import Button from '../Button/Button';
import './ProductCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AddItemtoCart } from '../../store/cart/cartAction';
import { selectCartItems } from '../../store/cart/cartSelector';
function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
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
        onClick={() => dispatch(AddItemtoCart(cartItems, product))}
      >
        Add to Card
      </Button>
    </div>
  );
}

export default ProductCard;
