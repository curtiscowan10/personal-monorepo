import { theme } from './theme';
import { createTheme } from '@mui/material/styles';

// Mock createTheme to verify it's called with correct parameters
jest.mock('@mui/material/styles', () => ({
  createTheme: jest.fn((config) => ({
    ...config,
    // Mock theme object structure
    palette: config.palette,
    typography: config.typography,
    shape: config.shape,
    components: config.components,
  })),
}));

describe('shared-theme', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create theme with correct palette configuration', () => {
    expect(createTheme).toHaveBeenCalledWith(
      expect.objectContaining({
        palette: {
          mode: 'light',
          primary: {
            main: '#0f172a',
            light: '#334155',
            dark: '#020617',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#3b82f6',
            light: '#60a5fa',
            dark: '#1d4ed8',
            contrastText: '#ffffff',
          },
          background: {
            default: '#ffffff',
            paper: '#f8fafc',
          },
          text: {
            primary: '#0f172a',
            secondary: '#64748b',
          },
        },
      })
    );
  });

  it('should create theme with correct typography configuration', () => {
    expect(createTheme).toHaveBeenCalledWith(
      expect.objectContaining({
        typography: {
          fontFamily: ['Roboto', 'sans-serif'].join(','),
        },
      })
    );
  });

  it('should create theme with correct shape configuration', () => {
    expect(createTheme).toHaveBeenCalledWith(
      expect.objectContaining({
        shape: {
          borderRadius: 12,
        },
      })
    );
  });

  it('should create theme with correct button component overrides', () => {
    expect(createTheme).toHaveBeenCalledWith(
      expect.objectContaining({
        components: expect.objectContaining({
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: 8,
                fontWeight: 500,
                transition: 'all 0.2s ease-in-out',
              },
            },
          },
        }),
      })
    );
  });

  it('should create theme with correct card component overrides', () => {
    expect(createTheme).toHaveBeenCalledWith(
      expect.objectContaining({
        components: expect.objectContaining({
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 16,
                border: '1px solid #e2e8f0',
              },
            },
          },
        }),
      })
    );
  });

  it('should export theme object', () => {
    expect(theme).toBeDefined();
    expect(typeof theme).toBe('object');
  });

  it('should have correct primary color values', () => {
    expect(theme.palette.primary.main).toBe('#0f172a');
    expect(theme.palette.primary.light).toBe('#334155');
    expect(theme.palette.primary.dark).toBe('#020617');
    expect(theme.palette.primary.contrastText).toBe('#ffffff');
  });

  it('should have correct secondary color values', () => {
    expect(theme.palette.secondary.main).toBe('#3b82f6');
    expect(theme.palette.secondary.light).toBe('#60a5fa');
    expect(theme.palette.secondary.dark).toBe('#1d4ed8');
    expect(theme.palette.secondary.contrastText).toBe('#ffffff');
  });

  it('should have correct background color values', () => {
    expect(theme.palette.background.default).toBe('#ffffff');
    expect(theme.palette.background.paper).toBe('#f8fafc');
  });

  it('should have correct text color values', () => {
    expect(theme.palette.text.primary).toBe('#0f172a');
    expect(theme.palette.text.secondary).toBe('#64748b');
  });

  it('should have light mode configuration', () => {
    expect(theme.palette.mode).toBe('light');
  });

  it('should have correct font family configuration', () => {
    expect(theme.typography.fontFamily).toBe('Roboto,sans-serif');
  });

  it('should have correct border radius configuration', () => {
    expect(theme.shape.borderRadius).toBe(12);
  });

  it('should have button component overrides', () => {
    expect(theme.components.MuiButton).toBeDefined();
    expect(theme.components.MuiButton.styleOverrides).toBeDefined();
    expect(theme.components.MuiButton.styleOverrides.root).toEqual({
      textTransform: 'none',
      borderRadius: 8,
      fontWeight: 500,
      transition: 'all 0.2s ease-in-out',
    });
  });

  it('should have card component overrides', () => {
    expect(theme.components.MuiCard).toBeDefined();
    expect(theme.components.MuiCard.styleOverrides).toBeDefined();
    expect(theme.components.MuiCard.styleOverrides.root).toEqual({
      borderRadius: 16,
      border: '1px solid #e2e8f0',
    });
  });

  it('should match snapshot', () => {
    expect(theme).toMatchSnapshot();
  });
});
