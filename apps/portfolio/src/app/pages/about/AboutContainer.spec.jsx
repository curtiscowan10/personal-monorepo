import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@personal-monorepo/shared-theme';
import AboutContainer from './AboutContainer';

const renderWithProviders = (component) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </BrowserRouter>
  );
};

describe('AboutContainer', () => {
  it('should render successfully', () => {
    renderWithProviders(<AboutContainer />);
    expect(screen.getByTestId('about-page')).toBeTruthy();
  });

  it('should render the About page with header section', () => {
    renderWithProviders(<AboutContainer />);

    expect(screen.getByTestId('about-page')).toBeTruthy();
    expect(screen.getByText(/I'm a passionate developer/)).toBeTruthy();
    expect(screen.getByText('A')).toBeTruthy(); // Avatar
  });

  it('should render bio section with story content', () => {
    renderWithProviders(<AboutContainer />);

    expect(screen.getByText('My Story')).toBeTruthy();
    expect(screen.getByText(/With over 4 years of experience/)).toBeTruthy();
    expect(screen.getByText(/I believe in writing clean/)).toBeTruthy();
    expect(screen.getByText(/When I'm not coding/)).toBeTruthy();
  });

  it('should render technical skills section with all skills', () => {
    renderWithProviders(<AboutContainer />);

    expect(screen.getByText('Technical Skills')).toBeTruthy();

    const expectedSkills = [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'Node.js', level: 85 },
      { name: 'Material-UI', level: 88 },
      { name: 'SCSS/CSS', level: 92 },
      { name: 'Git', level: 90 },
    ];

    expectedSkills.forEach((skill) => {
      expect(screen.getByText(skill.name)).toBeTruthy();
      expect(screen.getByText(`${skill.level}%`)).toBeTruthy();
    });
  });

  it('should render experience and education section', () => {
    renderWithProviders(<AboutContainer />);

    expect(screen.getByText('Experience & Education')).toBeTruthy();

    // Check work experiences
    expect(screen.getByText('Senior Frontend Developer')).toBeTruthy();
    expect(screen.getByText('Tech Company')).toBeTruthy();
    expect(screen.getByText('2022 - Present')).toBeTruthy();

    expect(screen.getByText('Full Stack Developer')).toBeTruthy();
    expect(screen.getByText('Digital Agency')).toBeTruthy();
    expect(screen.getByText('2020 - 2022')).toBeTruthy();

    // Check education
    expect(screen.getByText('Computer Science Degree')).toBeTruthy();
    expect(screen.getByText('University')).toBeTruthy();
    expect(screen.getByText('2016 - 2020')).toBeTruthy();
  });

  it('should render interests and hobbies section', () => {
    renderWithProviders(<AboutContainer />);

    expect(screen.getByText('Interests & Hobbies')).toBeTruthy();

    const expectedInterests = [
      'Web Development',
      'UI/UX Design',
      'Open Source',
      'Machine Learning',
      'Photography',
      'Travel',
      'Music',
      'Gaming',
    ];

    expectedInterests.forEach((interest) => {
      expect(screen.getByText(interest)).toBeTruthy();
    });
  });

  it('should display work and education icons correctly', () => {
    const { container } = renderWithProviders(<AboutContainer />);

    // Should have work icons for work experiences
    expect(
      container.querySelectorAll('.about__experience-card-icon--work')
    ).toHaveLength(2);

    // Should have school icon for education
    expect(
      container.querySelectorAll('.about__experience-card-icon--school')
    ).toHaveLength(1);
  });

  it('should have correct CSS classes applied', () => {
    const { container } = renderWithProviders(<AboutContainer />);

    expect(container.querySelector('.about')).toBeTruthy();
    expect(container.querySelector('.about__header')).toBeTruthy();
    expect(container.querySelector('.about__bio-card')).toBeTruthy();
    expect(container.querySelector('.about__skills-card')).toBeTruthy();
    expect(container.querySelector('.about__experience')).toBeTruthy();
    expect(container.querySelector('.about__interests')).toBeTruthy();
  });

  it('should render progress bars for skills', () => {
    const { container } = renderWithProviders(<AboutContainer />);

    // Should have LinearProgress components for each skill
    const progressBars = container.querySelectorAll(
      '.about__skill-item-progress'
    );
    expect(progressBars.length).toBe(6); // 6 skills
  });

  it('should match snapshot', () => {
    const { container } = renderWithProviders(<AboutContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
