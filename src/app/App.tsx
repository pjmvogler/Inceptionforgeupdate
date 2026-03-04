import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { Products } from '@/app/components/Products';
import { About } from '@/app/components/About';
import { CTA } from '@/app/components/CTA';
import { Footer } from '@/app/components/Footer';
import { LogAndLockPage } from '@/app/components/LogAndLockPage';
import { LegalPage } from '@/app/components/LegalPage';
import { ContactPage } from '@/app/components/ContactPage';
import { useCallback, useState } from 'react';

type Page = 'home' | 'logandlock' | 'privacy' | 'terms' | 'security' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

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

  if (currentPage === 'logandlock') {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
        <LogAndLockPage />
        <Footer onNavigate={setCurrentPage} />
      </div>
    );
  }

  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
        <ContactPage />
        <Footer onNavigate={setCurrentPage} />
      </div>
    );
  }

  if (currentPage === 'privacy' || currentPage === 'terms' || currentPage === 'security') {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
        <LegalPage page={currentPage} />
        <Footer onNavigate={setCurrentPage} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
      <Hero onExploreProducts={handleExploreProducts} />
      <Products onNavigate={setCurrentPage} />
      <About />
      <CTA />
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
