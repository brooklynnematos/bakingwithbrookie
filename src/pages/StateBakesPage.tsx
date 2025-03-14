import React from 'react';
import { StateBakes } from '../components/StateBakes';

export function StateBakesPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-rose-900 mb-8">State Bakes</h1>
        <p className="text-gray-700 mb-12">
          Explore signature bakes from all 50 states of America. Each state has its own unique
          culinary heritage and beloved recipes that have been passed down through generations.
          Click on any state to discover its signature bake and the story behind it.
        </p>
        <StateBakes />
      </div>
    </div>
  );
}