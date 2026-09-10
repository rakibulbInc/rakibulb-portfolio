'use client';

import InfoBullet from '@/components/InfoBullet';
import Recommendations from '@/components/Recommendations';

const AboutSection = () => {
  const aboutInfo = [
    {
      text: 'Final year Computer Science student at ',
      highlight: 'Brunel University London',
      logo: '/logos/brunelunilogo.png',
      link: 'https://brunel.ac.uk',
    },
    {
      text: 'Based in ',
      highlight: 'London, UK',
    },
  ];

  const previousInfo = [
    {
      text: 'Placement Software Engineer at ',
      highlight: 'SquaredUp',
      link: 'https://squaredup.com',
      logo: '/logos/squaredup.png',
      date: 'Sep 2025 - Sep 2026',
    },
    {
      text: 'Web Developer at ',
      highlight: 'Brunel Talent Marketplace',
      logo: '/logos/btm-logo.png',
      date: 'Nov 2024 - Sep 2025',
      subItems: [
        {
          highlight: 'IAG Cargo',
          logo: '/logos/iagcargo-logo.png',
          description:
            '2x projects: Legacy Java to Python transpilation & LLM-powered email categorisation',
        },
        {
          highlight: 'Trace Solutions',
          logo: '/logos/trace_solutions_ltd_logo.jpeg',
          description: 'Developed an AI Agent for automated test case generation',
        },
      ],
    },
    {
      text: 'Lead Code Tutor at ',
      highlight: 'CodeCamp',
      logo: '/logos/codecamp-logo.png',
      date: 'Sep 2024 - Dec 2024',
    },
    {
      text: 'IT Technician at ',
      highlight: 'Mercedes AMG F1 Team',
      logo: '/logos/MF1_team_logo_Registered-Negative_full_colour.webp',
      date: 'Jul 2022',
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto py-8 md:py-16 space-y-10">
      {/* Name */}
      <div className="space-y-1">
        <h1 className="text-white/90 text-3xl md:text-4xl font-bold">Rakibul Bhuiyan</h1>
        <p className="text-white/50 text-base">Software Engineer</p>
      </div>

      {/* About Me Section */}
      <div className="space-y-3">
        <h2 className="font-mono text-primary text-base font-bold uppercase italic underline decoration-1 decoration-primary/70">
          About me:
        </h2>
        <div className="space-y-2">
          {aboutInfo.map((item, idx) => (
            <InfoBullet key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>

      {/* Previous Section */}
      <div className="space-y-3">
        <h2 className="font-mono text-primary text-base font-bold uppercase italic underline decoration-1 decoration-primary/70">
          Previous:
        </h2>
        <div className="space-y-2">
          {previousInfo.map((item, idx) => (
            <InfoBullet key={idx} item={item} index={idx + aboutInfo.length} />
          ))}
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="space-y-3">
        <h2 className="font-mono text-primary text-base font-bold uppercase italic underline decoration-1 decoration-primary/70">
          Recommendations:
        </h2>
        <Recommendations />
      </div>
    </div>
  );
};

export default AboutSection;
