import { Project, Experience, Skill, Education } from './types';

export const RESUME_DATA = {
  name: "SARON P",
  role: "ADMINISTRATOR/WEB DEVELOPER",
  email: "saronraj03@gmail.com",
  phone: "+65 89735895",
  address: "07-45 Blk-228 Bukit Batok Central, 650228, Singapore",
  nationality: "Indian",
  dob: "03/01/2003",
  languages: ["Tamil", "English"],
  profile: "Dynamic professional with 2 years of experience in administrative and medical billing roles, delivering exceptional support in fast-paced environments. Proven expertise in processing medical claims, verifying insurance eligibility, and managing accounts receivable, while ensuring compliance with regulatory standards. Adept at coordinating office operations, handling inquiries, and maintaining meticulous documentation to enhance operational efficiency. Possesses strong skills in HTML, CSS, and Javascript, contributing to effective UI/UX design initiatives. Committed to fostering collaboration and delivering superior service to both internal teams and clients."
};

export const HERO_DATA = {
  name: "Saron P",
  title: "Administrator & Web Developer",
  tagline: "Bridging administrative excellence with creative web solutions.",
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nebula Dashboard',
    description: 'A real-time analytics platform visualizing massive datasets using WebGL and React. Features include customizable widgets and live data streaming.',
    tags: ['React', 'WebGL', 'TypeScript', 'Node.js'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'Echo Chat AI',
    description: 'An intelligent conversational agent built with Gemini API, capable of context-aware responses and multi-modal interaction.',
    tags: ['Gemini API', 'Next.js', 'Tailwind', 'Python'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'Lumina Commerce',
    description: 'A headless e-commerce solution focusing on speed and accessibility. Achieved 100/100 Lighthouse scores across the board.',
    tags: ['React', 'GraphQL', 'Stripe', 'Redis'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    demoUrl: '#',
    githubUrl: '#'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'e1',
    role: 'Process Associate',
    company: 'SCYO DECISION SERVICES PVT LTD, Chennai',
    period: 'Oct 2023 — Jun 2025',
    description: [
      'Medical Billing: Responsible for accurately processing and submitting medical claims, verifying patient insurance eligibility, and performing accounts receivable follow-ups with insurance companies to resolve pending or denied claims.',
      'Handle denial management by identifying errors, correcting issues, and resubmitting claims while ensuring compliance with HIPAA guidelines.',
      'Posting payments, reconciling EOB/ERA information, maintaining accurate documentation, and coordinating with patients and internal teams to address billing inquiries and ensure timely reimbursement.'
    ]
  },
  {
    id: 'e2',
    role: 'Admin',
    company: 'Quality M&E Pte Ltd, Singapore',
    period: 'Jul 2025 — Present',
    description: [
      'Providing day-to-day administrative support, including managing office operations, handling emails and phone enquiries, scheduling meetings, preparing documents, and maintaining records.',
      'Coordinating with internal teams and external vendors, assisting with HR or finance tasks such as data entry and invoice processing, and ensuring smooth office functioning.',
      'Uphold professional communication, manage calendars, support event or travel arrangements, and maintain a high level of accuracy and confidentiality in all administrative duties.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'edu1',
    degree: 'B.sc computer science',
    institution: 'Yadava college, Madurai',
    period: 'Sept 2020 — May 2023',
    grade: '70%'
  },
  {
    id: 'edu2',
    degree: 'HSC',
    institution: 'Government high sec. school, Ramanathapuram',
    period: 'Jun 2018 — Apr 2020',
    grade: '65%'
  }
];

export const COURSES = [
  { name: 'HTML', institution: 'Great Learning' }
];

export const SKILLS: Skill[] = [
  { name: 'HTML', level: 95, icon: 'code' },
  { name: 'CSS', level: 90, icon: 'pen-tool' },
  { name: 'Javascript', level: 85, icon: 'code' },
  { name: 'UI/UX Design', level: 80, icon: 'pen-tool' },
  { name: 'Ms Excel', level: 85, icon: 'briefcase' },
  { name: 'Ms Word', level: 90, icon: 'briefcase' },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Saron-Raj",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "mailto:saronraj03@gmail.com"
};

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Saron P's portfolio website. 
Your goal is to answer visitor's questions about Saron professionally and concisely.
Saron is an Administrator and Web Developer based in Singapore.

Here is the detailed context about Saron based on the website content:

**Profile Summary:**
${RESUME_DATA.profile}

**Contact Information:**
Email: ${RESUME_DATA.email}
Phone: ${RESUME_DATA.phone}
Address: ${RESUME_DATA.address}
Socials: GitHub (${SOCIAL_LINKS.github}), LinkedIn (${SOCIAL_LINKS.linkedin})

**Technical Skills:**
${SKILLS.map(s => `- ${s.name} (Level: ${s.level}%)`).join('\n')}

**Work Experience:**
${EXPERIENCE.map(e => `
- Role: ${e.role}
  Company: ${e.company}
  Period: ${e.period}
  Key Responsibilities:
  ${e.description.map(d => `  * ${d}`).join('\n')}
`).join('\n')}

**Education:**
${EDUCATION.map(e => `- ${e.degree} at ${e.institution} (${e.period}), Grade: ${e.grade || 'N/A'}`).join('\n')}

**Courses & Certifications:**
${COURSES.map(c => `- ${c.name} from ${c.institution}`).join('\n')}

**Featured Projects:**
${PROJECTS.map(p => `
- ${p.title}: ${p.description}
  Technologies: ${p.tags.join(', ')}
`).join('\n')}

**Guidelines:**
- Be polite, professional, and helpful.
- If asked about specific projects, use the details provided above.
- If asked about experience, summarize the relevant roles.
- Keep answers short (under 3-4 sentences) unless the user asks for a detailed explanation.
- If asked for contact, suggest using the contact form or the email provided.
`;
