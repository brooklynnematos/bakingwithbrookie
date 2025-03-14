import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie, Instagram, Youtube } from 'lucide-react';
import { TikTok } from '../components/TikTok';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Cookie className="h-8 w-8 text-rose-500" />
            <span className="ml-2 text-2xl font-serif text-rose-900">Baking With Brookie</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <NavLink to="/">
                <Cookie className="h-4 w-4 inline-block mr-1" />
                Home
              </NavLink>
              <NavLink to="/recipes">Recipes</NavLink>
              <NavLink to="/state-bakes">State Bakes</NavLink>
              <NavLink to="/favorites">Favorites</NavLink>
              <NavLink to="/about">About</NavLink>
            </nav>
            
            <div className="flex items-center space-x-4 ml-8">
              <SocialLink href="https://instagram.com/bakingwithbrookie_" icon={Instagram} />
              <SocialLink href="https://tiktok.com/@bakingwithbrookie_" icon={TikTok} />
              <SocialLink href="#" icon={Youtube} className="opacity-50 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-rose-500 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
    >
      {children}
    </Link>
  );
}

function SocialLink({ href, icon: Icon, className = '' }: { href: string; icon: React.ElementType; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-500 hover:text-rose-500 transition-colors ${className}`}
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}