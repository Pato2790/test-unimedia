import React from 'react';
import { Typography, Box, CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from './Themes/theme';
import Routes from './Router/Router';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography component="div">
        <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h2.fontSize" m={3}>
          Unimedia Test
        </Box>
      </Typography>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
