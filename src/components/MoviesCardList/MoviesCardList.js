import React from 'react';
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

import poster from '../../images/poster.png'

function MoviesCardList() {
  const card = {
    country: "Россия",
    director: "AAAAA",
    duration: 107,
    year: "2001",
    description: "Кино про дизайн",
    image: poster,
    trailerLink: "https://www.youtube.com/watch?v=5ovzC93EneA",
    thumbnail: poster,
    movieId: 111111,
    nameRU: "33 слова о дизайне",
    nameEN: "33 words about design"

  }
  return (
    <section className="card-list" aria-label="Картачки c фильмами">
      <MoviesCard card={card}/>
    </section>
  );
}

export default MoviesCardList;