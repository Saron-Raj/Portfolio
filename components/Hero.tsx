import React from 'react';
import { HERO_DATA } from '../constants';
import Button from './Button';
import { Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-[98vh] flex items-center relative overflow-hidden pt-0">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div 
        className="mx-auto px-6 relative z-10 -mt-[10px] flex flex-col justify-center items-center" 
        style={{ maxWidth: '1536px', width: '100%' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-indigo-400 text-sm font-medium animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
            Available for hire
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-5 tracking-tight leading-tight animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">{HERO_DATA.name}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto font-light animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
            {HERO_DATA.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" onClick={() => onNavigate('projects')}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate('contact')}>
              Contact Me
            </Button>
          </div>

          <div className="mt-12 flex justify-center gap-6 text-slate-500 animate-slide-up opacity-0" style={{ animationDelay: '0.5s' }}>
             <a href="#" className="hover:text-indigo-400 transition-colors"><Github size={24} /></a>
             <a href="#" className="hover:text-indigo-400 transition-colors"><Linkedin size={24} /></a>
             <a href="#" className="hover:text-indigo-400 transition-colors"><Mail size={24} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;