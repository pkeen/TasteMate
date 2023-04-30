import logo from './logo.svg';
import './App.css';
import React from 'react';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import Logo from './components/logo';

function App() {
  return (
    <div className="App">
      <Logo />
      <SearchBar />
      <BusinessList />
    </div>

  );
}

export default App;
