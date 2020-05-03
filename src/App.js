import React, {Component} from 'react';
import './App.css';

import CharsList from './components/CharsList';
import logo from './images/logo.png';

class App extends Component {
  render() {
    return (
      <>
        <header className="header">
          <img src={logo} alt="Rick and Morty"/>
        </header>
        <CharsList />
      </>
    );
  }
}

export default App;
