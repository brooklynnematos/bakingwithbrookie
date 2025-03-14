import React from 'react';
import { useNavigate } from 'react-router-dom';

const favorites = [
  {
    id: 'new-york-cheesecake',
    title: 'New York Cheesecake',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Creamy, smooth, and simply perfect',
  },
  {
    id: 'french-macarons',
    title: 'French Macarons',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Delicate almond meringue cookies',
  },
  {
    id: 'cinnamon-rolls',
    title: 'Cinnamon Rolls',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Soft, gooey, and perfectly spiced',
  },
];

export function Favorites() {
  return (
    <section className="py-16 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center text-rose-900 mb-12">My Favorites</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {favorites.map((favorite) => (
            <FavoriteCard key={favorite.id} {...favorite} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FavoriteCard({ id, title, image, description }: typeof favorites[0]) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
      <div className="aspect-video relative">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-rose-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={() => navigate(`/recipes/${id}`)}
          className="w-full bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600 transition-colors"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}