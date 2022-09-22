import { getByTitle } from '@testing-library/react';
import React, { useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { userContext } from '../userContext/userContext';
import { Link } from 'react-router-dom';
import './CategoryPreview.scss';

function CategoryPreview() {
  const { data } = useContext(userContext);

  return (
    <div className='shop-container'>
      {Object.keys(data.categoriesMap).map((title) => {
        const products = data.categoriesMap[title];
        return (
          <div className='category-preview-container'>
            <h2>
              <Link
                to={title}
                className='title'
              >
                {title.toUpperCase()}
              </Link>
            </h2>
            <div className='preview'>
              {products
                .filter((_, idx) => idx < 4)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryPreview;
