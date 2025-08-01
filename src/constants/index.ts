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
  // dotnet,
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
  // {
  //   name: '.NET',
  //   icon: dotnet,
  // },

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
    name: 'c#',
    icon: csharp,
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
    name: 'Next JS',
    icon: nextjs,
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
      'Lohitha consistently delivers high-quality work on time and approaches every task with remarkable enthusiasm and a genuine eagerness to learn. Her proactive attitude and reliability make her a standout team member, even early in her career',
    name: 'Ravi Shankar',
    designation: 'Director of Ecommerce @Pespico',
    company: 'Pespico',
    image:
      'https://media.licdn.com/dms/image/v2/C4E03AQG2N9v8WREuHw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1586284593369?e=1756944000&v=beta&t=MEO8r506CJHKnbDX1NrXK6KjfH3xFiM0qojrRMeoOAc',
  },
  {
    testimonial:
      'Lohitha started her journey at Toast as an intern and quickly stood out for her eagerness to learn, strong backend skills in .NET Core, SQL, and PostgreSQL, and her knack for tackling challenges like query optimization. With a growing interest in ReactJS, she steadily built her full-stack capabilities. Her clear communication, consistent delivery, and dedication made her an invaluable team member from day one.',
    name: 'Soulwin Raja E',
    designation: 'SDE @Toast Inc',
    company: 'Toast Inc',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQHFkqqTWXbUJA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1665908258129?e=1756944000&v=beta&t=NvK2QP4h55EWipJAg7o26W8F0z4rniVbXInt4kgG2HE',
  },
  {
    testimonial:
      'Working with Lohitha is like pairing clean code with strong coffee — reliable, sharp, and full of energy. She asks the right questions, digs into the backend requirements like a detective, and always shows up curious, enthusiastic, and ready to learn',
    name: 'Kuldeep Mishra',
    designation: 'Backend Lead @Pepsico',
    company: 'Pepsico',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQEmFu_qoL9G6Q/profile-displayphoto-scale_400_400/B56ZeJQOsbH8Ak-/0/1750354424131?e=1756944000&v=beta&t=ofUW8OxcJqd1tmsPQjYB8KyuXVnNnSAAQTdd3zrgyNY',
  },
  {
    testimonial:
      'Lohitha joined our team and quickly proved herself to be a fast learner and a dedicated team player. She picked up React.js and .NET in a remarkably short time and contributed to building new features in our product with great efficiency. Her enthusiasm, adaptability, and collaborative attitude made her a valuable part of the team. Lohitha consistently delivered quality work and showed a strong eagerness to grow. She has great potential, and I’m confident she’ll excel in her career.',
    name: 'Kalai Selvi',
    designation: 'Tech Lead @Toast Inc',
    company: 'Toast Inc',
    image:
      'https://media.licdn.com/dms/image/v2/C5603AQEWrK0eGp1Oug/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1623316575261?e=1756944000&v=beta&t=Ch2qQVdaLFMyr0ZcjzC8wbqgD2t5LEG7Ho2L-HZis_s',
  },
];

const projects: TProject[] = [
  {
    name: 'Ecommerce Grocery Store',
    description:
      'A modern web-based platform for online grocery shopping, allowing users to browse products, add items to their cart, and securely checkout. Features include real-time inventory updates, product search and filtering, and seamless order management for a convenient grocery shopping experience.',
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
