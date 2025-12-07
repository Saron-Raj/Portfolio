import React, { useEffect, useState } from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animation immediately on mount
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-12 px-6 flex flex-col items-center">
      <div className="mx-auto" style={{ maxWidth: '1536px', width: '100%' }}>
        <div className={`flex flex-col items-center mb-16 transition-all duration-700 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
           <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Professional Experience</h2>
           <div className="w-20 h-1.5 bg-indigo-500 rounded-full mb-6"></div>
           <p className="text-slate-400 max-w-2xl text-center mx-auto">
              A timeline of my professional journey and career milestones.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-transparent">
          {EXPERIENCE.map((job, index) => (
            <div 
              key={job.id} 
              className={`relative flex items-start group transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="absolute left-0 mt-1.5 ml-3 w-4 h-4 rounded-full border-2 border-slate-600 bg-background group-hover:border-indigo-500 group-hover:bg-indigo-500 transition-colors z-10 shadow-[0_0_0_4px_rgba(15,23,42,1)]"></div>
              
              <div className="ml-16 w-full bg-surface/50 p-8 rounded-2xl border border-slate-700/30 hover:border-indigo-500/30 transition-all hover:bg-surface/80 hover:shadow-lg hover:shadow-indigo-500/5">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-100">{job.role}</h3>
                  <span className="text-sm font-medium text-indigo-300 bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20 w-fit mt-2 sm:mt-0">
                    {job.period}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-6 text-slate-300 font-medium text-lg">
                  <Briefcase size={20} className="text-indigo-400" />
                  <span>{job.company}</span>
                </div>
                <ul className="space-y-3 text-slate-400 marker:text-indigo-500/50">
                  {job.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0 opacity-70"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;