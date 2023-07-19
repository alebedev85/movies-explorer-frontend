import React from 'react';
import './SearchForm.css';

import searchIcon from '../../images/search-icon.svg'

function SearchForm() {
  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search__form'>
        <div className='search__input-container'>
          <img
            src={searchIcon}
            className='search__input-container__icon'
            alt='Иконка поиска'
          />
          <input
            className='search__input-container__input'
            placeholder='Фильм'
            required />
          <button
            className='search__input-container__button button'
            type='submit' />
        </div>
        <div className='search__form__checkbox-conteiner'>
          <input type='checkbox'
            className='search__form__checkbox'
            id='search__form__checkbox'
            value='yes' />
          <label
            className='search__form__label'
            htmlFor='search__form__checkbox'>
            Короткометражки
          </label>
        </div>
      </form>
      </div>


    </section>
  );
}

export default SearchForm;