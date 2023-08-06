import React, { useState, useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import NotFoundSearch from '../NotFoundSearch/NotFoundSearch'

import { api } from '../../utils/MainApi.js';
import { useResize } from '../hooks/useResize';
import Search from '../../utils/Search';
import { savedMoviesLocalStorageNames } from '../../utils/constants';
import { MOVIES_CARDS_L, MOVIES_CARDS_M, MOVIES_CARDS_S } from '../../utils/constants';
import { ADD_MOVIES_CARD_L, ADD_MOVIES_CARD_M, ADD_MOVIES_CARD_S } from '../../utils/constants';

function SavedMovies() {

  const { width, isScreenS, isScreenM, isScreenL } = useResize(); //стейт для размера экрана
  const { moviesSearchText, moviesStatusCheckbox } = savedMoviesLocalStorageNames //имена записей в localStorage

  const [cardsNumber, setCardsNumber] = useState({ first: 12, next: 3, }); //стейт для колличества карточек на экране
  const [isPreloader, setIsPreloader] = useState(true); //стейт состояния прелоудора
  const [savedMovies, setSavedMovies] = useState([]); //стейт для всех карточек
  const [shownCardsNumber, setShownCardsNumber] = useState(cardsNumber.first); //стейт сколько картачек сейчас на экране
  const [cardsResalt, setCardsResalt] = useState([]); //стейт для окончательного списка карточек

  //проверка localStorage и получение карточек
  useEffect(() => {
    api.getCards()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((err) => console.log(err))
      .finally(setIsPreloader(false));
  }, [])

  //выгрузка всех карточек если поиск пустой
  useEffect(() => {
    if (!cardsResalt.length) {
      setCardsResalt(savedMovies);
    }
  }, [savedMovies])

  //зависимость колличества отображаемых карточек от размера экрана
  useEffect(() => {
    if (isScreenS) {
      setCardsNumber({
        first: MOVIES_CARDS_S,
        next: ADD_MOVIES_CARD_S,
      })
    } else if (isScreenM) {
      setCardsNumber({
        first: MOVIES_CARDS_M,
        next: ADD_MOVIES_CARD_M,
      })
    } else if (isScreenL) {
      setCardsNumber({
        first: MOVIES_CARDS_L,
        next: ADD_MOVIES_CARD_L,
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

  const searchMovies = new Search(savedMovies) //экземпляр класса для поиска

  /**
     * Обработтчик выхода из аккаунта
     * @param {string} - текст поиска.
     * @param {string} - статус чекбокса.
     */
  function handleSearchMovie(text, statusCheckbox) {
    const searchResalt = searchMovies.search(text, statusCheckbox)
    setCardsResalt(searchResalt);
    localStorage.setItem(moviesSearchText, text);
    localStorage.setItem(moviesStatusCheckbox, statusCheckbox);
  };

  /**
     * Обработтчик удаления сохранённого фильма
     * @param {object} - объект с удаляемым фильмом.
     */
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
      {isPreloader ? <Preloader /> : cardsResalt.length ? <MoviesCardList
        cards={cardsResalt.slice(0, shownCardsNumber)}
        onDeleteClick={handlerDeleteMovie}
        onClick={handleNextCards}
        buttonVisibility={cardsResalt.length > shownCardsNumber}
      />
        :
        <NotFoundSearch />}
    </main>
  );
}

export default SavedMovies;