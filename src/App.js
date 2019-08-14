import React, {Component} from 'react';
import './App.css';

import api from './api';

class App extends Component {
  state = {
    chars: []
  }

  componentDidMount() {
    this.loadCharacters();
  }
  
  loadCharacters = async () => {
    const res = await api.get('/character');

    this.setState({
      chars: res.data.results
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.chars.map(char => (
          <div className="card">
            <img key={char.id} src={char.image} alt={char.name} className="card__image"/>
            <h3>{char.name}</h3>
            <p>{char.species}</p>
            <p>{char.origin.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
