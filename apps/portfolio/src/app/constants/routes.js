/**
 * Route path constants for the portfolio application
 */
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  CONTACT: '/contact',
};

/**
 * Route configuration with metadata
 */
export const ROUTE_CONFIG = {
  [ROUTES.HOME]: {
    path: ROUTES.HOME,
    name: 'Home',
    title: 'Home',
  },
  [ROUTES.ABOUT]: {
    path: ROUTES.ABOUT,
    name: 'About',
    title: 'About Me',
  },
  [ROUTES.PROJECTS]: {
    path: ROUTES.PROJECTS,
    name: 'Projects',
    title: 'My Projects',
  },
  [ROUTES.CONTACT]: {
    path: ROUTES.CONTACT,
    name: 'Contact',
    title: 'Contact Me',
  },
};
