import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Recommendations from '../Recommendations';
import { RECOMMENDATIONS } from '@/data/recommendations';

describe('Recommendations', () => {
  it('renders every recommender with their role', () => {
    render(<Recommendations />);

    RECOMMENDATIONS.forEach((rec) => {
      expect(screen.getByText(rec.name)).toBeInTheDocument();
      expect(screen.getByText(rec.role)).toBeInTheDocument();
    });
  });

  it('collapses long quotes behind a read more toggle', async () => {
    const user = userEvent.setup();
    render(<Recommendations />);

    const toggles = screen.getAllByRole('button', { name: /read more/i });
    expect(toggles.length).toBe(RECOMMENDATIONS.length);

    await user.click(toggles[0]);

    expect(screen.getByRole('button', { name: /read less/i })).toBeInTheDocument();
  });

  it('shows the full quote text for each recommendation', () => {
    render(<Recommendations />);

    RECOMMENDATIONS.forEach((rec) => {
      expect(screen.getByText(rec.quote)).toBeInTheDocument();
    });
  });
});
