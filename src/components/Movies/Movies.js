import React, { useState, useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { moviesApi } from '../../utils/MoviesApi';
import { useResize } from '../hooks/useResize';

function Movies() {
  // const numberDisplayCards = {
  //   first: 12,
  //   next: 3,
  // };

  const { width, isScreenS, isScreenM, isScreenL } = useResize();


  const [cardsNumber, setCardsNumber] = useState({
    first: 12,
    next: 3,
  });
  const [isPreloader, setIsPreloader] = useState(false);
  const [cards, setCards] = useState([]);
  const [displayedCards, setDisplayedCards] = useState(cardsNumber.first);

  useEffect(() => {
    setCards(JSON.parse(localStorage.getItem('cards')));
    if (!cards.length) {
      setIsPreloader(true);
      moviesApi.getCards()
        .then((res) => {
          setCards(res);
          localStorage.setItem('cards', JSON.stringify(res));
        })
        .catch((err) => console.log(err))
        .finally(setIsPreloader(false));
    };
  }, [])

  useEffect(() => {
    if (isScreenS) {
      setCardsNumber({
        first: 5,
        next: 1,
      })
    } else if (isScreenM) {
      setCardsNumber({
        first: 8,
        next: 2,
      })
    } else if (isScreenL) {
      setCardsNumber({
        first: 12,
        next: 3,
      })
    }
  }, [width])

  useEffect(() => {
    setDisplayedCards(cardsNumber.first)
  }, [cardsNumber])

  function handleAddNewCards() {
    setDisplayedCards(displayedCards + cardsNumber.next)
  };

  return (
    <main className="main">
      <SearchForm />
      {cards ? <MoviesCardList
        cards={cards.slice(0, displayedCards)}
        onClick={handleAddNewCards}
        buttonVisibility={cards.length > displayedCards}
      />
        :
        <Preloader />}
    </main>
  );
}

export default Movies;