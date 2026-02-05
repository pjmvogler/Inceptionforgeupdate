import { Workflow, Zap, Shield, TrendingUp } from 'lucide-react';

export function WhyInceptionForge() {
  const benefits = [
    {
      icon: Workflow,
      title: 'Built for real workflows',
      description: 'Every product is designed around how professionals actually work. Not theory, not trends, just results.'
    },
    {
      icon: Zap,
      title: 'AI that saves hours, not minutes',
      description: 'Our AI eliminates repetitive tasks and automates what matters, giving you time back for high-value work.'
    },
    {
      icon: Shield,
      title: 'Secure by design',
      description: 'Enterprise-grade security, offline-first architecture, and data privacy built into every layer.'
    },
    {
      icon: TrendingUp,
      title: 'Works across industries',
      description: 'From solo consultants to enterprise teams, our tools adapt to your work and grow with your needs.'
    }
  ];

  return (
    <section id="solutions" className="relative py-32 bg-gradient-to-b from-black via-zinc-950 to-black border-t border-white/5">
      {/* Grain texture */}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Inception Forge</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We don't build software for the sake of it. We build tools that professionals rely on every single day.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 hover:border-orange-600/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-600/20 flex items-center justify-center mb-4">
                <benefit.icon className="text-orange-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}