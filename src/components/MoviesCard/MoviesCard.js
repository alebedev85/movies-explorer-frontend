import React from 'react';
import './MoviesCard.css';

function MoviesCard({ card }) {
  return (
    <li className="card" >
      <div className='card_info'>
        <h2 className='card__name'>
          {card.nameRU}
        </h2>
        <p className='card__duration'>
          {Math.floor(card.duration / 60)}ч {card.duration - 60 * Math.floor(card.duration / 60)}м
        </p>
        <button className='card__button
        card__button_save
        card__button_save-active
        button'
          type='button' />
      </div>
      <a href={card.trailerLink} className='card__link link' target="_blank" rel="noreferrer">
        <img className='card__poster' src={card.image} alt='Постер к фильму' />
      </a>

    </li>
  );
}

export default MoviesCard;