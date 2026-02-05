import { Brain, Zap, Shield, TrendingUp, Users, Sparkles } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Advanced machine learning algorithms that adapt to your workflow and predict your needs before you do.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance that handles millions of operations per second without breaking a sweat.'
  },
  {
    icon: Shield,
    title: 'Military-Grade Security',
    description: 'End-to-end encryption and multi-layer security protocols keep your data fortress-strong.'
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Insights',
    description: 'Real-time data visualization and predictive analytics to help you make informed decisions.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamless multi-user workflows with role-based access control and instant synchronization.'
  },
  {
    icon: Sparkles,
    title: 'Smart Automation',
    description: 'AI-driven automation that eliminates repetitive tasks and maximizes productivity.'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-red-950/10 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Built for Performance
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every application we forge is crafted with cutting-edge technology and battle-tested reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-900/90 to-black border-orange-900/30 hover:border-orange-600/50 transition-all group p-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
