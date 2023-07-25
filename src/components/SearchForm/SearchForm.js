import React from 'react';
import './SearchForm.css';

import searchIcon from '../../images/search-icon.svg'

function SearchForm({ onSearchMovie }) {

  const [searchText, setSearchText] = React.useState('');

  function handleSearchText(e) {
    setSearchText(e.target.value);
    // setErrors({
    //   ...errors,
    //   [e.target.name]: e.target.validationMessage
    // })
  }

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    onSearchMovie(searchText);
  }

  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search__form' name='searchForm' onSubmit={handleAddPlaceSubmit}>
          <div className='search__input-container'>
            <img
              src={searchIcon}
              className='search__icon'
              alt='Иконка поиска'
            />
            <input
              className='search__input'
              id='search-input'
              placeholder='Фильм'
              type='text'
              name='searchInput'
              value={searchText}
              onChange={handleSearchText}
              required />
            <button
              className='search__button button'
              type='submit' />
          </div>
          <div className='search__checkbox-conteiner'>
            <input type='checkbox'
              className='search__checkbox'
              id='search__checkbox'
              value='yes' />
            <label
              className='search__label'
              htmlFor='search__checkbox'>
              Короткометражки
            </label>
          </div>
        </form>
      </div>


    </section>
  );
}

export default SearchForm;