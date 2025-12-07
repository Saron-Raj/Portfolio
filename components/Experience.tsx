import React, { useEffect, useState } from 'react';
import { EXPERIENCE, EDUCATION, RESUME_DATA, COURSES, SKILLS, SOCIAL_LINKS } from '../constants';
import { Briefcase, GraduationCap, Download, Eye, X, Award, Loader2 } from 'lucide-react';
import Button from './Button';

const Experience: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    setIsGenerating(true);
    // Render content in background then download
    setTimeout(() => generatePDF(), 500);
  };

  const generatePDF = () => {
    const element = document.getElementById('resume-content');
    if (!element) {
        setIsGenerating(false);
        return;
    }

    const opt = {
      margin: 0,
      filename: `Saron_Resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    if ((window as any).html2pdf) {
        (window as any).html2pdf().set(opt).from(element).save()
        .then(() => {
            setIsGenerating(false);
        })
        .catch((err: any) => {
            console.error(err);
            setIsGenerating(false);
        });
    } else {
        window.print();
        setIsGenerating(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowPreview(false);
    }
  };

  return (
    <section className="min-h-screen pt-24 pb-12 px-6 flex flex-col items-center">
      <div className="mx-auto" style={{ maxWidth: '1536px', width: '100%' }}>
        
        {/* Header Section */}
        <div className={`flex flex-col items-center mb-10 transition-all duration-700 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
           <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Resume</h2>
           <div className="w-20 h-1.5 bg-indigo-500 rounded-full mb-6"></div>
           
           {/* Profile Summary in Main View */}
           <div className="max-w-3xl text-center mb-8">
             <p className="text-lg text-slate-300 leading-relaxed font-light">
               "{RESUME_DATA.profile}"
             </p>
           </div>
          
          <div className="flex gap-4 mb-12">
            <Button variant="outline" onClick={() => setShowPreview(true)} className="flex items-center gap-2">
              <Eye size={18} /> Preview
            </Button>
            <Button onClick={handleDownload} className="flex items-center gap-2" disabled={isGenerating}>
              {isGenerating ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />} 
              {isGenerating ? 'Generating...' : 'Download PDF'}
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-16">
          
          {/* Work Experience */}
          <div className={`transition-all duration-700 delay-100 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
              <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                <Briefcase size={24} />
              </div>
              Employment History
            </h3>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-indigo-500/20 before:to-transparent">
              {EXPERIENCE.map((job, index) => (
                <div 
                  key={job.id} 
                  className="relative flex items-start group"
                >
                  <div className="absolute left-0 mt-1.5 ml-3 w-4 h-4 rounded-full border-2 border-slate-600 bg-background group-hover:border-indigo-500 group-hover:bg-indigo-500 transition-colors z-10 shadow-[0_0_0_4px_rgba(15,23,42,1)]"></div>
                  
                  <div className="ml-16 w-full bg-surface/50 p-6 md:p-8 rounded-2xl border border-slate-700/30 hover:border-indigo-500/30 transition-all hover:bg-surface/80 hover:shadow-lg hover:shadow-indigo-500/5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                      <h4 className="text-xl font-bold text-slate-100">{job.role}</h4>
                      <span className="text-sm font-medium text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 w-fit mt-2 sm:mt-0">
                        {job.period}
                      </span>
                    </div>
                    <div className="text-slate-300 font-medium text-lg mb-4">
                      {job.company}
                    </div>
                    <ul className="space-y-2 text-slate-400">
                      {job.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 leading-relaxed text-sm md:text-base">
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

          {/* Education */}
          <div className={`transition-all duration-700 delay-300 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                <GraduationCap size={24} />
              </div>
              Education & Courses
            </h3>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-purple-500/20 before:to-transparent">
              {EDUCATION.map((edu, index) => (
                <div 
                  key={edu.id} 
                  className="relative flex items-start group"
                >
                  <div className="absolute left-0 mt-1.5 ml-3 w-4 h-4 rounded-full border-2 border-slate-600 bg-background group-hover:border-purple-500 group-hover:bg-purple-500 transition-colors z-10 shadow-[0_0_0_4px_rgba(15,23,42,1)]"></div>
                  
                  <div className="ml-16 w-full bg-surface/50 p-6 md:p-8 rounded-2xl border border-slate-700/30 hover:border-purple-500/30 transition-all hover:bg-surface/80 hover:shadow-lg hover:shadow-purple-500/5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                      <h4 className="text-xl font-bold text-slate-100">{edu.degree}</h4>
                      <span className="text-sm font-medium text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 w-fit mt-2 sm:mt-0">
                        {edu.period}
                      </span>
                    </div>
                    <div className="text-slate-300 font-medium text-lg mb-2">
                      {edu.institution}
                    </div>
                    {edu.grade && (
                       <div className="text-slate-400 text-sm flex items-center gap-2">
                         <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                         {edu.grade}
                       </div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Courses */}
               <div className="relative flex items-start group">
                  <div className="absolute left-0 mt-1.5 ml-3 w-4 h-4 rounded-full border-2 border-slate-600 bg-background group-hover:border-purple-500 group-hover:bg-purple-500 transition-colors z-10 shadow-[0_0_0_4px_rgba(15,23,42,1)]"></div>
                  <div className="ml-16 w-full bg-surface/50 p-6 md:p-8 rounded-2xl border border-slate-700/30 hover:border-purple-500/30 transition-all hover:bg-surface/80">
                    <h4 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2"><Award size={20} className="text-purple-400"/> Courses</h4>
                    <ul className="space-y-2">
                      {COURSES.map((course, idx) => (
                        <li key={idx} className="text-slate-300 flex items-center gap-2">
                           <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                           <span className="font-medium">{course.name}</span>, {course.institution}
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>

            </div>
          </div>

        </div>
      </div>

      {/* Resume Preview & Generation Container */}
      {(showPreview || isGenerating) && (
        <div 
          className={
            showPreview
              ? "fixed inset-0 z-50 flex justify-center items-start overflow-y-auto bg-black/80 backdrop-blur-sm pt-28 pb-10 px-4 print:p-0 print:bg-white print:static print:overflow-visible"
              : "fixed left-[-9999px] top-0 w-[210mm] overflow-hidden" // Off-screen for generation
          }
          onClick={showPreview ? handleBackdropClick : undefined}
        >
          <div className={`relative w-full max-w-[210mm] ${showPreview ? 'shadow-2xl animate-fade-in' : ''} print:shadow-none print:w-full print:max-w-none`}>
            
            {/* Close Button (Hidden when printing/generating or if preview is not open) */}
            {showPreview && (
              <button 
                onClick={() => setShowPreview(false)}
                className="absolute -top-10 right-0 text-white hover:text-indigo-400 transition-colors print:hidden no-print flex items-center gap-2 font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-md"
              >
                Close <X size={18} />
              </button>
            )}

            {/* Resume Content - Two Column Layout */}
            <div 
                id="resume-content" 
                className="flex flex-col md:flex-row min-h-[297mm] bg-white text-slate-900 print:shadow-none print:w-full print:flex-row"
            >
              
              {/* Left Sidebar */}
              <div className="w-full md:w-[32%] bg-[#0f172a] text-white p-6 print:w-[32%] print:bg-[#0f172a] print:text-white print-color-adjust-exact">
                 {/* Photo Placeholder */}
                 <div className="w-24 h-24 mx-auto mb-5 bg-slate-700 rounded-full overflow-hidden border-4 border-slate-600">
                    <div className="w-full h-full flex items-center justify-center bg-indigo-600 text-2xl font-bold">
                       {RESUME_DATA.name.charAt(0)}
                    </div>
                 </div>

                 <h1 className="text-xl font-bold text-center mb-1 uppercase tracking-wider">{RESUME_DATA.name}</h1>
                 <p className="text-center text-[10px] text-indigo-300 mb-6 tracking-widest uppercase">{RESUME_DATA.role}</p>

                 <div className="space-y-5">
                    <section>
                       <h3 className="text-xs font-bold uppercase border-b border-indigo-500/50 pb-1 mb-2">Details</h3>
                       <div className="space-y-2 text-xs text-slate-300 font-light">
                          <p className="flex flex-col"><span className="font-semibold text-white mb-0.5">Address</span>{RESUME_DATA.address}</p>
                          <p className="flex flex-col"><span className="font-semibold text-white mb-0.5">Phone</span>{RESUME_DATA.phone}</p>
                          <p className="flex flex-col"><span className="font-semibold text-white mb-0.5">Email</span><a href={`mailto:${RESUME_DATA.email}`} className="underline text-indigo-300 break-words">{RESUME_DATA.email}</a></p>
                          <p className="flex flex-col"><span className="font-semibold text-white mb-0.5">Nationality</span>{RESUME_DATA.nationality}</p>
                          <p className="flex flex-col"><span className="font-semibold text-white mb-0.5">Date of Birth</span>{RESUME_DATA.dob}</p>
                       </div>
                    </section>

                    <section>
                       <h3 className="text-xs font-bold uppercase border-b border-indigo-500/50 pb-1 mb-2">Links</h3>
                       <div className="space-y-1 text-xs text-indigo-300 underline">
                          <p><a href={SOCIAL_LINKS.github}>Github</a></p>
                          <p><a href={SOCIAL_LINKS.linkedin}>JobStreet</a></p>
                       </div>
                    </section>

                    <section>
                       <h3 className="text-xs font-bold uppercase border-b border-indigo-500/50 pb-1 mb-2">Skills</h3>
                       <div className="space-y-2">
                          {SKILLS.map(skill => (
                             <div key={skill.name}>
                                <div className="flex justify-between text-[10px] mb-0.5">
                                   <span>{skill.name}</span>
                                </div>
                                <div className="w-full bg-slate-700 h-1 rounded-full">
                                   <div className="bg-white h-1 rounded-full" style={{ width: `${skill.level}%` }}></div>
                                </div>
                             </div>
                          ))}
                       </div>
                    </section>

                     <section>
                       <h3 className="text-xs font-bold uppercase border-b border-indigo-500/50 pb-1 mb-2">Languages</h3>
                       <div className="space-y-2 text-xs">
                          {RESUME_DATA.languages.map(lang => (
                             <div key={lang}>
                                <p className="mb-0.5">{lang}</p>
                                <div className="w-full bg-slate-700 h-1 rounded-full">
                                   <div className="bg-white h-1 rounded-full" style={{ width: '100%' }}></div>
                                </div>
                             </div>
                          ))}
                       </div>
                    </section>
                 </div>
              </div>

              {/* Right Content */}
              <div className="w-full md:w-[68%] bg-white text-slate-800 p-6 print:w-[68%]">
                 <section className="mb-5">
                    <h2 className="text-lg font-bold uppercase text-slate-900 mb-2 flex items-center gap-2 border-b border-slate-200 pb-1">
                       Profile
                    </h2>
                    <p className="text-xs leading-relaxed text-slate-600 text-justify">
                       {RESUME_DATA.profile}
                    </p>
                 </section>

                 <section className="mb-5">
                    <h2 className="text-lg font-bold uppercase text-slate-900 mb-3 flex items-center gap-2 border-b border-slate-200 pb-1">
                       Employment History
                    </h2>
                    <div className="space-y-4">
                       {EXPERIENCE.map(job => (
                          <div key={job.id}>
                             <div className="flex justify-between items-baseline mb-0.5">
                                <h3 className="font-bold text-sm text-slate-900">{job.role}, {job.company}</h3>
                             </div>
                             <p className="text-[10px] font-semibold text-slate-400 mb-1 uppercase tracking-wide">{job.period}</p>
                             <ul className="list-disc ml-3 space-y-0.5">
                                {job.description.map((desc, i) => (
                                   <li key={i} className="text-xs text-slate-600 leading-snug pl-1">{desc}</li>
                                ))}
                             </ul>
                          </div>
                       ))}
                    </div>
                 </section>

                 <section className="mb-5">
                    <h2 className="text-lg font-bold uppercase text-slate-900 mb-3 flex items-center gap-2 border-b border-slate-200 pb-1">
                       Education
                    </h2>
                    <div className="space-y-3">
                       {EDUCATION.map(edu => (
                          <div key={edu.id}>
                             <h3 className="font-bold text-sm text-slate-900">{edu.degree}, {edu.institution}</h3>
                             <p className="text-[10px] font-semibold text-slate-400 mb-0.5 uppercase tracking-wide">{edu.period}</p>
                             {edu.grade && <p className="text-xs text-slate-600">Completed with {edu.grade}</p>}
                          </div>
                       ))}
                    </div>
                 </section>

                 <section>
                    <h2 className="text-lg font-bold uppercase text-slate-900 mb-2 flex items-center gap-2 border-b border-slate-200 pb-1">
                       Courses
                    </h2>
                    <div className="space-y-0.5">
                       {COURSES.map((course, i) => (
                          <div key={i} className="text-xs text-slate-700">
                             <span className="font-bold">{course.name}</span>, {course.institution}
                          </div>
                       ))}
                    </div>
                 </section>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;