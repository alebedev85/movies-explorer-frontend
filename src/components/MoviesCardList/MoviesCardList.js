import React from 'react';
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards, onClick, buttonVisibility, onSaveClick }) {

  return (
    <section className="card-list" aria-label="Картачки c фильмами">
      <ul className='card-list__container'>
        {cards.map((movie, index) => (
          <MoviesCard
          key={movie._id || movie.id}
          movie={movie}
          onSaveClick={onSaveClick}
          isSaved = {false}
          />
        ))}
      </ul>
      {buttonVisibility && (
          <button className='card-list__next-button button' onClick={onClick}>
            Еще
          </button>
        )}
    </section>
  );
}

export default MoviesCardList;