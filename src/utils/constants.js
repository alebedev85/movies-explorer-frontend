export const beatfilm_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const BASE_URL = 'https://api.andrey.movies.nomoreparties.sbs';

//Разрешение экрана
export const SCREEN_S = 750;
export const SCREEN_M = 1278;
export const SCREEN_L = 1280;

//Количество отображаемых карточек с фильмами при разных разрешениях экрана
export const MOVIES_CARDS_L = 12;
export const MOVIES_CARDS_M = 8;
export const MOVIES_CARDS_S = 5;

//Количество добовляемых карточек с фильмами кнопкой ЕЩЕ
export const ADD_MOVIES_CARD_L = 3;
export const ADD_MOVIES_CARD_M = 2;
export const ADD_MOVIES_CARD_S = 1;

export const regEmail = /^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$/

//Именя LocalStorage для общих фильмов
export const moviesLocalStorageNames = {
  localMovies: 'beatfilmMovies',
  moviesResalt: 'moviesResalt',
  moviesSearchText: 'moviesSearchText',
  moviesStatusCheckbox: 'moviesStatusCheckbox'
}

//Именя LocalStorage для сохраненных фильмов
export const savedMoviesLocalStorageNames = {
  localMovies: 'savedMovies',
  moviesResalt: 'savedMoviesResalt',
  moviesSearchText: 'savedMoviesSearchText',
  moviesStatusCheckbox: 'savedMoviesStatusCheckbox'
}

//Для перевода длительности фильмов в минуты
export const DURATION_SHORT = 40;

export const githubPage = '/movies-explorer-frontend'
// export const githubPage = ''