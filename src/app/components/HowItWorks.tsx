import { Camera, FolderKanban, Send } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Camera,
      title: 'Capture',
      description: 'Document work with photos, voice, text, and files. Everything syncs automatically. Works offline.'
    },
    {
      number: '02',
      icon: FolderKanban,
      title: 'Organize',
      description: 'AI categorizes and structures your entries. Search, filter, and group by project, date, or tag.'
    },
    {
      number: '03',
      icon: Send,
      title: 'Generate + Share',
      description: 'Transform raw notes into professional reports. Export to PDF or share directly with teams and clients.'
    }
  ];

  return (
    <section className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 text-lg">Simple, powerful, and built for speed.</p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-600/20 to-transparent"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number badge */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-red-600 flex items-center justify-center relative z-10">
                    <step.icon className="text-white" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black border-2 border-orange-600 flex items-center justify-center">
                    <span className="text-xs font-bold text-orange-500">{step.number}</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}