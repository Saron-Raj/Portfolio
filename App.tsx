import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import { Menu, X, Linkedin, Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigate = (id: string) => {
    setMobileMenuOpen(false);
    setActivePage(id);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Hero onNavigate={handleNavigate} />;
      case 'projects':
        return <Projects />;
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-background min-h-screen text-slate-200 selection:bg-indigo-500/30 font-sans flex flex-col">
      
      {/* Fixed Navigation Header */}
      <header 
        className={`fixed top-0 w-full z-40 transition-all duration-300 border-b ${
          scrolled || mobileMenuOpen || activePage !== 'home'
            ? 'bg-background/90 backdrop-blur-md border-slate-800 py-3 shadow-lg' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 cursor-pointer hover:scale-110 hover:text-indigo-300 transition-all duration-300 animate-pulse"
            onClick={() => handleNavigate('home')}
          >
            Vcoder
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-sm font-medium transition-all hover:scale-105 ${
                  activePage === item.id 
                    ? 'text-indigo-400' 
                    : 'text-slate-300 hover:text-indigo-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden animate-fade-in flex flex-col items-center">
          <nav className="flex flex-col gap-8 text-center w-full max-w-sm">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-2xl font-medium transition-colors border-b border-slate-800/50 pb-4 ${
                  activePage === item.id ? 'text-indigo-400' : 'text-slate-300 hover:text-indigo-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex justify-center gap-8 mt-8">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-800 rounded-full"><Linkedin size={24} /></a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-800 rounded-full"><Twitter size={24} /></a>
            </div>
          </nav>
        </div>
      )}

      {/* Main Content with Transition Animation */}
      <main className="flex-grow">
        <div key={activePage} className="animate-slide-up">
          {renderPage()}
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Chat Widget */}
      <ChatWidget />

    </div>
  );
};

export default App;