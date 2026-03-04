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
          Try Sticky Notez today.{' '}
          <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
            More tools shipping soon.
          </span>
        </h2>

        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Our first product is live and ready to help you organize your thoughts. Join early and grow with the studio.
        </p>

        <a
          href="https://stickynotez.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-500 via-yellow-500 to-amber-500 hover:from-yellow-600 hover:via-yellow-600 hover:to-amber-600 text-black px-12 py-6 text-lg group shadow-lg shadow-yellow-500/20"
          >
            Try Sticky Notez
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </a>

        <p className="text-sm text-gray-500 mt-6">
          No account required • Use as guest
        </p>
      </div>
    </section>
  );
}