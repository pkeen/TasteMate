import logo from './logo.svg';
import './App.css';
import React from 'react';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import Logo from './components/logo';
import { ThemeProvider, createTheme  } from '@mui/material';
import { green, orange } from '@mui/material/colors';

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
        <Logo />
        <SearchBar />
        <BusinessList />
      </ThemeProvider>
    </div>

  );
}

export default App;
