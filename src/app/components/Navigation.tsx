import { Logo } from '@/app/components/Logo';
import { ArrowRight } from 'lucide-react';

interface NavigationProps {
  onNavigate?: (page: 'home' | 'logandlock') => void;
  currentPage?: 'home' | 'logandlock';
}

export function Navigation({ onNavigate, currentPage = 'home' }: NavigationProps) {
  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProductClick = () => {
    if (currentPage === 'home') {
      const productsSection = document.getElementById('products');
      productsSection?.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const productsSection = document.getElementById('products');
        productsSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleExploreProducts = () => {
    if (currentPage === 'home') {
      const productsSection = document.getElementById('products');
      productsSection?.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const productsSection = document.getElementById('products');
        productsSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleSolutionsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage === 'home') {
      const solutionsSection = document.getElementById('solutions');
      solutionsSection?.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const solutionsSection = document.getElementById('solutions');
        solutionsSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage === 'home') {
      const aboutSection = document.getElementById('about');
      aboutSection?.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage === 'home') {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          {/* Left: Logo */}
          <button 
            onClick={handleLogoClick}
            className="hover:opacity-80 transition-opacity"
          >
            <Logo />
          </button>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={handleProductClick}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Products
            </button>
            <button 
              onClick={handleSolutionsClick}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Solutions
            </button>
            <button 
              onClick={handleAboutClick}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={handleContactClick}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Right: Single CTA */}
          <button 
            onClick={handleExploreProducts}
            className="h-11 px-6 rounded-lg bg-gradient-to-r from-orange-600 via-orange-600 to-red-600 hover:from-orange-700 hover:via-orange-700 hover:to-red-700 text-white text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-orange-600/20"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </nav>
  );
}