import { Logo } from '@/app/components/Logo';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleLegalClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Logo className="h-10 md:h-12" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Tools that power tomorrow's professionals.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://stickynotez.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  Sticky Notez
                </a>
              </li>
              <li>
                <span className="text-sm text-gray-600">Log & Lock (coming soon)</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <button type="button" onClick={() => handleLegalClick('contact')} className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Legal</h3>
            <ul className="space-y-3">
              <li>
                <button type="button" onClick={() => handleLegalClick('privacy')} className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLegalClick('terms')} className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLegalClick('security')} className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Security
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 Inception Forge LLC. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 italic">
              Inception Forge - tools that power tomorrow's professionals.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
