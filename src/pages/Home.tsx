import React from 'react';
import { Hero } from '../components/Hero';
import { Categories } from '../components/Categories';
import { RecentRecipes } from '../components/RecentRecipes';
import { StateBakes } from '../components/StateBakes';
import { Favorites } from '../components/Favorites';
import { About } from '../components/About';

export function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <RecentRecipes />
      <StateBakes />
      <Favorites />
      <About />
    </>
  );
}