import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { Products } from '@/app/components/Products';
import { Solutions } from '@/app/components/Solutions';
import { WhyInceptionForge } from '@/app/components/WhyInceptionForge';
import { About } from '@/app/components/About';
import { CTA } from '@/app/components/CTA';
import { Footer } from '@/app/components/Footer';
import { LogAndLockPage } from '@/app/components/LogAndLockPage';
import { useCallback, useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'logandlock'>('home');

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleExploreProducts = useCallback(() => {
    if (currentPage === 'home') {
      scrollToId('products');
      return;
    }
    setCurrentPage('home');
    // allow the home page to render before attempting to scroll
    setTimeout(() => scrollToId('products'), 80);
  }, [currentPage, scrollToId]);

  const handleWatchDemo = useCallback(() => {
    // This can be swapped for a real demo video later.
    window.open('https://medley-mix-83737672.figma.site', '_blank', 'noopener,noreferrer');
  }, []);

  if (currentPage === 'logandlock') {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
        <LogAndLockPage />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
      <Hero onExploreProducts={handleExploreProducts} onWatchDemo={handleWatchDemo} />
      <Products onNavigate={setCurrentPage} />
      <Solutions />
      <WhyInceptionForge />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}
