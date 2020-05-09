import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import CharsList from './components/CharsList';

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
