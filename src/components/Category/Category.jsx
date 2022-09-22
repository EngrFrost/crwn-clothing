import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { userContext } from '../userContext/userContext';
import './Category.scss';
function Category() {
  const { category } = useParams();
  const { data } = useContext(userContext);
  const { categoriesMap } = data;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className='title'>{category}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
              />
            );
          })}
      </div>
    </>
  );
}

export default Category;
