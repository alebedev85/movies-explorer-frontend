import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ card, isSaved }) {

  const location = useLocation();

  return (
    <li className="card" >
      <div className='card_info'>
        <h2 className='card__name'>
          {card.nameRU}
        </h2>
        <p className='card__duration'>
          {Math.floor(card.duration / 60)}ч {card.duration - 60 * Math.floor(card.duration / 60)}м
        </p>
        {location.pathname === "/movies" &&
          <button className={
            `card__button
                button
                ${isSaved ? 'card__button_save-active' : 'card__button_save'}`
          }
            type='button' />
        }
        {location.pathname === "/saved-movies" &&
          <button className='card__button button card__button__delete'
            type='button' />
        }
      </div>
      <a href={card.trailerLink} className='card__link link' target="_blank" rel="noreferrer">
        <img className='card__poster' src={card.image} alt='Постер к фильму' />
      </a>

    </li>
  );
}

export default MoviesCard;