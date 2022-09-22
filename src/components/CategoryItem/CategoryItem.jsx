import React from 'react';
import './categoriesItem.scss';
import { useNavigate } from 'react-router-dom';
function CategoryItem({ category }) {
  const { imageUrl, title } = category;
  const nav = useNavigate();
  return (
    <div className='category-container-main'>
      <div
        className='background-image-main'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div
        className='category-body-container-main'
        onClick={() => nav(`/shop/${title}`)}
      >
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
