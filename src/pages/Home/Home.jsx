import React from 'react';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import { Outlet } from 'react-router-dom';
const categoryItem = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
  },
];
function Home() {
  return (
    <div className='categories-container'>
      {categoryItem.map((category) => (
        <CategoryItem
          category={category}
          key={category.id}
        />
      ))}
      <Outlet />
    </div>
  );
}

export default Home;
