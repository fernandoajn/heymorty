import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import CharsList from './components/CharsList';
import logo from './images/logo.png';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <CharsList />
      </>
    );
  }
}

export default App;
