import { BASE_URL } from './constants';

let token = ''

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
 * @param {string} name
 * @param {string} email
 * @param {string} password
 * @returns user email and id in json format
 */
export const register = (name, email, password) => {
  return makeRequest('signup', 'POST', { name, email, password })
}

/**
 * Get user info
 * @param {token} email
 * @returns user email and id in json format
 */
export const getUserData = () => {
  return makeRequest('users/me', 'GET', null, token)
}

/**
   * Get current user info
   * @returns json with user info
   */
export const  getCurrentUser = () => {
  return makeRequest('users/me', 'GET', null, token)
}

/**
 * Сохранить фильм
 * @param {json} item - данные нового фильма.
 * @returns json со новым списком фильмов.
 */
export const saveMovie = (item) => {

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
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGM3NzIxNDQ5YTNjZmQ2MmFhOGMwYjMiLCJpYXQiOjE2OTA3OTQ0NzAsImV4cCI6MTY5MTM5OTI3MH0.ghxg2aDcAZ-TNRPCE69D6ztOhzt18PDNAaQt-tb0Kw8'
  return makeRequest('movies', 'GET', null, token);
  // return this._request(`${this._url}/cards`, {
  //   headers: this._getHeaders()
  // });
}

export const deleteCard = (id) => {

  return makeRequest(`movies/${id}`, 'DELETE', null, token);

  // return this._request(`${this._url}/cards/${id}`, {
  //   method: 'DELETE',
  //   headers: this._getHeaders()
  // });
}

/**
     * Set token in api headers
     * @param {string} token - new token.
     */
export const setToken = (newToken) => {
  token = newToken;
}



