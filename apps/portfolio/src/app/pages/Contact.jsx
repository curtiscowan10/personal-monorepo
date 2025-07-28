import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
  TextField,
  Button,
  IconButton,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false);

  const contactInfo = [
    {
      icon: <EmailIcon className="icon" />,
      title: 'Email',
      value: 'hello@portfolio.com',
      link: 'mailto:hello@portfolio.com',
    },
    {
      icon: <PhoneIcon className="icon" />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <LocationIcon className="icon" />,
      title: 'Location',
      value: 'San Francisco, CA',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/portfolio',
      color: '#0077b5',
    },
    {
      icon: <GitHubIcon />,
      name: 'GitHub',
      url: 'https://github.com/portfolio',
      color: '#333',
    },
    {
      icon: <TwitterIcon />,
      name: 'Twitter',
      url: 'https://twitter.com/portfolio',
      color: '#1da1f2',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <Container maxWidth="lg" className="contact-container">
      {/* Header Section */}
      <Box className="contact-header">
        <Typography variant="h2" component="h1" className="custom-title" gutterBottom>
          Get In Touch
        </Typography>
        <Typography
          variant="h5"
          className="contact-subtitle"
        >
          I'd love to hear from you! Whether you have a project in mind,
          want to collaborate, or just want to say hello, feel free to reach out.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <Card className="contact-form-card">
            <CardContent className="contact-form-content">
              <Typography variant="h4" gutterBottom className="form-title">
                Send Me a Message
              </Typography>
              
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      multiline
                      rows={6}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<SendIcon />}
                      className="submit-button"
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Box className="contact-sidebar">
            {/* Contact Details */}
            <Card className="contact-info-card">
              <CardContent className="contact-info-content">
                <Typography variant="h5" gutterBottom className="info-title">
                  Contact Information
                </Typography>
                
                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    className={`contact-item ${info.link ? 'clickable' : ''}`}
                    {...(info.link && {
                      component: 'a',
                      href: info.link,
                    })}
                  >
                    <Box className="contact-icon">
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        {info.title}
                      </Typography>
                      <Typography variant="body1">
                        {info.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="social-links-card">
              <CardContent className="social-content">
                <Typography variant="h5" gutterBottom className="social-title">
                  Follow Me
                </Typography>
                
                <Box className="social-buttons">
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      component="a"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-button ${social.name.toLowerCase()}`}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="availability-card">
              <CardContent className="availability-content">
                <Typography variant="h5" gutterBottom className="availability-title">
                  Availability
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  I'm currently available for freelance projects and full-time opportunities.
                  I typically respond to messages within 24 hours.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>

      {/* Success Alert */}
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          className="success-alert"
        >
          Thank you for your message! I'll get back to you soon.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
