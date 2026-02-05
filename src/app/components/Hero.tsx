import { ArrowRight, Lock, Activity, Code, Play } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface HeroProps {
  onExploreProducts?: () => void;
  onWatchDemo?: () => void;
}


export function Hero({ onExploreProducts, onWatchDemo }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Professional gradient foundation */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      
      {/* Refined dual radial glows for depth */}
      <div 
        className="absolute pointer-events-none"
        style={{
          top: '45%',
          left: '30%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '900px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(234, 88, 12, 0.04) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      ></div>
      
      <div 
        className="absolute pointer-events-none"
        style={{
          top: '55%',
          right: '20%',
          transform: 'translate(50%, -50%)',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(234, 88, 12, 0.06) 0%, rgba(194, 65, 12, 0.03) 40%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      ></div>

      {/* Subtle geometric grid accent - top right */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-1/3 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(249, 115, 22, 0.4) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(249, 115, 22, 0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at top right, black, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at top right, black, transparent 70%)',
        }}
      ></div>

      {/* Premium grain texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Hero Content */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
                FORGE THE FUTURE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 mb-4 leading-[1.45]">
              A studio building intelligent SaaS tools that transform how professionals work across every industry.
            </p>
            
            <p className="text-base text-gray-300 mb-10 leading-[1.75] max-w-lg">
              From documentation and reporting to workflow automation and operations dashboards, we craft AI-powered software that saves hours, not minutes. Each tool is built to work independently or as part of a connected ecosystem.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button type="button" onClick={onExploreProducts} className="h-12 px-8 rounded-lg bg-gradient-to-r from-orange-600 via-orange-600 to-red-600 hover:from-orange-700 hover:via-orange-700 hover:to-red-700 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-orange-600/20">
                <span>Explore Products</span>
                <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button type="button" onClick={onWatchDemo} className="h-12 px-8 rounded-lg border border-orange-600/40 bg-transparent text-orange-400 hover:bg-orange-600/10 hover:border-orange-600/70 font-medium transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-[18px] h-[18px]" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Right Column: Product Slate Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/90 border border-white/10 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-200">Product Slate</h3>
                <span className="text-xs text-gray-500 uppercase tracking-wider">2024–2025</span>
              </div>

              <div className="space-y-4">
                {/* Log & Lock - Active */}
                <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border-2 border-orange-600/30 rounded-xl p-5 hover:border-orange-600/50 transition-all group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-600/20">
                      <Lock className="text-white" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-2xl font-bold text-white">Log & Lock</h4>
                        <span className="px-2 py-0.5 rounded bg-orange-600/20 border border-orange-600/30 text-[10px] font-bold text-orange-400">
                          LIVE
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mb-3 leading-relaxed">
                        Documentation & AI-powered reporting platform
                      </p>
                      <div className="flex gap-2">
                        <a 
                          href="https://logandlock.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-3 py-1.5 rounded-md bg-orange-600/10 border border-orange-600/30 text-orange-400 hover:bg-orange-600/20 transition-colors inline-block"
                        >
                          View Product
                        </a>
                        <a 
                          href="https://medley-mix-83737672.figma.site"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-3 py-1.5 rounded-md border border-white/10 text-gray-400 hover:bg-white/5 transition-colors inline-block"
                        >
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coming Soon - Product 2 */}
                <div className="bg-zinc-950/50 border border-white/5 rounded-xl p-5 opacity-60">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-5 h-5 rounded bg-white/10"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-4 w-24 bg-white/5 rounded"></div>
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-medium text-gray-600">
                          Q2 2025
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Next tool in development
                      </p>
                    </div>
                  </div>
                </div>

                {/* Coming Soon - Product 3 */}
                <div className="bg-zinc-950/50 border border-white/5 rounded-xl p-5 opacity-60">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-5 h-5 rounded bg-white/10"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-4 w-24 bg-white/5 rounded"></div>
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-medium text-gray-600">
                          Q3 2025
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Additional product planned
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-xs text-gray-500 text-center">
                  More tools shipping throughout 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}