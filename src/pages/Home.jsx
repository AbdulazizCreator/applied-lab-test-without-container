import React from 'react'
import { FrontLayout } from '../components/layout'
import { About, Hero, Products, Workout } from '../components/home'

const Home = () => {
  return (
    <FrontLayout>
      <Hero />
      <About />
      <Workout />
      <Products />
    </FrontLayout>
  );
}

export default Home