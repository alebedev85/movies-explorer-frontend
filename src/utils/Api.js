import { BASE_URL } from '../utils/constants';

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
   * Get user info
   * @returns json with user info
   */
  getCurrentUser() {
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
   * Get Cards
   * @returns json with list of cards
   */
  getCards() {
    return this._request(`${this._url}/cards`, {
      headers: this._getHeaders()
    });
  }

  /**
   * Add new card
   * @param {json} item - new card data.
   * @returns json with new card.
   */
  addNewCard(item) {
    return this._request(`${this._url}/cards`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify(item)
    });
  }

  /**
   * Delete card
   * @param {string} id - card id.
   * @returns message: "Пост удалён"
   */
  deleteCard(id) {
    return this._request(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._getHeaders()
    });
  }

  /**
   * Add like
   * @param {string} id - card id.
   * @returns json of card with new likes
   */
  _addLike(id) {
    return this._request(`${this._url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._getHeaders()
    });
  }

  /**
   * Delete like
   * @param {string} id - card id.
   * @returns json of card with new likes
   */
  _deleteLike(id) {
    return this._request(`${this._url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._getHeaders()
    });
  }

  /**
   * Change like card status
   * @param {string} id - card id.
   * @param {boolean} isLiked - is it my like.
   * @returns json of card with new likes
   */
  changeLikeCardStatus(id, isLiked) {
    return isLiked ? this._deleteLike(id) : this._addLike(id)
  }

  /**
   * Set new avatar
   * @param {object} avatar - object with new avatar.
   * @returns json of card with new likes
   */
  setNewAvatar(avatar) {
    return this._request(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify(avatar)
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
