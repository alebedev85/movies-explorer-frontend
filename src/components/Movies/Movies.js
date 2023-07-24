import React, { useState, useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { moviesApi } from '../../utils/MoviesApi'

function Movies() {
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    setCards(JSON.parse(localStorage.getItem('cards')));
    if (!cards.length) {
      moviesApi.getCards()
        .then((res) => {
          setCards(res);
          localStorage.setItem('cards', JSON.stringify(res))
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }, [])
  return (
    <main className="main">
      <SearchForm />
      {cards ? <MoviesCardList cards={cards.slice(0, 9)} /> : <Preloader />}
    </main>
  );
}

export default Movies;