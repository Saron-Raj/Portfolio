import { Project, Experience, Skill } from './types';

export const HERO_DATA = {
  name: "Saron",
  title: "Admin Professional & Web Developer",
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
    role: 'Admin',
    company: 'Quality m&E pte ltd',
    period: 'July 2025 - Present',
    description: [
      'Managing administrative operations and documentation.',
      'Ensuring operational efficiency and maintaining quality standards.',
      'Coordinating between departments to streamline workflows.'
    ]
  },
  {
    id: 'e2',
    role: 'Process Associate',
    company: 'SCYO DECISION SERVICES PRIVATE LIMITED',
    period: 'Oct 2023 - June 2025',
    description: [
      'Handled complex data processing tasks with high accuracy.',
      'Supported decision-making processes through detailed analysis.',
      'Maintained strict adherence to company protocols and SLAs.'
    ]
  },
  {
    id: 'e3',
    role: 'Freelancer',
    company: 'Self Employed',
    period: '2023 - Present',
    description: [
      'Providing web development and administrative services to clients.',
      'Developing responsive websites using HTML, CSS, and JavaScript.',
      'Delivering projects on time and meeting client specifications.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'HTML', level: 95, icon: 'code' },
  { name: 'CSS', level: 90, icon: 'pen-tool' },
  { name: 'JavaScript', level: 85, icon: 'code' },
  { name: 'Node.js', level: 75, icon: 'server' },
  { name: 'UI/UX Design', level: 80, icon: 'pen-tool' },
  { name: 'Admin', level: 90, icon: 'briefcase' },
];

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "mailto:saronraj03@gmail.com"
};

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Saron Raj's portfolio website. 
Your goal is to answer visitor's questions about Saron professionally and concisely.
Saron is an Admin Professional and Web Developer based in Singapore.
Use the following context about Saron:
- Experience: Admin at Quality m&E pte ltd (July 2025 - Present), Process Associate at SCYO DECISION SERVICES (Oct 2023 - June 2025), and Freelancer.
- Skills: HTML, CSS, JavaScript, Node.js, UI/UX Design, and Administration.
- Personality: Organized, detail-oriented, collaborative, and skilled in both tech and management.
If asked about contact info, direct them to the contact form or saronraj03@gmail.com.
Keep answers short (under 3 sentences) unless asked for details.
`;