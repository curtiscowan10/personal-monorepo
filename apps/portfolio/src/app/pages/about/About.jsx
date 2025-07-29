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
      <WorkIcon className="about__experience-card-icon about__experience-card-icon--work" />
    ) : (
      <SchoolIcon className="about__experience-card-icon about__experience-card-icon--school" />
    );
  };

  return (
    <Container maxWidth="lg" className="about">
      {/* Header Section */}
      <Box className="about__header">
        <Avatar className="about__avatar">A</Avatar>
        <Typography
          variant="h2"
          component="h1"
          className="custom-title"
          gutterBottom
        >
          About Me
        </Typography>
        <Typography variant="h5" className="about__subtitle">
          I'm a passionate developer who loves creating beautiful, functional
          web applications that solve real-world problems and provide
          exceptional user experiences.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Bio Section */}
        <Grid item xs={12} md={6}>
          <Card className="about__bio-card">
            <CardContent className="about__bio-card-content">
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
          <Card className="about__skills-card">
            <CardContent className="about__skills-card-content">
              <Typography variant="h4" gutterBottom>
                Technical Skills
              </Typography>
              <Box className="about__skills-card-list">
                {skills.map((skill) => (
                  <Box key={skill.name} className="about__skill-item">
                    <Box className="about__skill-item-header">
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
                      className="about__skill-item-progress"
                    />
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Experience Timeline */}
      <Box className="about__experience">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          className="about__experience-title"
        >
          Experience & Education
        </Typography>
        <Grid container spacing={3}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="about__experience-card">
                <CardContent className="about__experience-card-content">
                  <Box className="about__experience-card-icon">
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
                    className="about__experience-card-description"
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
      <Box className="about__interests">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          className="about__interests-title"
        >
          Interests & Hobbies
        </Typography>
        <Card className="about__interests-card">
          <CardContent className="about__interests-card-content">
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              flexWrap="wrap"
              className="about__interests-card-chips"
            >
              {interests.map((interest) => (
                <Chip
                  key={interest}
                  label={interest}
                  variant="outlined"
                  color="secondary"
                  className="about__interests-card-chip"
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
