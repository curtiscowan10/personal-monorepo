import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from '@personal-monorepo/shared-theme';
import Layout from '../components/Layout';
import HomeContainer from './pages/home/HomeContainer';
import AboutContainer from './pages/about/AboutContainer';
import ProjectsContainer from './pages/projects/ProjectsContainer';
import ContactContainer from './pages/contact/ContactContainer';
import { ROUTES } from '../constants/routes';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomeContainer />} />
            <Route path={ROUTES.ABOUT} element={<AboutContainer />} />
            <Route path={ROUTES.PROJECTS} element={<ProjectsContainer />} />
            <Route path={ROUTES.CONTACT} element={<ContactContainer />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
