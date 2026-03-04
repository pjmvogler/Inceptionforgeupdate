import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Replace YOUR_FORM_ID with your Formspree form ID from https://formspree.io
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setFormState('sent');
        form.reset();
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <section className="pt-32 pb-20 bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-400 mb-12">
          Have a question or want to learn more? Reach out anytime.
        </p>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          <a
            href="mailto:admin@inceptionforge.com"
            className="flex items-center gap-4 bg-zinc-900/50 border border-white/5 rounded-xl p-6 hover:border-orange-600/30 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-600/20 flex items-center justify-center flex-shrink-0">
              <Mail className="text-orange-500" size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Email</h3>
              <p className="text-gray-400 group-hover:text-orange-400 transition-colors">admin@inceptionforge.com</p>
            </div>
          </a>

          <a
            href="tel:563-570-3339"
            className="flex items-center gap-4 bg-zinc-900/50 border border-white/5 rounded-xl p-6 hover:border-orange-600/30 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-600/20 flex items-center justify-center flex-shrink-0">
              <Phone className="text-orange-500" size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Phone</h3>
              <p className="text-gray-400 group-hover:text-orange-400 transition-colors">(563) 570-3339</p>
            </div>
          </a>
        </div>

        {/* Feedback Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us Feedback</h2>

          {formState === 'sent' ? (
            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-8 text-center">
              <p className="text-green-400 font-medium text-lg mb-2">Message sent!</p>
              <p className="text-gray-400">We'll get back to you as soon as we can.</p>
              <button
                type="button"
                onClick={() => setFormState('idle')}
                className="mt-4 text-sm text-orange-400 hover:text-orange-300 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600/50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600/50 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600/50 transition-colors resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              {formState === 'error' && (
                <p className="text-red-400 text-sm">Something went wrong. Please try again or email us directly.</p>
              )}

              <button
                type="submit"
                disabled={formState === 'sending'}
                className="h-12 px-8 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
