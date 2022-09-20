import React from 'react';
import HeaderCarousel from '../UI/home/HeaderCorousel';
import Categories from '../UI/home/Categories';
import BestSeller from '../UI/home/BestSeller';
import NewArival from '../UI/home/NewArrival';

function Home() {
  return (
    <div>
      <HeaderCarousel />
      <Categories />
      <BestSeller />
      <NewArival />
    </div>
  )
}

export default Home