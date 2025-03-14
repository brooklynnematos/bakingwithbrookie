import React from 'react';
import { useNavigate } from 'react-router-dom';

export function About() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-serif text-rose-900 mb-6">About Me</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hi! I'm Brookie, and I've been passionate about baking since I was a child.
              What started as helping my grandmother in the kitchen has grown into a lifelong
              love affair with creating delicious treats that bring joy to others.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Through this website, I hope to share not just recipes, but the stories,
              techniques, and love that goes into every bake. From traditional American
              classics to international favorites, join me on this sweet journey!
            </p>
            <button
              onClick={() => navigate('/about')}
              className="bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors"
            >
              Learn More About Me
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556911073-a517e752729c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Brookie baking"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}