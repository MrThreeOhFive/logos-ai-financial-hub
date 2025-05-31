
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Λ</span>
                </div>
                <span className="ml-2 text-xl font-bold text-slate-900">Logos</span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <div className="relative group">
                <button className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors">
                  Platform <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <Link 
                to="/features" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/features') ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                Features
              </Link>
              <Link 
                to="/solutions" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/solutions') ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                Solutions
              </Link>
              <Link 
                to="/pricing" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/pricing') ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                Pricing
              </Link>
              <Link 
                to="/resources" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/resources') ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                Resources
              </Link>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-slate-700">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
              <Link 
                to="/features" 
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/features') ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/solutions" 
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/solutions') ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                to="/pricing" 
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/pricing') ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/resources" 
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/resources') ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <div className="flex flex-col space-y-2 px-3 py-2">
                <Button variant="ghost" size="sm" className="justify-start">
                  Sign In
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
