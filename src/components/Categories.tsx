import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Donut, Dessert, IceCream as IceCreamCone, Cake, Croissant } from 'lucide-react';

const categories = [
  {
    title: 'US Bakes',
    icon: Donut,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Country Bakes',
    icon: Dessert,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Desserts',
    icon: IceCreamCone,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Cakes',
    icon: Cake,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Bread',
    icon: Croissant,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate('/recipes', { state: { selectedCategory: category } });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center text-rose-900 mb-12">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category) => (
            <CategoryCard 
              key={category.title} 
              {...category} 
              onClick={() => handleCategoryClick(category.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ title, icon: Icon, image, onClick }: typeof categories[0] & { onClick: () => void }) {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-square relative">
        <div className="absolute inset-0 bg-rose-100 group-hover:opacity-0 transition-opacity flex flex-col items-center justify-center">
          <Icon className="h-12 w-12 text-rose-500" />
          <h3 className="text-lg font-medium text-rose-900 mt-2">{title}</h3>
        </div>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
  );
}