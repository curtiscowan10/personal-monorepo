import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@personal-monorepo/shared-theme';
import HomeContainer from './HomeContainer';

const renderWithProviders = (component) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </BrowserRouter>
  );
};

describe('HomeContainer', () => {
  it('should render successfully', () => {
    renderWithProviders(<HomeContainer />);
    expect(screen.getByText('Welcome to My Portfolio')).toBeTruthy();
  });

  it('should render hero section with correct content', () => {
    renderWithProviders(<HomeContainer />);

    expect(screen.getByText('Welcome to My Portfolio')).toBeTruthy();
    expect(
      screen.getByText(/Full-Stack Developer passionate about creating/)
    ).toBeTruthy();
    expect(screen.getByTestId('home-page')).toBeTruthy(); // Avatar
  });

  it('should render all technology skills as chips', () => {
    renderWithProviders(<HomeContainer />);

    const expectedSkills = [
      'React',
      'JavaScript',
      'Node.js',
      'Material-UI',
      'SCSS',
      'Vite',
      'NX',
      'Git',
      'Responsive Design',
    ];

    expect(screen.getByText('Technologies I Work With')).toBeTruthy();

    expectedSkills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeTruthy();
    });
  });

  it('should render features section with all three features', () => {
    renderWithProviders(<HomeContainer />);

    expect(screen.getByText('What I Bring to the Table')).toBeTruthy();

    expect(screen.getByText('Clean Code')).toBeTruthy();
    expect(
      screen.getByText(
        'Writing maintainable, scalable, and well-documented code following best practices.'
      )
    ).toBeTruthy();

    expect(screen.getByText('Modern Design')).toBeTruthy();
    expect(
      screen.getByText(
        'Creating beautiful, intuitive user interfaces with attention to detail and user experience.'
      )
    ).toBeTruthy();

    expect(screen.getByText('Performance')).toBeTruthy();
    expect(
      screen.getByText(
        'Optimizing applications for speed, accessibility, and cross-browser compatibility.'
      )
    ).toBeTruthy();
  });

  it('should render navigation buttons with correct links', () => {
    renderWithProviders(<HomeContainer />);

    const viewWorkButton = screen.getByRole('link', { name: /view my work/i });
    const getInTouchButton = screen.getByRole('link', {
      name: /get in touch/i,
    });
    const startConversationButton = screen.getByRole('link', {
      name: /start a conversation/i,
    });

    expect(viewWorkButton.getAttribute('href')).toBe('/projects');
    expect(getInTouchButton.getAttribute('href')).toBe('/contact');
    expect(startConversationButton.getAttribute('href')).toBe('/contact');
  });

  it('should render call to action section', () => {
    renderWithProviders(<HomeContainer />);

    expect(screen.getByText('Ready to Start Your Next Project?')).toBeTruthy();
    expect(
      screen.getByText("Let's work together to bring your ideas to life")
    ).toBeTruthy();
  });

  it('should display feature icons correctly', () => {
    const { container } = renderWithProviders(<HomeContainer />);

    // Should have feature icons with correct CSS classes
    expect(container.querySelector('.feature-icon-code')).toBeTruthy();
    expect(container.querySelector('.feature-icon-design')).toBeTruthy();
    expect(container.querySelector('.feature-icon-speed')).toBeTruthy();
  });

  it('should have correct CSS classes applied', () => {
    const { container } = renderWithProviders(<HomeContainer />);

    expect(container.querySelector('.home')).toBeTruthy();
    expect(container.querySelector('.home__hero')).toBeTruthy();
    expect(container.querySelector('.home__features')).toBeTruthy();
    expect(container.querySelector('.home__cta')).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { container } = renderWithProviders(<HomeContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
