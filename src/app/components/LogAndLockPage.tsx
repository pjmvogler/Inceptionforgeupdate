import { ArrowRight, Play, CheckCircle2, Shield, Zap, FileText, Camera, Wifi, Cloud, MapPin, Clock, BarChart3, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function LogAndLockPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-radial from-zinc-950 via-black to-black">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/20 rounded-full filter blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-red-600/20 border border-orange-600/30 mb-8">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
            <span className="text-xs font-semibold text-orange-400 tracking-wide">FLAGSHIP PRODUCT</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Log & Lock
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-100 mb-12 max-w-3xl mx-auto leading-[1.4]">
            Capture field data, work offline, and generate reports instantly. Built for professionals who don't have time to waste.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="h-12 px-8 rounded-lg bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group">
              <span>Request Demo</span>
              <Play className="w-[18px] h-[18px]" />
            </button>
            
            <button className="h-12 px-8 rounded-lg border border-orange-600/40 bg-transparent text-orange-400 hover:bg-orange-600/10 hover:border-orange-600/70 font-medium transition-all duration-300 flex items-center justify-center gap-2 group">
              <span>Get Started</span>
              <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Built for the Field Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Built for the <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 bg-clip-text text-transparent">Field</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-600/30 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Offline-First Architecture</h3>
              <p className="text-gray-400 leading-relaxed">
                No signal? No problem. Log & Lock works seamlessly in remote locations, automatically syncing when you're back online. Your data is always accessible, always secure.
              </p>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-600/30 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Reporting</h3>
              <p className="text-gray-400 leading-relaxed">
                Turn messy field notes into polished, professional reports in seconds. Our AI understands context and generates reports according to industry standards. All in seconds.
              </p>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-600/30 flex items-center justify-center mb-6">
                <Camera className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Multimedia Documentation</h3>
              <p className="text-gray-400 leading-relaxed">
                Capture photos, record voice notes, annotate images, and add location tags. All in one unified interface. Rich documentation has never been easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need, <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 bg-clip-text text-transparent">Nothing You Don't</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Powerful features designed for real-world field operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-white/5 rounded-xl p-6 hover:border-orange-600/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-600/10 border border-orange-600/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Smart Daily Logs</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Quick-entry templates, voice-to-text, and intelligent autocomplete make logging faster than ever.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-white/5 rounded-xl p-6 hover:border-orange-600/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-600/10 border border-orange-600/20 flex items-center justify-center flex-shrink-0">
                  <Wifi className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Seamless Sync</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Automatic background sync when connected. Work offline, pick up where you left off online.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-white/5 rounded-xl p-6 hover:border-orange-600/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-600/10 border border-orange-600/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">GPS Tagging</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Automatic location stamping on every entry. Know exactly where and when work was performed.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-white/5 rounded-xl p-6 hover:border-orange-600/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-600/10 border border-orange-600/20 flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cloud Backup</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Enterprise-grade encryption and redundant backups. Your data is safer than on your device.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-white/5 rounded-xl p-6 hover:border-orange-600/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-600/10 border border-orange-600/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Time Tracking</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Built-in time tracking ties directly to logs. Perfect for billing, compliance, and accountability.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-white/5 rounded-xl p-6 hover:border-orange-600/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-600/10 border border-orange-600/20 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Real-time insights into productivity, completion rates, and team performance at a glance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Simple <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 bg-clip-text text-transparent">Workflow</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector lines */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-600/0 via-orange-600/30 to-orange-600/0"></div>

            {/* Step 1 */}
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white font-bold text-2xl mb-6 relative z-10">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Capture</h3>
              <p className="text-gray-400 leading-relaxed">
                Open the app and start logging. Add text, photos, voice notes, or drawings. Tag location, time, and project details automatically.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white font-bold text-2xl mb-6 relative z-10">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Organize</h3>
              <p className="text-gray-400 leading-relaxed">
                Let AI categorize, tag, and structure your entries. Search by date, location, project, or keyword. Everything is instantly findable.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white font-bold text-2xl mb-6 relative z-10">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Report</h3>
              <p className="text-gray-400 leading-relaxed">
                Generate professional reports with one tap. Export to PDF, email stakeholders, or integrate with your existing tools. Done in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              See It in <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 bg-clip-text text-transparent">Action</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Built for mobile, designed for the real world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Screenshot 1 */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl overflow-hidden group hover:border-orange-600/30 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1617469766474-c421f37e01e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjB0YWJsZXQlMjBmaWVsZHxlbnwxfHx8fDE3Njk5MTA1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Field worker using tablet"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Field Capture</h3>
                <p className="text-gray-400 text-sm">
                  Capture data on-site with intuitive mobile interface designed for gloved hands and outdoor screens.
                </p>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl overflow-hidden group hover:border-orange-600/30 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY5ODY2MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Dashboard interface"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Smart Dashboard</h3>
                <p className="text-gray-400 text-sm">
                  View analytics, track progress, and access all your logs from a unified, AI-powered dashboard.
                </p>
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl overflow-hidden group hover:border-orange-600/30 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1588844475389-f85e19795d48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWVsZCUyMHdvcmtlciUyMHNtYXJ0cGhvbmUlMjBub3Rlc3xlbnwxfHx8fDE3Njk5MTA1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mobile note taking"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Voice & Photos</h3>
                <p className="text-gray-400 text-sm">
                  Record voice notes and capture photos instantly. AI transcribes, organizes, and tags everything automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Frequently Asked <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 bg-clip-text text-transparent">Questions</span>
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold pr-4">Does Log & Lock work without internet?</span>
                <ChevronDown className={`w-5 h-5 text-orange-500 transition-transform duration-300 flex-shrink-0 ${openFaq === 1 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-5 text-gray-400">
                  Yes! Log & Lock is built with an offline-first architecture. You can capture logs, photos, voice notes, and all data without any internet connection. Everything syncs automatically when you reconnect.
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold pr-4">What platforms does it support?</span>
                <ChevronDown className={`w-5 h-5 text-orange-500 transition-transform duration-300 flex-shrink-0 ${openFaq === 2 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-5 text-gray-400">
                  Log & Lock is available on iOS, Android, and web. All platforms sync seamlessly, so you can start a log on your phone in the field and finish the report on your desktop.
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold pr-4">How does AI-powered reporting work?</span>
                <ChevronDown className={`w-5 h-5 text-orange-500 transition-transform duration-300 flex-shrink-0 ${openFaq === 3 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 3 && (
                <div className="px-6 pb-5 text-gray-400">
                  Our AI analyzes your logs, photos, and voice notes to understand context and generate professional reports. It organizes information chronologically, highlights key events, and formats everything according to industry standards. All in seconds.
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold pr-4">Is my data secure?</span>
                <ChevronDown className={`w-5 h-5 text-orange-500 transition-transform duration-300 flex-shrink-0 ${openFaq === 4 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 4 && (
                <div className="px-6 pb-5 text-gray-400">
                  Absolutely. We use enterprise-grade AES-256 encryption both in transit and at rest. Your data is backed up redundantly across multiple secure data centers, and you maintain full control over access permissions.
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold pr-4">Can I integrate Log & Lock with other tools?</span>
                <ChevronDown className={`w-5 h-5 text-orange-500 transition-transform duration-300 flex-shrink-0 ${openFaq === 5 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 5 && (
                <div className="px-6 pb-5 text-gray-400">
                  Yes! Log & Lock integrates with popular tools like Slack, Microsoft Teams, Google Workspace, and most project management platforms. We also offer a robust API for custom integrations.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-orange-600/30 rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/5 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 bg-clip-text text-transparent">Transform</span> Your Field Operations?
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join thousands of professionals who've eliminated paperwork and doubled their productivity with Log & Lock.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="h-14 px-10 rounded-lg bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group text-lg">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="h-14 px-10 rounded-lg border border-orange-600/40 bg-transparent text-orange-400 hover:bg-orange-600/10 hover:border-orange-600/70 font-medium transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}