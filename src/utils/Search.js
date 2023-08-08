import { DURATION_SHORT } from './constants';

class Search {
  constructor(itemsList) {
    this._itemsList = itemsList;
  }

  //проверка на короткометражку
  _isShort(status, items) {
    return status ? items.filter(item => item.duration <= DURATION_SHORT) : items
  }

  /**
     * Обработчик поиска фильмов
     * @param {string} text - тектс поиска.
     * @param {string} statusCheckbox - состояние чекбокса.
     * @returns {object} - отфильтрованный список
     */
  search(text, statusCheckbox) {
    const searchText = text.toLowerCase()
    return this._isShort(statusCheckbox, this._itemsList).filter(item =>
      item.nameRU.toLowerCase().includes(searchText) || item.nameEN.toLowerCase().includes(searchText)
    );
  };
}

export default Search