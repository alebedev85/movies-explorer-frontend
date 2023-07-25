import React, { useState, useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { moviesApi } from '../../utils/MoviesApi'

function Movies() {
  const numberDisplayCards = {
    first: 12,
    next: 3,
  };

  const [cards, setCards] = useState([]);
  const [displayedCards, setDisplayedCards] = useState([]);

  useEffect(() => {
    setCards(JSON.parse(localStorage.getItem('cards')));
    if (!cards.length) {
      moviesApi.getCards()
        .then((res) => {
          setCards(res);
          localStorage.setItem('cards', JSON.stringify(res));
        })
        .catch((err) => console.log(err));
    };
    setDisplayedCards(cards.slice(0, displayedCards.first))
  }, [])
  
  return (
    <main className="main">
      <SearchForm />
      {cards ? <MoviesCardList cards={cards.slice(0, 9)} /> : <Preloader />}
    </main>
  );
}

export default Movies;