import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  azure,
  dotnet,
  nextjs,
  javascript,
  typescript,
  html,
  csharp,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend & API Developer',
    icon: backend,
  },
  {
    title: 'Team Lead & Mentor',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: '.NET',
    icon: dotnet,
  },
  {
    name: 'C#',
    icon: csharp,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'Azure',
    icon: azure,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Full Stack Developer',
    companyName: 'Nova Prime Solutions Pvt Ltd',
    icon: './favicon.ico',
    iconBg: '#383E56',
    date: 'October 2023 - Present',
    points: [
      'Spearheaded the architecture and development of a highly scalable end-to-end eCommerce platform using Next.js, DatoCMS, and Microsoft Azure, enabling marketing teams to push real-time content updates without developer dependency — reducing CMS turnaround time by 60%.',
      'Boosted frontend load speed by 30% through implementation of code splitting, lazy loading, SASS modularization, and critical CSS inlining, improving Time to Interactive (TTI) and Core Web Vitals.',
      'Built and maintained production-grade CI/CD pipelines using Azure DevOps, automating staging and production deployments, and reducing release cycle times from days to hours.',
      'Refactored and optimized RESTful backend APIs, implementing indexing strategies, selective caching, and schema restructuring, which cut average query latency by 40% and improved server response times.',
      'Partnered closely with cross-functional teams — including UI/UX, DevOps, QA, and Product — to streamline sprint execution and ensure alignment with business KPIs; contributed to the successful delivery of 4+ major feature rollouts ahead of schedule.',
      'Led performance benchmarking and regression testing initiatives using custom tooling and Playwright, proactively identifying bottlenecks and ensuring system stability under load.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    companyName: 'Toast Inc',
    icon: './toast.png',
    iconBg: '#E6DEDD',
    date: 'August 2022 - July 2023',
    points: [
      'InvolvedCloud Computing Interng a React-based Point of Sale (POS) system to streamline transaction workflows, improving transaction speed by 25%.',
      'Created secure REST APIs using ASP.NET Core, implementing role-based access control to ensure data privacy and modular access.',
      'Diagnosed performance bottlenecks and optimized SQL queries and stored procedures, resulting in faster response times and reduced database load.',
      'Participated in daily standups, sprint reviews, and collaborated closely with QA and DevOps teams under an Agile delivery model.',
    ],
  },
  {
    title: 'Cloud Computing Intern',
    companyName: 'Verzeo',
    icon: './Verzeo.jpeg',
    iconBg: '#383E56',
    date: 'June 2021 - August 2021',
    points: [
      'Gained hands-on experience with Microsoft Azure services, including virtual machines, Azure App Services, and storage accounts.',
      'Deployed and managed web applications on Azure using the Azure Portal and CLI tools.',
      'Learned the fundamentals of cloud architecture, scalability, and cost optimization strategies.',
      'Completed labs and mini-projects involving cloud-based deployment and monitoring.',
      'Demonstrated dedication, adaptability, and problem-solving in a cloud-first environment.',
    ],
  },
  // {
  //   title: 'Full stack Developer',
  //   companyName: 'Meta',
  //   icon: meta,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2023 - Present',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
