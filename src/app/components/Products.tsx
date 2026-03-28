import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import stickyNotezLogo from '@/assets/stickynotez-logo.svg';
import stickyNotezIcon from '@/assets/stickynotez-icon.svg';
import logAndLockLogo from '@/assets/logandlock-logo.svg';
import logAndLockIcon from '@/assets/logandlock-icon.svg';
import fileHolsterIcon from '@/assets/fileholster-icon.png';

interface ProductsProps {
  onNavigate?: (page: string) => void;
}

export function Products({ onNavigate }: ProductsProps) {
  // Removed unused handleViewProduct function since we're linking directly to logandlock.com

  return (
    <section id="products" className="relative py-16 md:py-32 bg-black border-t border-white/5">
      {/* Subtle background grain */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Products</h2>
          <p className="text-gray-400 text-lg">Smart tools built for real work.</p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-8">
          {/* Sticky Notez - Active Product */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-yellow-500/30 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-yellow-500/50 transition-all shadow-lg shadow-yellow-500/5">
            {/* New badge */}
            <div className="absolute top-4 right-4">
              <div className="px-2 py-1 rounded-md bg-yellow-500/20 border border-yellow-500/30">
                <span className="text-xs font-bold text-yellow-400">NEW</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mb-4 shadow-lg shadow-yellow-500/20">
                <img src={stickyNotezIcon} alt="" className="w-7 h-7" />
              </div>
              <img src={stickyNotezLogo} alt="Sticky Notez" className="h-9 mb-4" />
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Beautiful, minimal sticky note app with cloud sync, drag & drop, voice input, and customizable themes. Organize your thoughts across all your devices.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-300 border border-white/10">
                  Notes
                </span>
                <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-300 border border-white/10">
                  Cloud Sync
                </span>
                <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-300 border border-white/10">
                  Voice Input
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <a
                href="https://stickynotez.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 bg-gradient-to-r from-yellow-500 via-yellow-500 to-amber-500 hover:from-yellow-600 hover:via-yellow-600 hover:to-amber-600 text-black font-medium group rounded-lg shadow-lg shadow-yellow-500/20 flex items-center justify-center"
              >
                View Product
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </a>
            </div>
          </div>

          {/* FileHolster - Active Product */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 rounded-2xl p-6 md:p-8 relative overflow-hidden group transition-all shadow-lg" style={{ borderColor: 'rgba(51,255,0,0.25)', boxShadow: '0 4px 24px 0 rgba(51,255,0,0.05)' }} onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(51,255,0,0.5)')} onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(51,255,0,0.25)')}>
            {/* New badge */}
            <div className="absolute top-4 right-4">
              <div className="px-2 py-1 rounded-md" style={{ background: 'rgba(51,255,0,0.15)', border: '1px solid rgba(51,255,0,0.3)' }}>
                <span className="text-xs font-bold" style={{ color: '#33ff00' }}>NEW</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'transparent' }}>
                <img src={fileHolsterIcon} alt="FileHolster" className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-1">
                <span className="text-white">File</span>
                <span style={{ color: '#33ff00' }}>Holster</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                A slim desktop sidecar panel for Windows. Keep your tasks, folders, screenshots, and notes within reach without breaking your flow. 100% offline, no account needed.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-300 border border-white/10">
                  Desktop Tool
                </span>
                <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-300 border border-white/10">
                  Productivity
                </span>
                <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-300 border border-white/10">
                  Windows
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <a
                href="https://fileholster.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 text-black font-medium group rounded-lg flex items-center justify-center transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(to right, #33ff00, #22cc00)', boxShadow: '0 4px 16px 0 rgba(51,255,0,0.2)' }}
              >
                View Product
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </a>
            </div>
          </div>

          {/* Log & Lock - Coming Soon */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-purple-500/30 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-purple-500/50 transition-all shadow-lg shadow-purple-500/5">
            <div className="absolute top-4 right-4">
              <div className="px-2 py-1 rounded-md bg-purple-500/20 border border-purple-500/30">
                <span className="text-xs font-bold text-purple-400">BETA</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/60 to-violet-600/60 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
                <img src={logAndLockIcon} alt="" className="w-8 h-8" />
              </div>
              <img src={logAndLockLogo} alt="Log & Lock" className="h-7 mb-2" />
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
              </div>
            </div>

            <a
              href="https://logandlock.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-12 bg-gradient-to-r from-purple-600 via-purple-600 to-violet-600 hover:from-purple-700 hover:via-purple-700 hover:to-violet-700 text-white font-medium group rounded-lg shadow-lg shadow-purple-500/20 flex items-center justify-center"
            >
              View Product
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}