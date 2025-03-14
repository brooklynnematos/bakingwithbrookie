import React from 'react';

export function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif text-rose-900 mb-8 text-center">About Me</h1>
          
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1556911073-a517e752729c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Brookie baking"
              className="w-full h-[400px] object-cover rounded-lg shadow-xl mb-8"
            />
          </div>

          <div className="prose prose-rose max-w-none">
            <h2 className="text-2xl font-serif text-rose-900 mb-4">My Baking Journey</h2>
            <p className="text-gray-700 mb-6">
              Hello! I'm Brookie, and my love for baking started in my grandmother's kitchen
              when I was just tall enough to reach the counter. What began as weekend
              adventures making chocolate chip cookies has blossomed into a lifelong passion
              for creating delicious treats that bring joy to others.
            </p>

            <h2 className="text-2xl font-serif text-rose-900 mb-4">Why I Started This Blog</h2>
            <p className="text-gray-700 mb-6">
              After years of friends and family requesting my recipes, I decided to create
              this space to share not just the recipes, but the stories, techniques, and love
              that goes into every bake. From traditional American classics to international
              favorites, each recipe here has been tested, tweaked, and perfected in my kitchen.
            </p>

            <h2 className="text-2xl font-serif text-rose-900 mb-4">My Baking Philosophy</h2>
            <p className="text-gray-700 mb-6">
              I believe that baking is both an art and a science. While precise measurements
              are important, I also encourage bakers to trust their instincts and experiment.
              Every recipe here comes with detailed instructions, tips, and variations to help
              you succeed in your own kitchen.
            </p>

            <div className="bg-rose-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-serif text-rose-900 mb-3">Quick Facts About Me</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Favorite thing to bake: Sourdough bread</li>
                <li>Baking since: Age 7</li>
                <li>Most challenging bake: French macarons</li>
                <li>Dream baking destination: Paris, France</li>
                <li>Can't bake without: My grandmother's rolling pin</li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif text-rose-900 mb-4">Let's Connect!</h2>
            <p className="text-gray-700">
              I love hearing from fellow baking enthusiasts! Whether you've tried one of my
              recipes, have a question, or just want to chat about baking, feel free to reach
              out through social media or email. Your stories and photos of your baking
              adventures always make my day!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}