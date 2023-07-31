import React, { useState, useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import NotFoundSearch from '../NotFoundSearch/NotFoundSearch'

import { api } from '../../utils/MainApi.js';
import { useResize } from '../hooks/useResize';
import Search from '../../utils/Search';
import { savedMoviesLocalStorageNames } from '../../utils/constants';

function Movies() {

  const { width, isScreenS, isScreenM, isScreenL } = useResize(); //стейт для размера экрана
  const { moviesResalt, moviesSearchText, moviesStatusCheckbox } = savedMoviesLocalStorageNames //имена записей в localStorage

  const [cardsNumber, setCardsNumber] = useState({ first: 12, next: 3, }); //стейт для колличества карточек на экране
  const [isPreloader, setIsPreloader] = useState(false); //стейт состояния прелоудора
  const [savedMovies, setSavedMovies] = useState([]); //стейт для всех карточек
  const [shownCardsNumber, setShownCardsNumber] = useState(cardsNumber.first); //стейт сколько картачек сейчас на экране
  const [cardsResalt, setCardsResalt] = useState(JSON.parse(localStorage.getItem(moviesResalt)) || []); //стейт для окончательного списка карточек

  //проверка localStorage и получение карточек
  useEffect(() => {
    setIsPreloader(true);
    api.getCards()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((err) => console.log(err))
      .finally(setIsPreloader(false));
  }, [])

  useEffect(() => {
    if (!cardsResalt.length) {
      setCardsResalt(savedMovies);
    }
  }, [savedMovies])

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

  const searchMovies = new Search(savedMovies)

  //обработчик поиска фильмов
  function handleSearchMovie(text, statusCheckbox) {
    const searchResalt = searchMovies.search(text, statusCheckbox)
    setCardsResalt(searchResalt);
    localStorage.setItem(moviesResalt, JSON.stringify(searchResalt));
    localStorage.setItem(moviesSearchText, text);
    localStorage.setItem(moviesStatusCheckbox, statusCheckbox);
  };

  //обработтчик удаления сохраненных фильмов
  function handlerDeleteMovie(movie) {
    api.deleteCard(movie._id)
      .then(() => {
        const filtedList = savedMovies.filter((elm) => elm._id !== movie._id)
        setSavedMovies(filtedList);
        setCardsResalt(filtedList);
      })
      .catch((err) => console.log(err));
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
        onDeleteClick={handlerDeleteMovie}
        onClick={handleNextCards}
        buttonVisibility={cardsResalt.length > shownCardsNumber}
      />
        :
        isPreloader ? <Preloader /> : <NotFoundSearch />}
    </main>
  );
}

export default Movies;