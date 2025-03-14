import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const categories = ['US Bakes', 'Country Bakes', 'Desserts', 'Cakes', 'Bread'];

const allRecipes = [
  {
    id: 'classic-apple-pie',
    title: 'Classic Apple Pie',
    category: 'US Bakes',
    image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'A traditional American apple pie with a flaky crust',
    difficulty: 'Intermediate',
    prepTime: '45 mins',
    cookTime: '1 hour'
  },
  {
    id: 'chocolate-chip-cookies',
    title: 'Chocolate Chip Cookies',
    category: 'US Bakes',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Soft and chewy cookies with melty chocolate chips',
    difficulty: 'Easy',
    prepTime: '20 mins',
    cookTime: '12 mins'
  },
  {
    id: 'sourdough-bread',
    title: 'Sourdough Bread',
    category: 'Bread',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Artisanal sourdough bread with a perfect crust',
    difficulty: 'Advanced',
    prepTime: '24 hours',
    cookTime: '45 mins'
  },
  {
    id: 'victoria-sponge',
    title: 'Victoria Sponge',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Classic British sponge cake with jam and cream filling',
    difficulty: 'Intermediate',
    prepTime: '30 mins',
    cookTime: '25 mins'
  },
  {
    id: 'french-baguette',
    title: 'French Baguette',
    category: 'Country Bakes',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Traditional French bread with crispy crust',
    difficulty: 'Advanced',
    prepTime: '3 hours',
    cookTime: '25 mins'
  },
  {
    id: 'tiramisu',
    title: 'Tiramisu',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Italian coffee-flavored dessert',
    difficulty: 'Intermediate',
    prepTime: '45 mins',
    cookTime: '4 hours'
  }
];

export function Recipes() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
      categoriesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state]);

  const filteredRecipes = selectedCategory
    ? allRecipes.filter(recipe => recipe.category === selectedCategory)
    : allRecipes;

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-rose-900 mb-8">All Recipes</h1>
        
        <div ref={categoriesRef} className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-colors ${
              !selectedCategory
                ? 'bg-rose-500 text-white'
                : 'bg-rose-100 text-rose-900 hover:bg-rose-200'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-rose-500 text-white'
                  : 'bg-rose-100 text-rose-900 hover:bg-rose-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="aspect-video relative">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-medium text-rose-900">{recipe.title}</h2>
                  <span className="text-sm text-rose-500 bg-rose-50 px-2 py-1 rounded">
                    {recipe.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{recipe.description}</p>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-500">
                  <div>
                    <span className="font-medium">Difficulty:</span>
                    <br />
                    {recipe.difficulty}
                  </div>
                  <div>
                    <span className="font-medium">Prep:</span>
                    <br />
                    {recipe.prepTime}
                  </div>
                  <div>
                    <span className="font-medium">Cook:</span>
                    <br />
                    {recipe.cookTime}
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/recipes/${recipe.id}`)}
                  className="mt-4 w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600 transition-colors"
                >
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}