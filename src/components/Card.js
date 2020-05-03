import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { char } = this.props;

    return (
      <div className="card" key={char.id}>
        <div className="card_image_container">
          <img src={char.image} alt={char.name} className="card__image"/>

          <div>
            <h3>{char.name}</h3>
            <p>{char.type}</p>
          </div>
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
          <span>{char.origin.name}</span>
        </div>
      </div>
    )
  }
}

export default Card;