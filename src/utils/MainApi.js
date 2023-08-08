import { BASE_URL } from './constants';

class Api {
  constructor(url) {
    this._url = url;
    this._token = '';
  }

  /**
   * Создаем заголовки для запроса
   * @returns объект с заголовками
   */
  _getHeaders() {
    return {
      Authorization: this._token,
      "Content-Type": 'application/json'
    };
  }

  /**
   * Распарсинг ответа сервера
   * @returns json
   */
  _getJson(res) {
    if (!res.ok) {
      throw new Error(`Ошибка: ${res.status}`)
    }
    return res.json()
  }


  /**
   * Fetch запрос
   * @param {string} url - url для запроса.
   * @param {object} options - объект с  method, headers, body.
   * @returns json
   */
  _request(url, options) {
    return fetch(url, options).then(this._getJson)
  }


  /**
   * Запрос авторизации
   * @param {string} email
   * @param {string} password
   * @returns token
   */
  authorize(email, password) {
    return this._request(`${this._url}/signin`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
  }

  /**
   * Запрос регистрации
   * @param {string} name
   * @param {string} email
   * @param {string} password
   * @returns user email and id in json format
  */
  register(name, email, password) {
    return this._request(`${this._url}/signup`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    });
  }

  /**
   * Получение информации о текущем пользователе
   * @returns json с данными текущего пользователя
   */
  getCurrentUser() {
    return this._request(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._getHeaders()
    });
  }

  /**
   * Редактирование профиля
   * @param {string} новый name
   * @param {string} новый email
   * @returns json с новой информация пользователя
   */
  setUserInfo(name, email) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: name,
        email: email
      })
    });
  }

  /**
 * Сохранить фильм
 * @param {json} item - данные нового фильма.
 * @returns json со новым списком фильмов.
 */

  saveMovie(item) {

    const movie = {
      country: item.country,
      director: item.director,
      duration: item.duration,
      year: item.year,
      description: item.description,
      image: `https://api.nomoreparties.co/${item.image.url}`,
      trailerLink: item.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${item.image.formats.thumbnail.url}`,
      movieId: item.id,
      nameRU: item.nameRU,
      nameEN: item.nameEN
    }

    return this._request(`${this._url}/movies`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify(movie)
    });
  }

  /**
   * Получить список всех сохраненных фильмов
   * @returns json сохраненных фильмов
   */
  getCards() {
    return this._request(`${this._url}/movies`, {
      headers: this._getHeaders()
    });
  }

  /**
   * Удаление карточки
   * @param {string} id - id удаляемой карточки.
   * @returns message: "Пост удалён"
   */
  deleteCard(id) {
    return this._request(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._getHeaders()
    });
  }

  /**
     * Установка токена
     * @param {string} token - новый токен.
     */
  setToken(token) {
    this._token = `Bearer ${token}`;
  }
}

export const api = new Api(BASE_URL);

