import logo from './logo.svg';
import './App.css';
import React from 'react';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import Title from './components/Title';
import Header from './components/Header';
import { ThemeProvider, createTheme  } from '@mui/material';
import { green, orange } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';
import {Container} from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: orange,
    secondary: green,
  },
})

theme.typography.h1 = {
    fontSize: '1.4rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3.2rem',
    },
}

function App() {
  return (
    <Container className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <BusinessList />
      </ThemeProvider>
    </Container>

  );
}

export default App;
