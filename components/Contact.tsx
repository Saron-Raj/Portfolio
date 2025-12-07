import React, { useState } from 'react';
import Button from './Button';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-5 relative overflow-hidden">
      <div className="mx-auto px-6 relative z-10" style={{ maxWidth: '1536px', width: '100%' }}>
        <div className="max-w-4xl mx-auto bg-surface rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="md:w-2/5 p-10 bg-gradient-to-br from-indigo-900 to-purple-900 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's chat!</h3>
              <p className="text-indigo-200 mb-8 leading-relaxed">
                Have a project in mind or just want to say hi? I'm currently open to new opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-lg shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-200 font-medium">Email</p>
                    <a href="mailto:saronraj03@gmail.com" className="hover:text-white transition-colors">saronraj03@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-lg shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-200 font-medium">Location</p>
                    <p>Singapore</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-0">
               <div className="w-20 h-20 bg-indigo-500/30 rounded-full blur-2xl absolute bottom-0 left-0"></div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-3/5 p-10 bg-surface">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-background border border-slate-600 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-background border border-slate-600 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-background border border-slate-600 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                className="w-full flex items-center gap-2"
                disabled={isSubmitting || isSuccess}
              >
                {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent!' : (
                  <>Send Message <Send size={18} /></>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;