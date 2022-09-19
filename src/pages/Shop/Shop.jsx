import React from 'react';
import { useContext } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { userContext } from '../../components/userContext/userContext';
import './Shop.scss';
function Shop() {
  const { data } = useContext(userContext);
  return (
    <div className='products-container'>
      {data.products.map((product) => {
        return (
          <ProductCard
            product={product}
            key={product.id}
          />
        );
      })}
    </div>
  );
}

export default Shop;
