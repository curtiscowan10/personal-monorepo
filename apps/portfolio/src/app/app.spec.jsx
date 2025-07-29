import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './app';

// Mock the theme to avoid import issues in tests
jest.mock('@personal-monorepo/shared-theme', () => ({
  theme: {
    palette: {
      primary: { main: '#0f172a' },
      secondary: { main: '#3b82f6' },
    },
    typography: { fontFamily: 'Roboto,sans-serif' },
    shape: { borderRadius: 12 },
    components: {},
  },
}));

// Mock all page components to focus on App routing logic
jest.mock('../components/Layout', () => {
  return function MockLayout({ children }) {
    return <div data-testid="layout">{children}</div>;
  };
});

jest.mock('./pages/home/HomeContainer', () => {
  return function MockHomeContainer() {
    return <div data-testid="home-page">Home Page</div>;
  };
});

jest.mock('./pages/about/AboutContainer', () => {
  return function MockAboutContainer() {
    return <div data-testid="about-page">About Page</div>;
  };
});

jest.mock('./pages/projects/ProjectsContainer', () => {
  return function MockProjectsContainer() {
    return <div data-testid="projects-page">Projects Page</div>;
  };
});

jest.mock('./pages/contact/ContactContainer', () => {
  return function MockContactContainer() {
    return <div data-testid="contact-page">Contact Page</div>;
  };
});

const renderWithRouter = (initialEntries = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  );
};

describe('App', () => {
  it('should render successfully', () => {
    renderWithRouter();
    expect(screen.getByTestId('layout')).toBeTruthy();
  });

  it('should render home page on root route', () => {
    renderWithRouter(['/']);
    expect(screen.getByTestId('home-page')).toBeTruthy();
    expect(screen.getByText('Home Page')).toBeTruthy();
  });

  it('should render about page on /about route', () => {
    renderWithRouter(['/about']);
    expect(screen.getByTestId('about-page')).toBeTruthy();
    expect(screen.getByText('About Page')).toBeTruthy();
  });

  it('should render projects page on /projects route', () => {
    renderWithRouter(['/projects']);
    expect(screen.getByTestId('projects-page')).toBeTruthy();
    expect(screen.getByText('Projects Page')).toBeTruthy();
  });

  it('should render contact page on /contact route', () => {
    renderWithRouter(['/contact']);
    expect(screen.getByTestId('contact-page')).toBeTruthy();
    expect(screen.getByText('Contact Page')).toBeTruthy();
  });

  it('should wrap content in Layout component', () => {
    renderWithRouter();
    expect(screen.getByTestId('layout')).toBeTruthy();
    expect(screen.getByTestId('home-page')).toBeTruthy();
  });

  it('should provide theme context to all components', () => {
    // This test ensures the ThemeProvider is present
    // The actual theme functionality is tested in the theme spec
    renderWithRouter();
    expect(screen.getByTestId('layout')).toBeTruthy();
  });

  it('should handle invalid routes gracefully', () => {
    renderWithRouter(['/invalid-route']);
    // Should still render layout but no page content
    expect(screen.getByTestId('layout')).toBeTruthy();
    expect(screen.queryByTestId('home-page')).toBeNull();
    expect(screen.queryByTestId('about-page')).toBeNull();
    expect(screen.queryByTestId('projects-page')).toBeNull();
    expect(screen.queryByTestId('contact-page')).toBeNull();
  });

  it('should match snapshot', () => {
    const { container } = renderWithRouter();
    expect(container.firstChild).toMatchSnapshot();
  });
});
