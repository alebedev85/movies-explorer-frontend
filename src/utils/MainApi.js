import { BASE_URL } from './constants';

/**
   * Common request funstion
   * @param {string} url - end point of requets.
   * @param {string} method - method of requets.
   * @param {object} body - body of requets.
   * @param {string} token - personal token.
   * @returns respons in json format
   */
const makeRequest = (url, method, body, token) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json"
    }
  }
  if (body) {
    options.body = JSON.stringify(body)
  }
  if (token) {
    options.headers.Authorization = `Bearer ${token}`
  }
  return fetch(`${BASE_URL}/${url}`, options)
    .then((res) => {
      if (!res.ok) {
        console.log(res)
        throw new Error('Error occurred!')
      }
      return res.json()
    })
}

/**
 * Aototrization request
 * @param {string} email
 * @param {string} password
 * @returns token
 */
export const authorize = (email, password) => {
  return makeRequest('signin', 'POST', { email, password })
}

/**
 * Registration request
 * @param {string} email
 * @param {string} password
 * @returns user email and id in json format
 */
export const register = (email, password) => {
  return makeRequest('signup', 'POST', { email, password })
}

/**
 * Authentication request
 * @param {token} email
 * @returns user email and id in json format
 */
export const getUserData = (token) => {
  return makeRequest('users/me', 'GET', null, token)
}

/**
 * Сохранить фильм
 * @param {json} item - данные нового фильма.
 * @returns json со новым списком фильмов.
 */
export const saveMovie = (item) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGMyMmFhYzA1MjcyODk5Mjk3ZWI4N2EiLCJpYXQiOjE2OTA0NDY1MTksImV4cCI6MTY5MTA1MTMxOX0.zRr7LvP5U5B0Zt8JW6Wlb03xR3vmhTPDNQ0zhx29ok0'

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

  return makeRequest('movies', 'POST', movie, token);

  // return this._request(`${this._url}/movies`, {
  //   method: 'POST',
  //   headers: this._getHeaders(),
  //   body: JSON.stringify(movies)
  // });
}

/**
   * Получить список всех сохраненных фильмов
   * @returns json сохраненных фильмов
   */
export const getCards = () => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGMyMmFhYzA1MjcyODk5Mjk3ZWI4N2EiLCJpYXQiOjE2OTA0NDY1MTksImV4cCI6MTY5MTA1MTMxOX0.zRr7LvP5U5B0Zt8JW6Wlb03xR3vmhTPDNQ0zhx29ok0'

  return makeRequest('movies', 'GET', null, token);
  // return this._request(`${this._url}/cards`, {
  //   headers: this._getHeaders()
  // });
}

export const deleteCard = (id) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGMyMmFhYzA1MjcyODk5Mjk3ZWI4N2EiLCJpYXQiOjE2OTA0NDY1MTksImV4cCI6MTY5MTA1MTMxOX0.zRr7LvP5U5B0Zt8JW6Wlb03xR3vmhTPDNQ0zhx29ok0'
  return makeRequest(`movies/${id}`, 'DELETE', null, token);

  // return this._request(`${this._url}/cards/${id}`, {
  //   method: 'DELETE',
  //   headers: this._getHeaders()
  // });
}

