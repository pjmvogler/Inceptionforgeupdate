import { ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function CTA() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Subtle glow effect - toned down */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15">
        <div className="w-[800px] h-[400px] bg-orange-600 rounded-full filter blur-[150px]"></div>
      </div>

      {/* Grain texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
        }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Start with Log & Lock.{' '}
          <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
            More tools shipping soon.
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Our first product is live and ready to transform your documentation workflow. Join early and grow with the studio.
        </p>

        <Button 
          size="lg"
          className="bg-gradient-to-r from-orange-600 via-orange-600 to-red-600 hover:from-orange-700 hover:via-orange-700 hover:to-red-700 text-white px-12 py-6 text-lg group shadow-lg shadow-orange-600/20"
        >
          Get Started with Log & Lock
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
        </Button>

        <p className="text-sm text-gray-500 mt-6">
          No credit card required • Start free
        </p>
      </div>
    </section>
  );
}