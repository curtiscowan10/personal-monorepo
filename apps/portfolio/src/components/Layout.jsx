import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import './Layout.scss';

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box className="layout__mobile-drawer">
      <Box className="layout__mobile-drawer-header">
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navigationItems.map((item) => (
          <ListItem
            key={item.path}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            className={`layout__mobile-drawer-nav-item ${
              location.pathname === item.path
                ? 'layout__mobile-drawer-nav-item--active'
                : ''
            }`}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box className="layout">
      <AppBar position="sticky" className="layout__appbar" elevation={0}>
        <Toolbar className="layout__appbar-toolbar">
          <Typography
            variant="h6"
            component={Link}
            to="/"
            className="layout__appbar-logo"
          >
            Portfolio
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box className="layout__desktop-nav">
              {navigationItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  className={`layout__nav-button ${
                    location.pathname === item.path
                      ? 'layout__nav-button--active'
                      : ''
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>

      <Container component="main" maxWidth="lg" className="layout__main">
        {children}
      </Container>

      <Box component="footer" className="layout__footer">
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Portfolio. Built with React, Material-UI,
          and NX.
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
