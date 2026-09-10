import { Technology } from './techstack';

export type ProjectType = {
  title: string;
  img?: string;
  video?: string;
  description: string;
  technologies: { img: Technology; name: string }[];
  url?: string;
  githubUrl?: string;
};

export const PROJECTS: ProjectType[] = [
  {
    title: 'City-Dispatch',
    description:
      'An 8-service Go delivery dispatch system handling 9,700 rider location updates/sec and serving order requests at 34ms. Its matching engine ranks riders by predicted pickup and dropoff time, and the pipeline is hardened with idempotency keys, duplicate detection and retries with backoff.',
    technologies: [
      {
        img: 'go',
        name: 'Golang',
      },
      {
        img: 'python',
        name: 'Python',
      },
      {
        img: 'postgresql',
        name: 'PostgreSQL / PostGIS',
      },
      {
        img: 'redis',
        name: 'Redis',
      },
      {
        img: 'kafka',
        name: 'Kafka',
      },
      {
        img: 'grpc',
        name: 'gRPC',
      },
      {
        img: 'prometheus',
        name: 'Prometheus',
      },
      {
        img: 'docker',
        name: 'Docker',
      },
    ],
    githubUrl: 'https://github.com/RakibulBh/city-dispatch',
  },
  {
    title: 'Cravr',
    img: '/projects/cravr.jpg',
    description:
      'Find the food spots going viral on TikTok near you, ranked by how hard the internet is craving them. A location-based discovery app with a live map of trending places.',
    technologies: [
      {
        img: 'go',
        name: 'Golang',
      },
      {
        img: 'postgresql',
        name: 'PostgreSQL',
      },
      {
        img: 'next',
        name: 'Next.js',
      },
      {
        img: 'react',
        name: 'React',
      },
      {
        img: 'ts',
        name: 'TypeScript',
      },
      {
        img: 'tailwindcss',
        name: 'TailwindCSS',
      },
      {
        img: 'docker',
        name: 'Docker',
      },
      {
        img: 'github',
        name: 'GitHub CI/CD',
      },
    ],
    url: 'https://cravr.rakibulb.org',
  },
  {
    title: 'TailorMyApplication',
    description:
      'Reverse-engineers any job description, scores your resume against exactly what the role wants, and surfaces the gaps that get you rejected — alongside standout project ideas and warm intros at the company.',
    technologies: [
      {
        img: 'next',
        name: 'Next.js',
      },
      {
        img: 'react',
        name: 'React',
      },
      {
        img: 'ts',
        name: 'TypeScript',
      },
      {
        img: 'postgresql',
        name: 'PostgreSQL',
      },
      {
        img: 'clerk',
        name: 'Clerk',
      },
      {
        img: 'tailwindcss',
        name: 'TailwindCSS',
      },
    ],
    url: 'https://tailormyapplication.com/',
  },
  {
    title: 'Hundoscore',
    img: '/projects/hundoscore.png',
    description:
      'A reverse habit tracker where every day starts at 100. An LLM weights each habit from the goal behind it, so missing the important ones costs more. Frozen daily history with trend charts.',
    technologies: [
      {
        img: 'go',
        name: 'Golang',
      },
      {
        img: 'postgresql',
        name: 'PostgreSQL',
      },
      {
        img: 'next',
        name: 'Next.js',
      },
      {
        img: 'react',
        name: 'React',
      },
      {
        img: 'ts',
        name: 'TypeScript',
      },
      {
        img: 'tailwindcss',
        name: 'TailwindCSS',
      },
      {
        img: 'docker',
        name: 'Docker',
      },
    ],
    url: 'https://hundoscore.rakibulb.org',
  },
  {
    title: 'Kickpot',
    img: '/projects/kickpot.png',
    description:
      'A virtual-currency World Cup 2026 prediction game. Everyone starts with £5,000 of play money and bets on matches settled as pari-mutuel pools, competing on a live leaderboard.',
    technologies: [
      {
        img: 'go',
        name: 'Golang',
      },
      {
        img: 'postgresql',
        name: 'PostgreSQL',
      },
      {
        img: 'next',
        name: 'Next.js',
      },
      {
        img: 'react',
        name: 'React',
      },
      {
        img: 'ts',
        name: 'TypeScript',
      },
      {
        img: 'tailwindcss',
        name: 'TailwindCSS',
      },
      {
        img: 'docker',
        name: 'Docker',
      },
    ],
    url: 'https://kickpot.rakibulb.org',
  },
  {
    title: 'MemorizePDF',
    description:
      'Summarizes lecture notes into quizzes by difficulty and creates memorable flashcards. Got 400 docs parsed in the first week. Built with Gemini LLM and Apache Tika OCR.',
    technologies: [
      {
        img: 'go',
        name: 'Golang',
      },
      {
        img: 'next',
        name: 'Next.js',
      },
      {
        img: 'react',
        name: 'React',
      },
      {
        img: 'ts',
        name: 'TypeScript',
      },
      {
        img: 'docker',
        name: 'Docker',
      },
      {
        img: 'github',
        name: 'GitHub CI/CD',
      },
    ],
    url: 'https://memorisepdf.pro',
    githubUrl: 'https://github.com/RakibulBh/memorisepdf',
  },
  {
    title: 'FIDO2 Auth',
    description:
      'Passwordless authentication system using FIDO2/WebAuthn standards. Built with microservices architecture for scalable, secure biometric and hardware key authentication.',
    technologies: [
      {
        img: 'go',
        name: 'Golang',
      },
      {
        img: 'mongodb',
        name: 'MongoDB',
      },
      {
        img: 'postgresql',
        name: 'PostgreSQL',
      },
      {
        img: 'next',
        name: 'Next.js',
      },
      {
        img: 'react',
        name: 'React',
      },
      {
        img: 'ts',
        name: 'TypeScript',
      },
      {
        img: 'docker',
        name: 'Docker',
      },
    ],
    githubUrl: 'https://github.com/RakibulBh/fido2-auth',
  },
  {
    title: 'Habituate',
    description: 'A habit tracker with a rewards system.',
    technologies: [
      {
        img: 'ts',
        name: 'TypeScript',
      },
      {
        img: 'next',
        name: 'Next.js',
      },
      {
        img: 'mongodb',
        name: 'MongoDB',
      },
      {
        img: 'tailwindcss',
        name: 'TailwindCSS',
      },
    ],
  },
];
