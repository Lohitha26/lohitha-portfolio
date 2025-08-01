type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Lohitha Bhusarapu — Portfolio',
    fullName: 'Lohitha Bhusarapu',
    email: 'lohitha.bhusarapu26@gmail.com',
  },
  hero: {
    name: 'Lohitha bhusarapu',
    p: [
      'Hey, I’m Lohitha — frontend fanatic, full-stack explorer, and part-time UI therapist. I build sleek, fast websites with Next.js, TypeScript, and TailwindCSS — and spice things up with SCSS or Three.js when needed. I love clean UIs, smooth animations, and components so reusable they deserve a medal. Occasionally I dabble in .NET and SQL (only when absolutely required). I’ve shipped with DatoCMS, deployed via Azure, and recently dived into GenAI — chaos included. Code, coffee, and controlled drama — that’s the Lohitha vibe ☕💻✨',
    ],
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `I'm a Full Stack Developer with 3 years of experience building high-performance, scalable web applications using modern frameworks like Next.js and TypeScript. I specialize in creating API-first solutions, integrating headless CMS platforms like DatoCMS, and deploying seamlessly to the edge with platforms like Vercel. Beyond writing clean, maintainable code, I’ve taken ownership of leading UI architecture, driving product decisions, and implementing CI/CD pipelines with GitHub Actions and Docker. I’ve also mentored junior developers, reviewed code, and guided teams toward better engineering practices—strengthening delivery velocity and collaboration. I thrive in fast-paced environments where quality, scalability, and user experience are equally valued. My goal is always to build performant apps that are optimized for users and easy for teams to maintain and scale.
`,
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Work Experience.',
    },
    feedbacks: {
      p: 'What others say',
      h2: 'Testimonials.',
    },
    works: {
      p: 'My work',
      h2: 'Projects.',
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
