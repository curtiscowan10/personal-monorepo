import React from 'react';
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
import { Send as SendIcon } from '@mui/icons-material';
import './Contact.scss';

const Contact = ({
  formData,
  showAlert,
  contactInfo,
  socialLinks,
  onInputChange,
  onSubmit,
  onCloseAlert,
}) => {
  return (
    <Container maxWidth="lg" className="contact">
      {/* Header Section */}
      <Box className="contact__header">
        <Typography
          variant="h2"
          component="h1"
          className="custom-title"
          gutterBottom
        >
          Get In Touch
        </Typography>
        <Typography variant="h5" className="contact__subtitle">
          I'd love to hear from you! Whether you have a project in mind, want to
          collaborate, or just want to say hello, feel free to reach out.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <Card className="contact__form">
            <CardContent className="contact__form-content">
              <Typography
                variant="h4"
                gutterBottom
                className="contact__form-title"
              >
                Send Me a Message
              </Typography>

              <Box component="form" onSubmit={onSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={onInputChange}
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
                      onChange={onInputChange}
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
                      onChange={onInputChange}
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
                      onChange={onInputChange}
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
                      className="contact__form-submit"
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
          <Box className="contact__sidebar">
            {/* Contact Details */}
            <Card className="contact__info-card">
              <CardContent className="contact__info-card-content">
                <Typography
                  variant="h5"
                  gutterBottom
                  className="contact__info-card-title"
                >
                  Contact Information
                </Typography>

                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    className={`contact__contact-item ${
                      info.link ? 'contact__contact-item--clickable' : ''
                    }`}
                    {...(info.link && {
                      component: 'a',
                      href: info.link,
                    })}
                  >
                    <Box className="contact__contact-icon">{info.icon}</Box>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        {info.title}
                      </Typography>
                      <Typography variant="body1">{info.value}</Typography>
                    </Box>
                  </Box>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="contact__social-card">
              <CardContent className="contact__social-card-content">
                <Typography
                  variant="h5"
                  gutterBottom
                  className="contact__social-card-title"
                >
                  Follow Me
                </Typography>

                <Box className="contact__social-buttons">
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      component="a"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`contact__social-button contact__social-button--${social.name.toLowerCase()}`}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="contact__availability-card">
              <CardContent className="contact__availability-card-content">
                <Typography
                  variant="h5"
                  gutterBottom
                  className="contact__availability-card-title"
                >
                  Availability
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  I'm currently available for freelance projects and full-time
                  opportunities. I typically respond to messages within 24
                  hours.
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
        onClose={onCloseAlert}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={onCloseAlert}
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
