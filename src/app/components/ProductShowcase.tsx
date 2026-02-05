import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Lock, FileText, Calendar, MessageSquare, TrendingUp, Database, ArrowRight } from 'lucide-react';

const products = [
  {
    icon: Lock,
    name: 'Log & Lock',
    useLogo: false,
    tagline: 'Secure Logging Platform',
    description: 'AI-powered data logging with military-grade security. Track, organize, and protect everything that matters.',
    status: 'Available Now',
    color: 'from-orange-600 to-red-600'
  },
  {
    icon: FileText,
    name: 'DocForge AI',
    tagline: 'Intelligent Document Management',
    description: 'Transform how you create, manage, and analyze documents with AI-assisted workflows.',
    status: 'Coming Q2 2026',
    color: 'from-red-600 to-orange-600'
  },
  {
    icon: Calendar,
    name: 'TimeForge',
    tagline: 'Smart Scheduling System',
    description: 'Revolutionary calendar AI that learns your patterns and optimizes your time automatically.',
    status: 'Coming Q3 2026',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: MessageSquare,
    name: 'TeamForge',
    tagline: 'AI Collaboration Hub',
    description: 'Next-gen team communication powered by AI that understands context and priorities.',
    status: 'In Development',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: TrendingUp,
    name: 'MetricsForge',
    tagline: 'Business Intelligence Platform',
    description: 'Real-time analytics and predictive insights that turn data into actionable intelligence.',
    status: 'In Development',
    color: 'from-orange-600 to-red-700'
  },
  {
    icon: Database,
    name: 'DataForge',
    tagline: 'Enterprise Data Management',
    description: 'Unified data platform with AI-driven organization, security, and compliance automation.',
    status: 'Coming 2027',
    color: 'from-red-700 to-orange-600'
  }
];

export function ProductShowcase() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              The Forge Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A growing family of AI-powered applications designed for every profession and workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border-orange-900/30 hover:border-orange-600/50 transition-all group overflow-hidden"
            >
              <div className="p-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                
                <Badge className="mb-3 bg-orange-900/30 text-orange-400 border-orange-700 hover:bg-orange-900/40">
                  {product.status}
                </Badge>
                
                {product.useLogo ? (
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    height: '160px',
                    marginBottom: '8px'
                  }}>
                    <img 
                      src={logAndLockLogo} 
                      alt={product.name} 
                      style={{ 
                        filter: 'brightness(0) invert(1)',
                        height: '100%',
                        width: 'auto',
                      }}
                    />
                  </div>
                ) : (
                  <h3 className="text-2xl text-white mb-2">{product.name}</h3>
                )}
                <p className="text-orange-500 text-sm mb-3">{product.tagline}</p>
                <p className="text-gray-400 leading-relaxed mb-6">{product.description}</p>
                
                <Button 
                  variant="ghost" 
                  className="w-full text-orange-500 hover:text-orange-400 hover:bg-orange-900/20 group/btn"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}