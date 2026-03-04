import { Workflow, Zap, Shield, Code } from 'lucide-react';

export function About() {
  const pillars = [
    {
      icon: Workflow,
      title: 'Built for real workflows',
      description: 'Designed around how professionals actually work, not theory.',
    },
    {
      icon: Zap,
      title: 'AI that saves hours',
      description: 'Automation where it matters. We skip the gimmicks.',
    },
    {
      icon: Code,
      title: 'Engineered to last',
      description: 'Clean architecture, reliable foundations, long-term maintainability.',
    },
    {
      icon: Shield,
      title: 'Secure by default',
      description: 'Enterprise-grade security and data privacy built into every layer.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-32 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden border-t border-white/5">
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Software that makes work lighter.
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            We're a product studio that ships practical SaaS tools that turn messy workflows into clear systems.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 border border-white/5 rounded-xl p-4 md:p-6 hover:border-orange-600/30 transition-colors"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-600/20 flex items-center justify-center mb-3 md:mb-4">
                <pillar.icon className="text-orange-500 w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1.5 md:mb-2">{pillar.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="text-center bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-white/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our mission</h3>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Remove friction so teams can focus on the work that matters.
          </p>
        </div>
      </div>
    </section>
  );
}
