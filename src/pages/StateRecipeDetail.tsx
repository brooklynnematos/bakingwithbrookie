import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const stateRecipes = {
  'alabama': {
    title: 'Lane Cake',
    state: 'Alabama',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    video: 'https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4',
    description: 'A rich, bourbon-laced layer cake filled with pecans, raisins, and coconut, officially recognized as Alabama\'s state dessert.',
    history: 'Created by Emma Rylander Lane of Clayton, Alabama in the late 19th century, this cake was even mentioned in Harper Lee\'s "To Kill a Mockingbird."',
    difficulty: 'Advanced',
    prepTime: '1 hour',
    cookTime: '25 mins per layer',
    servings: '12-16',
    ingredients: [
      'For the Cake:',
      '3 1/2 cups cake flour',
      '2 teaspoons baking powder',
      '1/4 teaspoon salt',
      '1 cup butter, softened',
      '2 cups sugar',
      '8 egg whites',
      '1 cup milk',
      '1 teaspoon vanilla extract',
      
      'For the Filling:',
      '8 egg yolks',
      '1 cup butter',
      '1 1/2 cups sugar',
      '1 cup chopped pecans',
      '1 cup raisins',
      '1 cup grated coconut',
      '1/4 cup bourbon',
      '1 teaspoon vanilla extract'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease and flour three 9-inch cake pans.',
      'Sift together flour, baking powder, and salt.',
      'Cream butter and sugar until light and fluffy.',
      'Beat egg whites until stiff peaks form.',
      'Alternately add flour mixture and milk to butter mixture.',
      'Fold in egg whites and vanilla.',
      'Divide batter among prepared pans.',
      'Bake for 25 minutes or until done.',
      'For filling, cook egg yolks, butter, and sugar in double boiler until thickened.',
      'Add remaining filling ingredients and cool.',
      'Spread filling between layers and on top of cake.',
      'Let cake age for 1-2 days before serving for best flavor.'
    ],
    tips: [
      'Use room temperature ingredients for best results',
      'Don\'t overmix the batter after adding flour',
      'The filling should be thick enough to spread but not runny',
      'Store in an airtight container'
    ]
  }
};

export function StateRecipeDetail() {
  const { state } = useParams();
  const navigate = useNavigate();
  const recipe = state ? stateRecipes[state as keyof typeof stateRecipes] : null;

  if (!recipe) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl text-rose-900">Recipe not found</h1>
        <button
          onClick={() => navigate('/state-bakes')}
          className="mt-4 bg-rose-500 text-white px-4 py-2 rounded"
        >
          Back to State Bakes
        </button>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/state-bakes')}
          className="mb-8 text-rose-500 hover:text-rose-600 transition-colors"
        >
          ← Back to State Bakes
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
                {recipe.state} State Dessert
              </span>
            </div>

            <div className="bg-rose-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-serif text-rose-900 mb-3">History</h2>
              <p className="text-gray-700">{recipe.history}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-serif text-rose-900 mb-4">Recipe Video</h2>
              <div className="aspect-video rounded-lg overflow-hidden bg-black">
                <video
                  controls
                  className="w-full h-full"
                  poster={recipe.image}
                >
                  <source src={recipe.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
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
                  <li key={index} className={ingredient.endsWith(':') ? 'font-medium mt-4' : 'text-gray-700'}>
                    {ingredient}
                  </li>
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

            <div className="mb-8">
              <h2 className="text-2xl font-serif text-rose-900 mb-4">Tips</h2>
              <ul className="list-disc list-inside space-y-2">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="text-gray-700">{tip}</li>
                ))}
              </ul>
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => navigate('/state-bakes')}
                className="bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition-colors inline-flex items-center"
              >
                ← Back to State Bakes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}