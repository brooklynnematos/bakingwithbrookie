import React from 'react';
import { useNavigate } from 'react-router-dom';

const recentRecipes = [
  {
    id: 'classic-apple-pie',
    title: 'Classic Apple Pie',
    image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'A traditional American apple pie with a flaky crust',
  },
  {
    id: 'chocolate-chip-cookies',
    title: 'Chocolate Chip Cookies',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Soft and chewy cookies with melty chocolate chips',
  },
  {
    id: 'sourdough-bread',
    title: 'Sourdough Bread',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Artisanal sourdough bread with a perfect crust',
  },
];

export function RecentRecipes() {
  return (
    <section className="py-16 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center text-rose-900 mb-12">Recent Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecipeCard({ id, title, image, description }: typeof recentRecipes[0]) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="aspect-video relative">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-rose-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button 
          onClick={() => navigate(`/recipes/${id}`)}
          className="text-rose-500 font-medium hover:text-rose-600 transition-colors"
        >
          View Recipe →
        </button>
      </div>
    </div>
  );
}