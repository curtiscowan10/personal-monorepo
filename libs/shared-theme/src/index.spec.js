import { theme, default as defaultTheme } from './index';

// Mock the theme module
jest.mock('./lib/theme', () => ({
  theme: {
    palette: { primary: { main: '#0f172a' } },
    typography: { fontFamily: 'Roboto,sans-serif' },
  },
  default: {
    palette: { primary: { main: '#0f172a' } },
    typography: { fontFamily: 'Roboto,sans-serif' },
  },
}));

describe('shared-theme index', () => {
  it('should export theme correctly', () => {
    expect(theme).toBeDefined();
    expect(typeof theme).toBe('object');
    expect(theme.palette).toBeDefined();
    expect(theme.typography).toBeDefined();
  });

  it('should export default theme correctly', () => {
    expect(defaultTheme).toBeDefined();
    expect(typeof defaultTheme).toBe('object');
    expect(defaultTheme.palette).toBeDefined();
    expect(defaultTheme.typography).toBeDefined();
  });

  it('should export the same theme object for both named and default exports', () => {
    expect(theme).toEqual(defaultTheme);
  });

  it('should have correct theme structure', () => {
    expect(theme.palette.primary.main).toBe('#0f172a');
    expect(theme.typography.fontFamily).toBe('Roboto,sans-serif');
  });

  it('should match snapshot', () => {
    expect({ theme, defaultTheme }).toMatchSnapshot();
  });
});
