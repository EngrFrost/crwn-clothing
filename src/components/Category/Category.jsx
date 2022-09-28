import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import './Category.scss';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/categorySelector';
import Spinner from '../spinner/spinner';
function Category() {
  console.log('render/re-rendering category component');
  const { category } = useParams();
  const prodRedux = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(prodRedux[category]);
  const isloading = useSelector(selectCategoriesIsLoading);
  console.log(isloading);
  useEffect(() => {
    console.log('effect fired calling set Products');
    setProducts(prodRedux[category]);
  }, [category, prodRedux]);

  return (
    <>
      <h2 className='title'>{category}</h2>
      {isloading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
}

export default Category;
