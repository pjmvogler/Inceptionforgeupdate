import { Logo } from '@/app/components/Logo';

export function Footer() {
  return (
    <footer id="contact" className="relative bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="mb-4">
              <Logo className="h-8" />
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
                <a href="#" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Log & Lock
                </a>
              </li>
              <li>
                <span className="text-sm text-gray-600">More coming soon</span>
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
                <a href="#contact" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  Security
                </a>
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