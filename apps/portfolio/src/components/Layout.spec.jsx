import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@personal-monorepo/shared-theme';
import Layout from './Layout';

// Mock useMediaQuery to control mobile/desktop behavior
const mockUseMediaQuery = jest.fn();
jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: () => mockUseMediaQuery(),
}));

const renderWithProviders = (component, initialEntries = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </MemoryRouter>
  );
};

describe('Layout', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseMediaQuery.mockReturnValue(false); // Default to desktop
  });

  it('should render successfully', () => {
    renderWithProviders(
      <Layout>
        <div data-testid="test-content">Test Content</div>
      </Layout>
    );

    expect(screen.getByTestId('test-content')).toBeTruthy();
  });

  it('should render header with logo', () => {
    renderWithProviders(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    const logo = screen.getByText('Portfolio');
    expect(logo).toBeTruthy();
    expect(logo.closest('a')).getAttribute('href').toBe('/');
  });

  it('should render desktop navigation when not mobile', () => {
    mockUseMediaQuery.mockReturnValue(false);

    renderWithProviders(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    expect(screen.getByRole('button', { name: 'Home' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'About' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Projects' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Contact' })).toBeTruthy();
  });

  it('should render mobile menu button when mobile', () => {
    mockUseMediaQuery.mockReturnValue(true);

    renderWithProviders(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    expect(screen.getByLabelText('open drawer')).toBeTruthy();
    expect(screen.queryByRole('button', { name: 'Home' })).toBeNull();
  });

  it('should highlight active navigation item', () => {
    mockUseMediaQuery.mockReturnValue(false);

    renderWithProviders(
      <Layout>
        <div>Test Content</div>
      </Layout>,
      ['/about']
    );

    const aboutButton = screen.getByRole('button', { name: 'About' });
    expect(aboutButton).toHaveClass('layout__nav-button--active');
  });

  it('should open mobile drawer when menu button is clicked', () => {
    mockUseMediaQuery.mockReturnValue(true);

    renderWithProviders(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    const menuButton = screen.getByLabelText('open drawer');
    fireEvent.click(menuButton);

    // Check if drawer content is visible
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('About')).toBeTruthy();
    expect(screen.getByText('Projects')).toBeTruthy();
    expect(screen.getByText('Contact')).toBeTruthy();
  });

  it('should close mobile drawer when close button is clicked', () => {
    mockUseMediaQuery.mockReturnValue(true);

    renderWithProviders(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    // Open drawer
    const menuButton = screen.getByLabelText('open drawer');
    fireEvent.click(menuButton);

    // Close drawer
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    // Drawer should be closed (content still exists but not visible)
    expect(screen.getByText('Home')).toBeTruthy();
  });

  it('should close mobile drawer when navigation item is clicked', () => {
    mockUseMediaQuery.mockReturnValue(true);

    renderWithProviders(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    // Open drawer
    const menuButton = screen.getByLabelText('open drawer');
    fireEvent.click(menuButton);

    // Click navigation item
    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);

    // Drawer should be closed
    expect(screen.getByText('Home')).toBeTruthy();
  });

  it('should highlight active mobile navigation item', () => {
    mockUseMediaQuery.mockReturnValue(true);

    renderWithProviders(
      <Layout>
        <div>Test Content</div>
      </Layout>,
      ['/projects']
    );

    // Open drawer
    const menuButton = screen.getByLabelText('open drawer');
    fireEvent.click(menuButton);

    const projectsItem = screen.getByText('Projects').closest('a');
    expect(projectsItem).toHaveClass('layout__mobile-drawer-nav-item--active');
  });

  it('should render footer with current year', () => {
    renderWithProviders(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(` ${currentYear} Portfolio`))
    ).toBeTruthy();
  });

  it('should render children content', () => {
    const testContent = 'This is test content for the layout';

    renderWithProviders(
      <Layout>
        <div>{testContent}</div>
      </Layout>
    );

    expect(screen.getByText(testContent)).toBeTruthy();
  });

  it('should have correct navigation links', () => {
    mockUseMediaQuery.mockReturnValue(false);

    renderWithProviders(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    expect(screen.getByRole('button', { name: 'Home' }).closest('a'))
      .getAttribute('href')
      .toBe('/');
    expect(screen.getByRole('button', { name: 'About' }).closest('a'))
      .getAttribute('href')
      .toBe('/about');
    expect(screen.getByRole('button', { name: 'Projects' }).closest('a'))
      .getAttribute('href')
      .toBe('/projects');
    expect(screen.getByRole('button', { name: 'Contact' }).closest('a'))
      .getAttribute('href')
      .toBe('/contact');
  });

  it('should have correct CSS classes applied', () => {
    const { container } = renderWithProviders(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    expect(container.querySelector('.layout')).toBeTruthy();
    expect(container.querySelector('.layout__appbar')).toBeTruthy();
    expect(container.querySelector('.layout__main')).toBeTruthy();
    expect(container.querySelector('.layout__footer')).toBeTruthy();
  });

  it('should match snapshot for desktop view', () => {
    mockUseMediaQuery.mockReturnValue(false);

    const { container } = renderWithProviders(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot for mobile view', () => {
    mockUseMediaQuery.mockReturnValue(true);

    const { container } = renderWithProviders(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
