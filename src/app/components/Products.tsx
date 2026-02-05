import { ArrowRight, Play, Lock } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface ProductsProps {
  onNavigate?: (page: 'home' | 'logandlock') => void;
}

export function Products({ onNavigate }: ProductsProps) {
  // Removed unused handleViewProduct function since we're linking directly to logandlock.com

  return (
    <section id="products" className="relative py-32 bg-black border-t border-white/5">
      {/* Subtle background grain */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Products</h2>
          <p className="text-gray-400 text-lg">AI-powered tools built for real work.</p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Log & Lock - Active Product */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-orange-600/30 rounded-2xl p-8 relative overflow-hidden group hover:border-orange-600/50 transition-all shadow-lg shadow-orange-600/5">
            {/* Flagship badge */}
            <div className="absolute top-4 right-4">
              <div className="px-2 py-1 rounded-md bg-orange-600/20 border border-orange-600/30">
                <span className="text-xs font-bold text-orange-400">FLAGSHIP</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center mb-4 shadow-lg shadow-orange-600/20">
                <Lock className="text-white" size={24} />
              </div>
              <h3 className="text-4xl font-bold mb-4 text-white">Log & Lock</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Documentation and reporting platform. Capture notes, photos, voice memos, and files. Organize automatically. Generate professional reports with AI.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-300 border border-white/10">
                  Documentation
                </span>
                <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-300 border border-white/10">
                  AI Reports
                </span>
                <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-300 border border-white/10">
                  Multimedia
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <a 
                href="https://logandlock.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 bg-gradient-to-r from-orange-600 via-orange-600 to-red-600 hover:from-orange-700 hover:via-orange-700 hover:to-red-700 text-white group rounded-lg shadow-lg shadow-orange-600/20 flex items-center justify-center font-medium"
              >
                View Product
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </a>
              <a 
                href="https://medley-mix-83737672.figma.site"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 border border-orange-600/40 hover:bg-orange-600/10 hover:border-orange-600/70 text-orange-400 rounded-lg flex items-center justify-center font-medium"
              >
                <Play className="mr-2" size={16} />
                Request Demo
              </a>
            </div>
          </div>

          {/* Coming Soon - Product 2 */}
          <div className="bg-zinc-950 border border-white/5 rounded-2xl p-8 relative overflow-hidden opacity-50">
            <div className="absolute top-4 right-4">
              <div className="px-2 py-1 rounded-md bg-white/5 border border-white/10">
                <span className="text-xs font-medium text-gray-500">COMING SOON</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded bg-white/10"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-400">In Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Next product in the pipeline. Details coming soon.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-600 border border-white/5">
                  TBA
                </span>
              </div>
            </div>

            <Button 
              disabled
              className="w-full h-12 bg-white/5 text-gray-600 cursor-not-allowed rounded-lg"
            >
              Coming Soon
            </Button>
          </div>

          {/* Coming Soon - Product 3 */}
          <div className="bg-zinc-950 border border-white/5 rounded-2xl p-8 relative overflow-hidden opacity-50">
            <div className="absolute top-4 right-4">
              <div className="px-2 py-1 rounded-md bg-white/5 border border-white/10">
                <span className="text-xs font-medium text-gray-500">COMING SOON</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded bg-white/10"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-400">In Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Another AI-powered solution. More information to follow.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-600 border border-white/5">
                  TBA
                </span>
              </div>
            </div>

            <Button 
              disabled
              className="w-full h-12 bg-white/5 text-gray-600 cursor-not-allowed rounded-lg"
            >
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}