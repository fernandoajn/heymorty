import React, { Component } from 'react';

import api from '../services/api';

class Card extends Component {
  state = {
    origin: null,
    showOrigin: true
  }

  handleLocation = async () => {
    const { origin } = this.props.char;

    const locationId = origin.url.split('/')[5];

    if (!this.state.origin) {
      const response = await api.get(`/location/${locationId}`);

      this.setState({
        origin: response.data
      })
    }
    
    this.setState(prevState => ({
      // showOrigin: !prevState.showOrigin
    }));
  }

  render() {
    const { char } = this.props;
    const { origin } = this.state; 

    return (
      <div className="card" key={char.id}>
        <div className="card_image_container">
          <img src={char.image} alt={char.name} className="card__image"/>

          <a href={`https://rickandmorty.fandom.com/wiki/${char.name}`}>
            <div>
              <h3>{char.name}</h3>
              <p>{char.type}</p>
            </div>
          </a>
        </div>

        <div className="card__info">
          <div>
            <span>Status: </span>
            <span>{char.status}</span>
          </div>
          <div>
            <span>Gender: </span>
            <span>{char.gender}</span>
          </div>
          <div>
            <span>Species: </span>
            <span>{char.species}</span>
          </div>
        </div>

        <div className="card_footer">
          <button type="button" onClick={this.handleLocation}>Get Location</button>
              <div className="card_footer__info">
                <div>
                  <span>Origin: </span>
                  <span>{char.origin.name}</span>
                </div>
            
                <div>
                  <span>Dimension: </span>
                  <span>{origin && origin.dimension}</span>
                </div>

                <div>
                <span>Type: </span>
                <span>{origin && origin.type}</span>
              </div>
              </div>
        </div>
      </div>
    )
  }
}

export default Card;