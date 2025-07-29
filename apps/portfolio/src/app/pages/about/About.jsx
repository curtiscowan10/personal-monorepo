import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
  Avatar,
  LinearProgress,
  Chip,
  Stack,
} from '@mui/material';
import { School as SchoolIcon, Work as WorkIcon } from '@mui/icons-material';
import './About.scss';

const About = ({ skills, experiences, interests }) => {
  const getExperienceIcon = (type) => {
    return type === 'work' ? (
      <WorkIcon className="icon-work" />
    ) : (
      <SchoolIcon className="icon-school" />
    );
  };

  return (
    <Container maxWidth="lg" className="about-container">
      {/* Header Section */}
      <Box className="about-header">
        <Avatar className="about-avatar">A</Avatar>
        <Typography
          variant="h2"
          component="h1"
          className="custom-title"
          gutterBottom
        >
          About Me
        </Typography>
        <Typography variant="h5" className="about-subtitle">
          I'm a passionate developer who loves creating beautiful, functional
          web applications that solve real-world problems and provide
          exceptional user experiences.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Bio Section */}
        <Grid item xs={12} md={6}>
          <Card className="bio-card">
            <CardContent className="bio-content">
              <Typography variant="h4" gutterBottom>
                My Story
              </Typography>
              <Typography variant="body1" paragraph>
                With over 4 years of experience in web development, I've had the
                privilege of working on diverse projects ranging from small
                business websites to large-scale enterprise applications.
              </Typography>
              <Typography variant="body1" paragraph>
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest technologies and best practices. My
                approach combines technical expertise with creative
                problem-solving to deliver solutions that not only work well but
                also provide great user experiences.
              </Typography>
              <Typography variant="body1">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying outdoor
                activities.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Skills Section */}
        <Grid item xs={12} md={6}>
          <Card className="skills-card">
            <CardContent className="skills-content">
              <Typography variant="h4" gutterBottom>
                Technical Skills
              </Typography>
              <Box className="skills-list">
                {skills.map((skill) => (
                  <Box key={skill.name} className="skill-item">
                    <Box className="skill-header">
                      <Typography variant="body1" fontWeight="medium">
                        {skill.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      className="skill-progress"
                    />
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Experience Timeline */}
      <Box className="experience-section">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          className="experience-title"
        >
          Experience & Education
        </Typography>
        <Grid container spacing={3}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="experience-card">
                <CardContent className="experience-content">
                  <Box className="experience-icon">
                    {getExperienceIcon(exp.type)}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {exp.period}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="experience-description"
                  >
                    {exp.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Interests Section */}
      <Box className="interests-section">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          className="interests-title"
        >
          Interests & Hobbies
        </Typography>
        <Card className="interests-card">
          <CardContent className="interests-content">
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              flexWrap="wrap"
              className="interests-chips"
            >
              {interests.map((interest) => (
                <Chip
                  key={interest}
                  label={interest}
                  variant="outlined"
                  color="secondary"
                  className="interest-chip"
                />
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default About;
