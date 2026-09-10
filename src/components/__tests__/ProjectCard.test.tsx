import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../ProjectCard';
import { ProjectType } from '@/data/Projects';

const baseProject: ProjectType = {
  title: 'City-Dispatch',
  description: 'A delivery dispatch system.',
  technologies: [{ img: 'go', name: 'Golang' }],
};

describe('ProjectCard', () => {
  it('renders title, description and technologies', () => {
    render(<ProjectCard project={baseProject} index={0} />);

    expect(screen.getByText('City-Dispatch')).toBeInTheDocument();
    expect(screen.getByText('A delivery dispatch system.')).toBeInTheDocument();
    expect(screen.getByText('Golang')).toBeInTheDocument();
  });

  it('renders an initials fallback when the project has no image', () => {
    render(<ProjectCard project={baseProject} index={0} />);

    const fallback = screen.getByTestId('project-card-fallback');
    expect(fallback).toBeInTheDocument();
    expect(fallback).toHaveTextContent('CI');
  });

  it('renders the image instead of the fallback when one is provided', () => {
    render(
      <ProjectCard project={{ ...baseProject, img: '/projects/cravr.jpg' }} index={0} />
    );

    expect(screen.queryByTestId('project-card-fallback')).not.toBeInTheDocument();
    expect(screen.getByAltText('City-Dispatch')).toBeInTheDocument();
  });

  it('renders github and live links when provided', () => {
    render(
      <ProjectCard
        project={{
          ...baseProject,
          url: 'https://example.com',
          githubUrl: 'https://github.com/RakibulBh/city-dispatch',
        }}
        index={0}
      />
    );

    expect(screen.getByText('Visit').closest('a')).toHaveAttribute(
      'href',
      'https://example.com'
    );
    expect(screen.getByText('GitHub').closest('a')).toHaveAttribute(
      'href',
      'https://github.com/RakibulBh/city-dispatch'
    );
  });
});
