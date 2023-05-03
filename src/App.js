import logo from './logo.svg';
import './App.css';
import React from 'react';
import BusinessList from './components/BusinessList';
import Header from './components/Header';
import { ThemeProvider, createTheme  } from '@mui/material';
import { green, orange } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';
import {Container} from '@mui/material';

/* THEME */
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: orange,
    secondary: green,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1103,
      lg: 1300,
      xl: 1600
    }
  }
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
/* THEME */

/* DATA */
const businessInfo = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90 
}

const businessArray = [...Array(6)].map( (x) => {
  return businessInfo;
});
/* DATA */

function App() {
  return (
    <Container className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <BusinessList businessArray={businessArray}/>
      </ThemeProvider>
    </Container>

  );
}

export default App;
