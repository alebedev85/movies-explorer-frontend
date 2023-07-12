import React from 'react';
import './MoviesCard.css';

function MoviesCard({ card }) {
  return (
    <article className="card" >
      <a href={card.trailerLink} className='card__link link' target="_blank" rel="noreferrer">
        <img className='card__poster' src={card.image} alt='Постер к фильму' />
      </a>
      <h2 className='card__name'>
        {card.nameRU}
      </h2>
      <p className='card__duration'>
        {card.duration}
      </p>
      <button className='card__button
        card__button_save
        card__button_save-active
        button'
        type='button' />
    </article>
  );
}

export default MoviesCard;