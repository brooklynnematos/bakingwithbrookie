import React from 'react';
import { Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-rose-900 text-rose-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif mb-2">Baking With Brookie</h3>
            <p className="text-rose-200">Sharing the joy of baking, one recipe at a time</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:bakingwithbrookie@gmail.com" className="hover:text-white transition-colors">
                bakingwithbrookie@gmail.com
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end space-x-2">
              <span>Made with</span>
              <Heart className="h-5 w-5 text-rose-300" />
              <span>by Brookie</span>
            </p>
            <p className="text-sm text-rose-200 mt-2">
              © {new Date().getFullYear()} Baking With Brookie. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}