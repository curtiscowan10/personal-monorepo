import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  Code as CodeIcon,
} from '@mui/icons-material';
import './Projects.scss';

const Projects = ({ projects, featuredProjects, otherProjects }) => {
  const ProjectCard = ({ project, featured = false }) => (
    <Card
      className={`project-card ${featured ? 'project-card--featured' : ''}`}
    >
      <CardMedia component="div" className="project-card__media">
        <CodeIcon className="project-card__media-icon" />
      </CardMedia>
      <CardContent className="project-card__content">
        <Box className="project-card__header">
          <Typography
            variant="h6"
            component="h3"
            className="project-card__title"
          >
            {project.title}
          </Typography>
          {featured && (
            <Chip
              label="Featured"
              color="primary"
              size="small"
              className="project-card__featured-chip"
            />
          )}
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          paragraph
          className="project-card__description"
        >
          {project.description}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          className="project-card__tech-stack"
        >
          {project.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              variant="outlined"
              className="project-card__tech-stack-chip"
            />
          ))}
        </Stack>

        <Box className="project-card__actions">
          <Button
            variant="outlined"
            size="small"
            startIcon={<GitHubIcon />}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </Button>
          <Button
            variant="contained"
            size="small"
            startIcon={<LaunchIcon />}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="lg" className="projects">
      {/* Header Section */}
      <Box className="projects__header">
        <Typography
          variant="h2"
          component="h1"
          className="custom-title"
          gutterBottom
        >
          My Projects
        </Typography>
        <Typography variant="h5" className="projects__subtitle">
          A showcase of my recent work and personal projects that demonstrate my
          skills in modern web development technologies.
        </Typography>
      </Box>

      {/* Featured Projects */}
      <Box className="projects__featured">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          className="projects__featured-title"
        >
          Featured Projects
        </Typography>
        <Grid container spacing={4}>
          {featuredProjects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ProjectCard project={project} featured={true} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Other Projects */}
      <Box>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          className="projects__other-title"
        >
          Other Projects
        </Typography>
        <Grid container spacing={3}>
          {otherProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box className="projects__cta">
        <Typography variant="h4" component="h2" gutterBottom>
          Interested in Working Together?
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          className="projects__cta-subtitle"
        >
          I'm always open to discussing new opportunities and exciting projects.
        </Typography>
        <Button
          variant="contained"
          size="large"
          className="custom-primary"
          href="/contact"
        >
          Get In Touch
        </Button>
      </Box>
    </Container>
  );
};

export default Projects;
