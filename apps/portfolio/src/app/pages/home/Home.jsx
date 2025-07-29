import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Container,
  Avatar,
  Chip,
  Stack,
} from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = ({ skills, features }) => {
  return (
    <Container maxWidth="lg" className="home">
      {/* Hero Section */}
      <Box className="home__hero">
        <Avatar className="home__hero-avatar">P</Avatar>

        <Typography
          variant="h2"
          component="h1"
          className="custom-title"
          gutterBottom
        >
          Welcome to My Portfolio
        </Typography>

        <Typography variant="h5" className="home__hero-subtitle">
          Full-Stack Developer passionate about creating exceptional web
          experiences with modern technologies and clean, efficient code.
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          className="home__hero-buttons"
        >
          <Button
            variant="contained"
            size="large"
            className="custom-primary"
            component={Link}
            to="/projects"
            endIcon={<ArrowForwardIcon />}
          >
            View My Work
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            to="/contact"
          >
            Get In Touch
          </Button>
        </Stack>

        <Box className="home__skills">
          <Typography variant="h6" gutterBottom>
            Technologies I Work With
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            flexWrap="wrap"
            className="home__skills-container"
          >
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                color="primary"
                className="home__skills-chip"
              />
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Features Section */}
      <Box className="home__features">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          className="home__features-title"
        >
          What I Bring to the Table
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="home__feature-card">
                <CardContent className="home__feature-card-content">
                  <Box className="home__feature-card-icon home__feature-card-icon--code">
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box className="home__cta">
        <Typography variant="h4" component="h2" gutterBottom>
          Ready to Start Your Next Project?
        </Typography>
        <Typography variant="h6" className="home__cta-subtitle">
          Let's work together to bring your ideas to life
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/contact"
          className="home__cta-button"
        >
          Start a Conversation
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
