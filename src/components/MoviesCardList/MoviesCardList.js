import React from 'react';
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards }) {
  const testCard = {
    country: "Россия",
    director: "AAAAA",
    duration: 107,
    year: "2001",
    description: "Кино про дизайн",
    image: '',
    trailerLink: "https://www.youtube.com/watch?v=5ovzC93EneA",
    thumbnail: '',
    movieId: 111111,
    nameRU: "33 слова о дизайне",
    nameEN: "33 words about design"

  }

  return (
    <section className="card-list" aria-label="Картачки c фильмами">
      <ul className='card-list__container'>
        {cards.map((card, index) => (
          <MoviesCard
          key={card.id}
          card={card}
          isSaved = {index % 2 === 0}
          />
        ))}
      </ul>
      {true && (
          <button className='card-list__next-button button'>
            Еще
          </button>
        )}
    </section>
  );
}

export default MoviesCardList;