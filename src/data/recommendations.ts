export type Recommendation = {
  name: string;
  role: string;
  relationship: string;
  date: string;
  quote: string;
};

export const RECOMMENDATIONS: Recommendation[] = [
  {
    name: 'Tanja Matoska',
    role: 'Senior Engineering Manager, SquaredUp',
    relationship: 'Managed Rakibul directly',
    date: 'September 2026',
    quote:
      'Rakibul spent a year with my team at SquaredUp, working as part of a cross-functional engineering team. He took on a wide range of bugs and features across the full technical stack, and quickly became the person the team relied on to stay on top of incoming issues. He also showed a real appetite to learn: he took feedback on board, adapted quickly to working alongside others, and actively sought out stretch work beyond his core responsibilities. He contributed to the development of an MCP server for AI-led dashboarding, and independently built an experimental AI tool for code reviews. He would be an asset to any team.',
  },
  {
    name: 'Vincent Babin',
    role: 'Senior Product Manager, SquaredUp',
    relationship: 'Worked with Rakibul on the same team',
    date: 'August 2026',
    quote:
      'I worked with Rakibul as Product Manager during his placement year at SquaredUp, and he consistently impressed me with the quality of his work. He delivered on our customer backlog, tackling bugs and features our customers genuinely needed, always asking the right questions and never shying away from a challenge. He also brought a keen interest in AI that translated into practical improvements at SquaredUp, including building our MCP server. I recommend him strongly, he has a genuinely bright future ahead.',
  },
];
