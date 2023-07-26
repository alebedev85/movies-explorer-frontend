import React, { useState, useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { moviesApi } from '../../utils/MoviesApi';
import { useResize } from '../hooks/useResize';

function Movies() {

  const { width, isScreenS, isScreenM, isScreenL } = useResize(); //стейт для размера экрана

  const [cardsNumber, setCardsNumber] = useState({ first: 12, next: 3, }); //стейт для колличества карточек на экране
  const [isPreloader, setIsPreloader] = useState(false); //стейт состояния прелоудора
  const [beatfilmMmovies, setBeatfilmMmovies] = useState([]); //стейт для всех карточек
  const [displayedCards, setDisplayedCards] = useState(cardsNumber.first); //стейт для показываемых карточек

  //проверка localStorage и получение карточек
  useEffect(() => {
    setBeatfilmMmovies(JSON.parse(localStorage.getItem('beatfilmMmovies')));
    if (!beatfilmMmovies.length) {
      setIsPreloader(true);
      moviesApi.getCards()
        .then((res) => {
          setBeatfilmMmovies(res);
          localStorage.setItem('beatfilmMmovies', JSON.stringify(res));
        })
        .catch((err) => console.log(err))
        .finally(setIsPreloader(false));
    };
  }, [])

  //зависимость колличества отображаемых карточек от размера экрана
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

  //определение колличества показываемых карточек
  useEffect(() => {
    setDisplayedCards(cardsNumber.first)
  }, [cardsNumber])

  //обработчик нажатия кнопки ещё
  function handleNextCards() {
    setDisplayedCards(displayedCards + cardsNumber.next)
  };

  //обработчик поиска фильмов
  function handleSearchMovie(text) {
    const searchResalt = beatfilmMmovies.filter(card => Object.values(card)
      .some(value => typeof value === "string" ? value.includes(text) : value === text))
    console.log(searchResalt)

  };

  return (
    <main className="main">
      <SearchForm onSearchMovie={handleSearchMovie} />
      {beatfilmMmovies ? <MoviesCardList
        cards={beatfilmMmovies.slice(0, displayedCards)}
        onClick={handleNextCards}
        buttonVisibility={beatfilmMmovies.length > displayedCards}
      />
        :
        <Preloader />}
    </main>
  );
}

export default Movies;