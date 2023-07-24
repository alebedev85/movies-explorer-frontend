import { beatfilm_URL } from './constants';

class Api {
  constructor(url) {
    this._url = url;
  }

  /**
   * Assembling header for fetch request
   * @returns header object
   */
  _getHeaders() {
    return {
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
   * Get Cards
   * @returns json with list of cards
   */
  getCards() {
    return this._request(this._url, {
      headers: this._getHeaders()
    });
  }
}

export const moviesApi = new Api(beatfilm_URL);
