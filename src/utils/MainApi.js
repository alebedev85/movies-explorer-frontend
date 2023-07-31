import { BASE_URL } from './constants';

class Api {
  constructor(url) {
    this._url = url;
    this._token = '';
  }

  /**
   * Assembling header for fetch request
   * @returns header object
   */
  _getHeaders() {
    return {
      Authorization: this._token,
      "Content-Type": 'application/json'
    };
  }

  /**
   * Get json form fetch
   * @returns json
   */
  _getJson(res) {
    if (res.ok) {
      return res.json()
    } else Promise.reject(`Ошибка: ${res.status}`);
  }


  /**
   * Fetch request
   * @param {string} url - url for request.
   * @param {object} options - object with method, headers, body for request.
   * @returns json
   */
  _request(url, options) {
    return fetch(url, options).then(this._getJson);
  }


  /**
   * Aototrization request
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
 * Registration request
 * @param {string} name
 * @param {string} email
 * @param {string} password
 * @returns user email and id in json format
 */
  register(name, email, password) {
    // return makeRequest('signup', 'POST', { name, email, password });
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
   * Get user info
   * @returns json with user info
   */
  getCurrentUser() {
    return this._request(`${this._url}/users/me`, {
      headers: this._getHeaders()
    });
  }

  /**
 * Get user info
 * @param {token} email
 * @returns user email and id in json format
 */
  getUserData() {
    return this._request(`${this._url}/users/me`, {
      headers: this._getHeaders()
    });
  }

  /**
   * Set user info
   * @returns json with user info
   */
  setUserInfo(name, about) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: name,
        about: about
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
   * Delete card
   * @param {string} id - card id.
   * @returns message: "Пост удалён"
   */
  deleteCard(id) {
    return this._request(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._getHeaders()
    });
  }

  /**
     * Set token in api headers
     * @param {string} token - new token.
     */
  setToken(token) {
    this._token = `Bearer ${token}`;
  }
}

export const api = new Api(BASE_URL);

// export const api = new Api('https://mesto.nomoreparties.co/v1/cohort-61', '3e070c18-b10f-4e80-b715-68fa3cc00268');
