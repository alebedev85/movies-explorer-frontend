class Search {
  constructor(itemsList) {
    this._itemsList = itemsList;
  }

  //проверка на короткометражку
  _isShort(status, movies) {
    return status ? movies.filter(movie => movie.duration <= 40) : movies
  }

  //обработчик поиска фильмов
  search(text, statusCheckbox) {
    return this._isShort(statusCheckbox, this._itemsList).filter(movie => Object.values(movie)
      .some(value => typeof value === "string" ? value.toLowerCase().includes(text.toLowerCase()) : value === text));
  };
}

export default Search