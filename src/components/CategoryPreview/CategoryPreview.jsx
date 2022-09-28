import { getByTitle } from '@testing-library/react';
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import './CategoryPreview.scss';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/categorySelector';
import Spinner from '../spinner/spinner';

function CategoryPreview() {
  const cat = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <div className='shop-container'>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(cat).map((title, idx) => {
          const products = cat[title];

          return (
            <div
              className='category-preview-container'
              key={idx}
            >
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
        })
      )}
    </div>
  );
}

export default CategoryPreview;
