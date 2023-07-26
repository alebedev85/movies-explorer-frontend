import React, { useState, useEffect } from 'react';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { moviesApi } from '../../utils/MoviesApi';
import { useResize } from '../hooks/useResize';

function Movies() {

  const { width, isScreenS, isScreenM, isScreenL } = useResize(); //стейт для размера экрана

  const [cardsNumber, setCardsNumber] = useState({ first: 12, next: 3, }); //стейт для колличества карточек на экране
  const [isPreloader, setIsPreloader] = useState(false); //стейт состояния прелоудора
  const [beatfilmMmovies, setBeatfilmMmovies] = useState(JSON.parse(localStorage.getItem('beatfilmMmovies')) || {}); //стейт для всех карточек
  const [shownCardsNumber, setShownCardsNumber] = useState(cardsNumber.first); //стейт сколько картачек сейчас на экране
  const [cardsResalt, setCardsResalt] = useState(JSON.parse(localStorage.getItem('cardsResalt')) || {}); //стейт для окончательного списка карточек

  //проверка localStorage и получение карточек
  useEffect(() => {
    if (!beatfilmMmovies) {
      setIsPreloader(true);
      moviesApi.getCards()
        .then((res) => {
          setBeatfilmMmovies(res);
          localStorage.setItem('beatfilmMmovies', JSON.stringify(res));
        })
        .catch((err) => console.log(err))
        .finally(setIsPreloader(false));
    };
    if (!cardsResalt) {
      setCardsResalt(beatfilmMmovies);
    }
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
    setShownCardsNumber(cardsNumber.first)
  }, [cardsNumber])

  //обработчик нажатия кнопки ещё
  function handleNextCards() {
    setShownCardsNumber(shownCardsNumber + cardsNumber.next)
  };

  //проверка на короткометражку
  function isShort(status, movies) {
    return status ? movies.filter(movie => movie.duration <= 40) : movies
  }

  //обработчик поиска фильмов
  function handleSearchMovie(text, statusCheckbox) {
    const searchResalt = isShort(statusCheckbox, beatfilmMmovies).filter(movie => Object.values(movie)
      .some(value => typeof value === "string" ? value.includes(text) : value === text));
    setCardsResalt(searchResalt);
    localStorage.setItem('cardsResalt', JSON.stringify(searchResalt));
    localStorage.setItem('searchText', text);
    localStorage.setItem('statusCheckbox', statusCheckbox);
  };

  return (
    <main className="movies">
      <SearchForm
        onSearchMovie={handleSearchMovie}
        text={localStorage.getItem('searchText')}
        statusCheckbox={localStorage.getItem('statusCheckbox') === 'true' ? true : false}
      />
      {cardsResalt.length ? <MoviesCardList
        cards={cardsResalt.slice(0, shownCardsNumber)}
        onClick={handleNextCards}
        buttonVisibility={cardsResalt.length > shownCardsNumber}
      />
        :
        isPreloader? <Preloader /> : <>gdfgdgdgdf</>}
    </main>
  );
}

export default Movies;