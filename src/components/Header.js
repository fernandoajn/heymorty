import React, {Component} from 'react';

import logo from '../images/logo.png';

class App extends Component {
  render() {
    return (
        <header className="header">
          <img src={logo} alt="Rick and Morty"/>
        </header>
    );
  }
}

export default App;
