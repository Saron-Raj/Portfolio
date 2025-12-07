import React, { useEffect, useState } from 'react';
import { SKILLS } from '../constants';
import { Code, Server, PenTool, Database, Cpu, Cloud, Briefcase } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'code': <Code size={20} />,
  'server': <Server size={20} />,
  'pen-tool': <PenTool size={20} />,
  'atom': <Database size={20} />, 
  'cloud': <Cloud size={20} />,
  'cpu': <Cpu size={20} />,
  'briefcase': <Briefcase size={20} />
};

const About: React.FC = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation immediately on mount since it's a separate page
    const timer = setTimeout(() => {
      setSkillsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-12 px-6 flex flex-col items-center">
      <div className="mx-auto" style={{ maxWidth: '1536px', width: '100%' }}>
        <div className={`flex flex-col items-center mb-12 transition-all duration-700 transform ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Technical Skills</h2>
          <div className="w-20 h-1.5 bg-purple-500 rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl text-center mx-auto mb-8">
            Expertise in modern web development technologies and administrative tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SKILLS.map((skill, index) => (
            <div 
              key={skill.name} 
              className={`bg-surface p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-700 group hover:shadow-xl hover:shadow-purple-500/10 transform ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-800/80 rounded-xl text-purple-400 group-hover:text-purple-300 group-hover:bg-purple-500/20 transition-all duration-300 shadow-inner">
                    {iconMap[skill.icon] || <Code size={24} />}
                  </div>
                  <span className="font-bold text-lg text-slate-100 tracking-wide">{skill.name}</span>
                </div>
                <span className={`text-lg font-mono text-purple-400 font-bold transition-opacity duration-1000 delay-[${index * 100 + 500}ms] ${skillsVisible ? 'opacity-100' : 'opacity-0'}`}>
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-slate-700/50 h-3 rounded-full overflow-hidden backdrop-blur-sm">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] relative"
                  style={{ 
                    width: skillsVisible ? `${skill.level}%` : '0%',
                    transition: 'width 1.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
                    transitionDelay: `${index * 100 + 200}ms`
                  }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;