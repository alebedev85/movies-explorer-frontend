import React, { useState, useEffect } from 'react';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import NotFoundSearch from '../NotFoundSearch/NotFoundSearch'

import { moviesApi } from '../../utils/MoviesApi';
import * as MainApi  from '../../utils/MainApi';
import { useResize } from '../hooks/useResize';
import Search from '../../utils/Search';
import {moviesLocalStorageNames} from '../../utils/constants';

function Movies() {

  const { width, isScreenS, isScreenM, isScreenL } = useResize(); //стейт для размера экрана
  const {localMovies, moviesResalt, moviesSearchText, moviesStatusCheckbox } = moviesLocalStorageNames //имена записей в localStorage

  const [cardsNumber, setCardsNumber] = useState({ first: 12, next: 3, }); //стейт для колличества карточек на экране
  const [isPreloader, setIsPreloader] = useState(false); //стейт состояния прелоудора
  const [beatfilmMmovies, setBeatfilmMmovies] = useState(JSON.parse(localStorage.getItem(localMovies)) || {}); //стейт для всех карточек
  const [shownCardsNumber, setShownCardsNumber] = useState(cardsNumber.first); //стейт сколько картачек сейчас на экране
  const [cardsResalt, setCardsResalt] = useState(JSON.parse(localStorage.getItem(moviesResalt)) || {}); //стейт для окончательного списка карточек

  //проверка localStorage и получение карточек
  useEffect(() => {
    if (!beatfilmMmovies.length) {
      setIsPreloader(true);
      moviesApi.getCards()
        .then((res) => {
          setBeatfilmMmovies(res);
          localStorage.setItem(localMovies, JSON.stringify(res));
        })
        .catch((err) => console.log(err))
        .finally(setIsPreloader(false));
    };
    if (!cardsResalt.length) {
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

  const searchMovies = new Search(beatfilmMmovies)

  //обработчик поиска фильмов
  function handleSearchMovie(text, statusCheckbox) {
    const searchResalt = searchMovies.search(text, statusCheckbox)
    setCardsResalt(searchResalt);
    localStorage.setItem(moviesResalt, JSON.stringify(searchResalt));
    localStorage.setItem(moviesSearchText, text);
    localStorage.setItem(moviesStatusCheckbox, statusCheckbox);
  };

  function handlerSaveMovie(movie) {
    MainApi.saveMovie(movie)
    .catch((err) => console.log(err))
  }

  return (
    <main className="movies">
      <SearchForm
        onSearchMovie={handleSearchMovie}
        text={localStorage.getItem(moviesSearchText)}
        statusCheckbox={localStorage.getItem(moviesStatusCheckbox) === 'true' ? true : false}
      />
      {cardsResalt.length ? <MoviesCardList
        cards={cardsResalt.slice(0, shownCardsNumber)}
        onClick={handleNextCards}
        onSaveClick={handlerSaveMovie}
        buttonVisibility={cardsResalt.length > shownCardsNumber}

      />
        :
        isPreloader? <Preloader /> : <NotFoundSearch />}
    </main>
  );
}

export default Movies;