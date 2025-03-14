import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-rose-100/70"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-serif text-rose-900 mb-6">Welcome to My Baking Journey</h1>
        <p className="text-xl text-gray-800 mb-8">
          Join me as I explore the art of baking, from classic American treats to international delights.
          Every recipe tells a story, and I'm here to share them all with you.
        </p>
        <button 
          onClick={() => navigate('/recipes')}
          className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-colors"
        >
          Explore Recipes
        </button>
      </div>
    </section>
  );
}