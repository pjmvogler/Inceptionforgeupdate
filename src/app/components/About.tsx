import { CheckCircle2, Code, Zap, Wrench } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      {/* Grain texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
              We build software that makes work feel lighter.
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're a product studio focused on shipping practical SaaS: tools that turn messy workflows into clear systems.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">What we do</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 hover:border-orange-600/20 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-600/20 flex items-center justify-center mb-4">
                <Code className="text-orange-500" size={20} />
              </div>
              <h4 className="font-semibold mb-2">Build end-to-end</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                SaaS products from design to deployment
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 hover:border-orange-600/20 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-600/20 flex items-center justify-center mb-4">
                <Zap className="text-orange-500" size={20} />
              </div>
              <h4 className="font-semibold mb-2">Automate the repetitive</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Including AI where it actually adds value
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 hover:border-orange-600/20 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-600/20 flex items-center justify-center mb-4">
                <Wrench className="text-orange-500" size={20} />
              </div>
              <h4 className="font-semibold mb-2">Engineer for durability</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Reliable foundations, clean UX, long-term maintainability
              </p>
            </div>
          </div>
        </div>

        {/* How We Work */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">How we work</h3>
          <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-white/10 rounded-2xl p-10">
            <p className="text-gray-300 mb-8 text-center">
              We optimize for clarity, speed, and craft:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-orange-500 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Simple &gt; complicated</h4>
                  <p className="text-sm text-gray-400">Clean interfaces, clear purpose</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-orange-500 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Systems that endure</h4>
                  <p className="text-sm text-gray-400">Built to last, not just to launch</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-orange-500 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Human-first interfaces</h4>
                  <p className="text-sm text-gray-400">Designed for real people, real work</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-orange-500 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Truth in outputs</h4>
                  <p className="text-sm text-gray-400">Auditability and confidence built in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Products</h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border-2 border-orange-600/30 rounded-xl p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-3xl font-bold text-white">Log & Lock</h4>
                    <span className="px-2 py-0.5 rounded bg-orange-600/20 border border-orange-600/30 text-xs font-bold text-orange-400">
                      LIVE
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    A preview of how we capture, structure, and generate clean reporting from real-world inputs.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <a 
                  href="https://logandlock.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-orange-600/10 border border-orange-600/30 text-orange-400 hover:bg-orange-600/20 transition-colors text-sm font-medium inline-block"
                >
                  View Product
                </a>
                <a 
                  href="https://medley-mix-83737672.figma.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-white/10 text-gray-400 hover:bg-white/5 transition-colors text-sm font-medium inline-block"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            <div className="bg-zinc-950/50 border border-white/5 rounded-xl p-8 opacity-60">
              <h4 className="text-lg font-semibold mb-2 text-gray-400">More in the pipeline</h4>
              <p className="text-sm text-gray-500">
                We're building quietly. Announcements soon.
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="text-center bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-white/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">Our mission</h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            To create software that removes friction so teams can focus on the work that matters.
          </p>
        </div>
      </div>
    </section>
  );
}