import { ROUTES, ROUTE_CONFIG } from './routes';

describe('routes constants', () => {
  describe('ROUTES', () => {
    it('should export correct route paths', () => {
      expect(ROUTES.HOME).toBe('/');
      expect(ROUTES.ABOUT).toBe('/about');
      expect(ROUTES.PROJECTS).toBe('/projects');
      expect(ROUTES.CONTACT).toBe('/contact');
    });

    it('should have all required routes defined', () => {
      expect(ROUTES).toHaveProperty('HOME');
      expect(ROUTES).toHaveProperty('ABOUT');
      expect(ROUTES).toHaveProperty('PROJECTS');
      expect(ROUTES).toHaveProperty('CONTACT');
    });

    it('should have string values for all routes', () => {
      Object.values(ROUTES).forEach((route) => {
        expect(typeof route).toBe('string');
        expect(route.length).toBeGreaterThan(0);
      });
    });

    it('should have unique route paths', () => {
      const routeValues = Object.values(ROUTES);
      const uniqueValues = [...new Set(routeValues)];
      expect(routeValues).toHaveLength(uniqueValues.length);
    });
  });

  describe('ROUTE_CONFIG', () => {
    it('should have configuration for all routes', () => {
      Object.keys(ROUTES).forEach((routeKey) => {
        const routePath = ROUTES[routeKey];
        expect(ROUTE_CONFIG).toHaveProperty(routePath);
      });
    });

    it('should have correct home route configuration', () => {
      const homeConfig = ROUTE_CONFIG[ROUTES.HOME];
      expect(homeConfig).toEqual({
        path: '/',
        name: 'Home',
        title: 'Home',
      });
    });

    it('should have correct about route configuration', () => {
      const aboutConfig = ROUTE_CONFIG[ROUTES.ABOUT];
      expect(aboutConfig).toEqual({
        path: '/about',
        name: 'About',
        title: 'About Me',
      });
    });

    it('should have correct projects route configuration', () => {
      const projectsConfig = ROUTE_CONFIG[ROUTES.PROJECTS];
      expect(projectsConfig).toEqual({
        path: '/projects',
        name: 'Projects',
        title: 'My Projects',
      });
    });

    it('should have correct contact route configuration', () => {
      const contactConfig = ROUTE_CONFIG[ROUTES.CONTACT];
      expect(contactConfig).toEqual({
        path: '/contact',
        name: 'Contact',
        title: 'Contact Me',
      });
    });

    it('should have consistent paths between ROUTES and ROUTE_CONFIG', () => {
      Object.entries(ROUTES).forEach(([key, path]) => {
        expect(ROUTE_CONFIG[path].path).toBe(path);
      });
    });

    it('should have all required properties for each route config', () => {
      Object.values(ROUTE_CONFIG).forEach((config) => {
        expect(config).toHaveProperty('path');
        expect(config).toHaveProperty('name');
        expect(config).toHaveProperty('title');
        expect(typeof config.path).toBe('string');
        expect(typeof config.name).toBe('string');
        expect(typeof config.title).toBe('string');
      });
    });

    it('should match snapshot', () => {
      expect({ ROUTES, ROUTE_CONFIG }).toMatchSnapshot();
    });
  });
});
