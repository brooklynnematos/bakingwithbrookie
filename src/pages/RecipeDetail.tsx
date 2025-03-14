import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const recipeDetails = {
  'classic-apple-pie': {
    title: 'Classic Apple Pie',
    category: 'US Bakes',
    image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'A traditional American apple pie with a flaky crust',
    difficulty: 'Intermediate',
    prepTime: '45 mins',
    cookTime: '1 hour',
    servings: '8',
    ingredients: [
      '2 1/2 cups all-purpose flour',
      '1 cup cold butter, cubed',
      '1/4 cup cold water',
      '6 cups sliced apples',
      '3/4 cup sugar',
      '2 tablespoons cinnamon',
      '1 tablespoon lemon juice'
    ],
    instructions: [
      'Prepare the pie crust by mixing flour and butter until crumbly',
      'Add cold water gradually until dough forms',
      'Chill dough for 1 hour',
      'Mix sliced apples with sugar, cinnamon, and lemon juice',
      'Roll out dough and line pie dish',
      'Add filling and top crust',
      'Bake at 375°F for 45-50 minutes'
    ],
    tips: [
      'Use cold ingredients for the flakiest crust',
      'Mix Granny Smith and Honeycrisp apples for best flavor',
      'Let cool for 30 minutes before serving'
    ]
  }
  // Add more recipes as needed
};

export function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = id ? recipeDetails[id as keyof typeof recipeDetails] : null;

  if (!recipe) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl text-rose-900">Recipe not found</h1>
        <button
          onClick={() => navigate('/recipes')}
          className="mt-4 bg-rose-500 text-white px-4 py-2 rounded"
        >
          Back to Recipes
        </button>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/recipes')}
          className="mb-8 text-rose-500 hover:text-rose-600 transition-colors"
        >
          ← Back to Recipes
        </button>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="aspect-video relative">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-3xl font-serif text-rose-900">{recipe.title}</h1>
              <span className="text-sm text-rose-500 bg-rose-50 px-2 py-1 rounded">
                {recipe.category}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8 p-4 bg-rose-50 rounded-lg">
              <div>
                <span className="font-medium">Difficulty</span>
                <p className="text-gray-600">{recipe.difficulty}</p>
              </div>
              <div>
                <span className="font-medium">Prep Time</span>
                <p className="text-gray-600">{recipe.prepTime}</p>
              </div>
              <div>
                <span className="font-medium">Cook Time</span>
                <p className="text-gray-600">{recipe.cookTime}</p>
              </div>
              <div>
                <span className="font-medium">Servings</span>
                <p className="text-gray-600">{recipe.servings}</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-serif text-rose-900 mb-4">Ingredients</h2>
              <ul className="list-disc list-inside space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-700">{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-serif text-rose-900 mb-4">Instructions</h2>
              <ol className="list-decimal list-inside space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="text-gray-700">{instruction}</li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">Tips</h2>
              <ul className="list-disc list-inside space-y-2">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="text-gray-700">{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}