import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie, isSaved, onSaveClick }) {

  // console.log(movie)

  const location = useLocation();

  const card = {
    nameRU: movie.nameRU,
    duration: movie.duration,
    image: `https://api.nomoreparties.co/${movie.image.url}`
  };

  console.log(card)

  function handlerSaveButton() {
    onSaveClick(card)
  }

  return (
    <li className="card" >
      <div className='card__info'>
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
            type='button' onClick={handlerSaveButton} />
        }
        {location.pathname === "/saved-movies" &&
          <button className='card__button button card__button_delete'
            type='button' />
        }
      </div>
      <a href={card.trailerLink} className='card__link link' target="_blank" rel="noreferrer">
        <img className='card__poster' src={card.image} alt={`Постер ${card.nameRU}`} />
      </a>

    </li>
  );
}

export default MoviesCard;