'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { RECOMMENDATIONS, Recommendation } from '@/data/recommendations';

const RecommendationCard = ({
  recommendation,
  index,
}: {
  recommendation: Recommendation;
  index: number;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="rounded-xl border border-white/10 bg-card/40 p-4 space-y-3 hover:border-primary/40 transition-colors"
    >
      <Quote className="w-4 h-4 text-primary/60" aria-hidden="true" />

      <p
        className={`text-white/60 text-xs md:text-sm leading-relaxed ${
          expanded ? '' : 'line-clamp-3'
        }`}
      >
        {recommendation.quote}
      </p>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="text-primary/80 hover:text-primary text-xs font-medium transition-colors"
      >
        {expanded ? 'Read less' : 'Read more'}
      </button>

      <div className="border-t border-white/10 pt-3">
        <p className="text-white/90 text-sm font-semibold">{recommendation.name}</p>
        <p className="text-white/50 text-xs">{recommendation.role}</p>
        <p className="text-white/30 text-xs mt-0.5">
          {recommendation.relationship} &middot; {recommendation.date}
        </p>
      </div>
    </motion.div>
  );
};

const Recommendations = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {RECOMMENDATIONS.map((recommendation, idx) => (
        <RecommendationCard
          key={recommendation.name}
          recommendation={recommendation}
          index={idx}
        />
      ))}
    </div>
  );
};

export default Recommendations;
