import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectsSectionNew from '../sections/ProjectsSectionNew';
import { PROJECTS } from '@/data/Projects';

describe('ProjectsSectionNew', () => {
  it('renders every project', () => {
    render(<ProjectsSectionNew />);

    PROJECTS.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it('lays projects out in a single column that becomes two on large screens', () => {
    const { container } = render(<ProjectsSectionNew />);

    const grid = container.querySelector('[data-testid="projects-grid"]');
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveClass('grid');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('xl:grid-cols-2');
  });
});
