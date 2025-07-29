import React from 'react';
import Projects from './Projects';

const ProjectsContainer = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Material-UI'],
      githubUrl: 'https://github.com/example/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
      featured: true,
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Firebase', 'Material-UI', 'React DnD'],
      githubUrl: 'https://github.com/example/taskmanager',
      liveUrl: 'https://taskmanager-demo.com',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description:
        'A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful visualizations.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'SCSS'],
      githubUrl: 'https://github.com/example/weather',
      liveUrl: 'https://weather-demo.com',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website built with React and Material-UI, featuring smooth animations and optimized performance.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Material-UI', 'Framer Motion', 'Vite'],
      githubUrl: 'https://github.com/example/portfolio',
      liveUrl: 'https://portfolio-demo.com',
      featured: false,
    },
    {
      title: 'Blog Platform',
      description:
        'A content management system for bloggers with markdown support, SEO optimization, and social media integration.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Next.js', 'Prisma', 'PostgreSQL'],
      githubUrl: 'https://github.com/example/blog',
      liveUrl: 'https://blog-demo.com',
      featured: false,
    },
    {
      title: 'Chat Application',
      description:
        'Real-time chat application with private messaging, group chats, file sharing, and emoji support.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Socket.io', 'Node.js', 'Express'],
      githubUrl: 'https://github.com/example/chat',
      liveUrl: 'https://chat-demo.com',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <Projects
      projects={projects}
      featuredProjects={featuredProjects}
      otherProjects={otherProjects}
    />
  );
};

export default ProjectsContainer;
