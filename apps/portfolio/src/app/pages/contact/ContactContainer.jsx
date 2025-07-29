import React, { useState } from 'react';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
} from '@mui/icons-material';
import Contact from './Contact';

const ContactContainer = () => {
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
    setFormData((prev) => ({
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
    <Contact
      formData={formData}
      showAlert={showAlert}
      contactInfo={contactInfo}
      socialLinks={socialLinks}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      onCloseAlert={handleCloseAlert}
    />
  );
};

export default ContactContainer;
