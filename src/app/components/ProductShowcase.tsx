import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Lock, FileText, Calendar, MessageSquare, TrendingUp, Database, ArrowRight } from 'lucide-react';
import fileHolsterIcon from '@/assets/fileholster-icon.png';

const products = [
  {
    icon: null,
    name: 'FileHolster',
    useLogo: false,
    useAppIcon: true,
    tagline: 'Slim Desktop Sidecar for Windows',
    description: 'A slim panel that sits on the right side of your screen. Keep tasks, folders, screenshots, and notes within reach — without breaking your flow.',
    status: 'Available Now',
    color: '',
    link: 'https://fileholster.com'
  },
  {
    icon: Lock,
    name: 'Log & Lock',
    useLogo: false,
    tagline: 'Secure Logging Platform',
    description: 'AI-powered data logging with military-grade security. Track, organize, and protect everything that matters.',
    status: 'Coming Soon',
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
          {products.map((product, index) => {
            const isFileHolster = product.useAppIcon;
            return (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black transition-all group overflow-hidden"
              style={isFileHolster ? { borderColor: 'rgba(51,255,0,0.25)' } : { borderColor: 'rgba(124,45,18,0.3)' }}
              onMouseEnter={isFileHolster ? (e => (e.currentTarget.style.borderColor = 'rgba(51,255,0,0.5)')) : undefined}
              onMouseLeave={isFileHolster ? (e => (e.currentTarget.style.borderColor = 'rgba(51,255,0,0.25)')) : undefined}
            >
              <div className="p-6">
                {isFileHolster ? (
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <img src={fileHolsterIcon} alt="FileHolster" className="w-14 h-14" />
                  </div>
                ) : (
                  <div className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {product.icon && <product.icon className="w-7 h-7 text-white" />}
                  </div>
                )}

                {isFileHolster ? (
                  <Badge
                    className="mb-3"
                    style={{ background: 'rgba(51,255,0,0.15)', color: '#33ff00', borderColor: 'rgba(51,255,0,0.4)' }}
                  >
                    {product.status}
                  </Badge>
                ) : (
                  <Badge className="mb-3 bg-orange-900/30 text-orange-400 border-orange-700 hover:bg-orange-900/40">
                    {product.status}
                  </Badge>
                )}

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
                ) : isFileHolster ? (
                  <h3 className="text-2xl font-bold mb-2">
                    <span className="text-white">File</span>
                    <span style={{ color: '#33ff00' }}>Holster</span>
                  </h3>
                ) : (
                  <h3 className="text-2xl text-white mb-2">{product.name}</h3>
                )}
                <p className="text-sm mb-3" style={isFileHolster ? { color: '#33ff00', opacity: 0.8 } : { color: 'rgb(249,115,22)' }}>{product.tagline}</p>
                <p className="text-gray-400 leading-relaxed mb-6">{product.description}</p>

                {product.link ? (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center font-medium group/btn rounded-md py-2 transition-opacity hover:opacity-90"
                    style={{ background: 'linear-gradient(to right, #33ff00, #22cc00)', color: '#000' }}
                  >
                    View Product
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Button
                    variant="ghost"
                    className="w-full text-orange-500 hover:text-orange-400 hover:bg-orange-900/20 group/btn"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                )}
              </div>
            </Card>
          );
          })}
        </div>
      </div>
    </section>
  );
}