import { FileText, Workflow, LayoutDashboard, Search } from 'lucide-react';

export function Solutions() {
  const solutions = [
    {
      icon: FileText,
      title: 'Documentation & Reporting',
      description: 'Capture, organize, and generate professional reports from field notes, logs, and multimedia.'
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Intelligent task routing, approvals, and process optimization powered by AI.'
    },
    {
      icon: LayoutDashboard,
      title: 'Operations Dashboards',
      description: 'Real-time visibility into projects, resources, and performance metrics across teams.'
    },
    {
      icon: Search,
      title: 'Knowledge & Search',
      description: 'AI-powered search and retrieval across all your documentation and historical data.'
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Build</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            AI-powered solutions designed for real-world workflows across industries.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 hover:border-orange-600/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-600/20 flex items-center justify-center mb-5">
                <solution.icon className="text-orange-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Each category will house multiple products as we expand the studio portfolio.
          </p>
        </div>
      </div>
    </section>
  );
}
