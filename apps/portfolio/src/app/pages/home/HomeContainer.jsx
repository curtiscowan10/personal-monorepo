import React from 'react';
import {
  Brush as DesignIcon,
  Code as CodeIcon,
  Speed as SpeedIcon,
} from '@mui/icons-material';
import Home from './Home';

const HomeContainer = () => {
  const skills = [
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

  const features = [
    {
      icon: <CodeIcon className="feature-icon-code" />,
      title: 'Clean Code',
      description:
        'Writing maintainable, scalable, and well-documented code following best practices.',
    },
    {
      icon: <DesignIcon className="feature-icon-design" />,
      title: 'Modern Design',
      description:
        'Creating beautiful, intuitive user interfaces with attention to detail and user experience.',
    },
    {
      icon: <SpeedIcon className="feature-icon-speed" />,
      title: 'Performance',
      description:
        'Optimizing applications for speed, accessibility, and cross-browser compatibility.',
    },
  ];

  return <Home skills={skills} features={features} />;
};

export default HomeContainer;
