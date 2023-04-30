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

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: orange,
    secondary: green,
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <BusinessList />
      </ThemeProvider>
    </div>

  );
}

export default App;
