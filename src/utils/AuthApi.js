import { BASE_URL } from '../utils/constants';

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
