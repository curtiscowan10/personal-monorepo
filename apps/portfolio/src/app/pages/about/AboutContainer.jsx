import React from 'react';
import About from './About';

const AboutContainer = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'Material-UI', level: 88 },
    { name: 'SCSS/CSS', level: 92 },
    { name: 'Git', level: 90 },
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description:
        'Leading frontend development projects using React, TypeScript, and modern web technologies.',
      type: 'work',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description:
        'Developed full-stack web applications using React, Node.js, and various databases.',
      type: 'work',
    },
    {
      title: 'Computer Science Degree',
      company: 'University',
      period: '2016 - 2020',
      description:
        'Bachelor of Science in Computer Science with focus on software engineering and web development.',
      type: 'education',
    },
  ];

  const interests = [
    'Web Development',
    'UI/UX Design',
    'Open Source',
    'Machine Learning',
    'Photography',
    'Travel',
    'Music',
    'Gaming',
  ];

  return (
    <About skills={skills} experiences={experiences} interests={interests} />
  );
};

export default AboutContainer;
