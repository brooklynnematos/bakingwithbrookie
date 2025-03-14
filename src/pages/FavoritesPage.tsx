import React from 'react';

const favoriteBakes = [
  {
    title: 'New York Cheesecake',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Creamy, smooth, and simply perfect. This classic New York-style cheesecake features a buttery graham cracker crust and a rich, dense filling that\'s both tangy and sweet.',
    story: 'This recipe was passed down from my grandmother, who learned it while working in a Brooklyn bakery in the 1960s.',
    difficulty: 'Intermediate',
    prepTime: '30 mins',
    cookTime: '1 hour 30 mins'
  },
  {
    title: 'French Macarons',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Delicate almond meringue cookies with a smooth ganache filling. These colorful treats are as beautiful as they are delicious.',
    story: 'I spent months perfecting this recipe after being inspired by a trip to Paris. Each batch teaches me something new.',
    difficulty: 'Advanced',
    prepTime: '1 hour',
    cookTime: '15 mins'
  },
  {
    title: 'Cinnamon Rolls',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Soft, gooey, and perfectly spiced cinnamon rolls with cream cheese frosting. The ultimate comfort food breakfast.',
    story: 'This recipe came from countless Sunday morning experiments, trying to create the perfect balance of sweetness and spice.',
    difficulty: 'Intermediate',
    prepTime: '2 hours',
    cookTime: '25 mins'
  }
];

export function FavoritesPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-rose-900 mb-8">My Favorite Bakes</h1>
        <p className="text-gray-700 mb-12">
          These are the recipes that hold a special place in my heart. Each one comes with
          its own story and represents a milestone in my baking journey.
        </p>
        
        <div className="space-y-12">
          {favoriteBakes.map((bake) => (
            <div
              key={bake.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-square relative">
                  <img
                    src={bake.image}
                    alt={bake.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-serif text-rose-900 mb-4">{bake.title}</h2>
                  <p className="text-gray-700 mb-4">{bake.description}</p>
                  <div className="bg-rose-50 p-4 rounded-lg mb-6">
                    <h3 className="text-lg font-medium text-rose-900 mb-2">The Story</h3>
                    <p className="text-gray-700 italic">{bake.story}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-500">
                    <div>
                      <span className="font-medium">Difficulty:</span>
                      <br />
                      {bake.difficulty}
                    </div>
                    <div>
                      <span className="font-medium">Prep Time:</span>
                      <br />
                      {bake.prepTime}
                    </div>
                    <div>
                      <span className="font-medium">Cook Time:</span>
                      <br />
                      {bake.cookTime}
                    </div>
                  </div>
                  <button className="mt-6 w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600 transition-colors">
                    View Full Recipe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}