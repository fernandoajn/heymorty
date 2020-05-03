import React, { Component } from 'react';

import Card from './Card';

import InfiniteScroll from 'react-infinite-scroll-component';
import api from '../services/api';

class CharsList extends Component {
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
      <InfiniteScroll 
          className="App"
          dataLength={this.state.chars.length}
          next={this.loadCharacters}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          >
          {this.state.chars.map(char => <Card char={char}/>)}
        </InfiniteScroll>
    )
  }
}

export default CharsList;