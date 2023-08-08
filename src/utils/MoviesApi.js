import { beatfilm_URL } from './constants';

class MoviesApi {
  constructor(url) {
    this._url = url;
  }

  /**
   * Создаем заголовки для запроса
   * @returns объект с заголовками
   */
  _getHeaders() {
    return {
      "Content-Type": 'application/json'
    };
  }

  /**
   * Распарсинг ответа сервера
   * @returns json
   */
  _getJson(res) {
    if (res.ok) {
      return res.json()
    } else Promise.reject(`Ошибка: ${res.status}`);
  }


  /**
    * Fetch запрос
    * @param {string} url - url для запроса.
    * @param {object} options - объект с  method, headers, body.
    * @returns json
    */
  _request(url, options) {
    return fetch(url, options).then(this._getJson);
  }

  /**
   * Получение карточек с фильмами
   * @returns json со списком фильмов
   */
  getCards() {
    return this._request(this._url, {
      headers: this._getHeaders()
    });
  }
}

export const moviesApi = new MoviesApi(beatfilm_URL);
