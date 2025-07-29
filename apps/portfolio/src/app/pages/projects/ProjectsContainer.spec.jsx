import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@personal-monorepo/shared-theme';
import ProjectsContainer from './ProjectsContainer';

const renderWithProviders = (component) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </BrowserRouter>
  );
};

describe('ProjectsContainer', () => {
  it('should render successfully', () => {
    renderWithProviders(<ProjectsContainer />);
    expect(screen.getByText('My Projects')).toBeTruthy();
  });

  it('should render header section with correct content', () => {
    renderWithProviders(<ProjectsContainer />);

    expect(screen.getByText('My Projects')).toBeTruthy();
    expect(screen.getByText(/A showcase of my recent work/)).toBeTruthy();
  });

  it('should render featured projects section with correct projects', () => {
    renderWithProviders(<ProjectsContainer />);

    expect(screen.getByText('Featured Projects')).toBeTruthy();

    // Should have 2 featured projects
    expect(screen.getByText('E-Commerce Platform')).toBeTruthy();
    expect(screen.getByText('Task Management App')).toBeTruthy();

    // Check for "Featured" chips
    const featuredChips = screen.getAllByText('Featured');
    expect(featuredChips).toHaveLength(2);
  });

  it('should render other projects section with correct projects', () => {
    renderWithProviders(<ProjectsContainer />);

    expect(screen.getByText('Other Projects')).toBeTruthy();

    const expectedOtherProjects = [
      'Weather Dashboard',
      'Portfolio Website',
      'Blog Platform',
      'Chat Application',
    ];

    expectedOtherProjects.forEach((title) => {
      expect(screen.getByText(title)).toBeTruthy();
    });
  });

  it('should render project cards with technologies', () => {
    renderWithProviders(<ProjectsContainer />);

    // Check some technologies from different projects
    expect(screen.getByText('React')).toBeTruthy();
    expect(screen.getByText('Node.js')).toBeTruthy();
    expect(screen.getByText('MongoDB')).toBeTruthy();
    expect(screen.getByText('Firebase')).toBeTruthy();
  });

  it('should render project action buttons with correct links', () => {
    renderWithProviders(<ProjectsContainer />);

    const codeButtons = screen.getAllByText('Code');
    const liveDemoButtons = screen.getAllByText('Live Demo');

    // Should have 6 projects, so 6 code buttons and 6 live demo buttons
    expect(codeButtons).toHaveLength(6);
    expect(liveDemoButtons).toHaveLength(6);

    // Check that buttons have correct href attributes
    expect(codeButtons[0].closest('a')).getAttribute(
      'href',
      'https://github.com/example/ecommerce'
    );
    expect(liveDemoButtons[0].closest('a')).getAttribute(
      'href',
      'https://ecommerce-demo.com'
    );
  });

  it('should open project links in new tab', () => {
    renderWithProviders(<ProjectsContainer />);

    const codeButtons = screen.getAllByText('Code');
    const liveDemoButtons = screen.getAllByText('Live Demo');

    expect(codeButtons[0].closest('a')).getAttribute('target').toBe('_blank');
    expect(codeButtons[0].closest('a')).getAttribute(
      'rel',
      'noopener noreferrer'
    );
    expect(liveDemoButtons[0].closest('a'))
      .getAttribute('target')
      .toBe('_blank');
    expect(liveDemoButtons[0].closest('a')).getAttribute(
      'rel',
      'noopener noreferrer'
    );
  });

  it('should render call to action section', () => {
    renderWithProviders(<ProjectsContainer />);

    expect(screen.getByText('Interested in Working Together?')).toBeTruthy();
    expect(screen.getByText(/I'm always open to discussing/)).toBeTruthy();

    const ctaButton = screen.getByRole('link', { name: /get in touch/i });
    expect(ctaButton.getAttribute('href')).toBe('/contact');
  });

  it('should have correct CSS classes applied', () => {
    const { container } = renderWithProviders(<ProjectsContainer />);

    expect(container.querySelector('.projects')).toBeTruthy();
    expect(container.querySelector('.projects__header')).toBeTruthy();
    expect(container.querySelector('.projects__featured')).toBeTruthy();
    expect(container.querySelector('.project-card')).toBeTruthy();
    expect(container.querySelector('.project-card--featured')).toBeTruthy();
  });

  it('should display project descriptions', () => {
    renderWithProviders(<ProjectsContainer />);

    expect(screen.getByText(/A full-stack e-commerce solution/)).toBeTruthy();
    expect(
      screen.getByText(/A collaborative task management application/)
    ).toBeTruthy();
    expect(screen.getByText(/A responsive weather dashboard/)).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { container } = renderWithProviders(<ProjectsContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
