import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen pt-28 pb-12 px-6">
      <div className="mx-auto" style={{ maxWidth: '1536px', width: '100%' }}>
        <div className="flex flex-col items-center text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-indigo-500 rounded-full mb-4"></div>
          <p className="text-slate-400 max-w-md mx-auto">
            A selection of my recent work, showcasing my technical skills and design capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className="group bg-surface rounded-xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col h-full animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-1 text-left">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="text-slate-400 hover:text-white transition-colors" title="View Code">
                        <Github size={20} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} className="text-slate-400 hover:text-white transition-colors" title="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-slate-400 mb-6 line-clamp-3 text-sm flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;