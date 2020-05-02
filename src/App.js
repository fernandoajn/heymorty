import React, {Component} from 'react';
import './App.css';

import api from './services/api';
import InfiniteScroll from 'react-infinite-scroll-component';

class App extends Component {
  state = {
    chars: [],
    page: 1
  }
  
  loadCharacters = async () => {
    const res = await api.get('/character', {
      params: {
        page: this.state.page,
      }
    });
    
    console.log(res.data);
    
    this.setState(prevState => ({
      chars: prevState.chars.concat(Array.from(res.data.results)),
      page: prevState.page + 1
    }));
  }

  componentDidMount() {
    this.loadCharacters();
  }

  render() {
    return (
      // <div className="App">
        <InfiniteScroll className="App"
          dataLength={this.state.chars.length}
          next={this.loadCharacters}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          >
          {this.state.chars.map(char => (
            <div className="card" key={char.id}>
              <img  src={char.image} alt={char.name} className="card__image"/>
              <h3>{char.name}</h3>
              <p>{char.species}</p>
              <p>{char.origin.name}</p>
            </div>
          ))}
          {/* <button type="button" onClick={this.loadCharacters}>More</button> */}
        </InfiniteScroll>
      // </div>
    );
  }
}

export default App;
