import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <div className='search__form__input-container'>
          <input
            className='search__form__input-container__input'
            placeholder='Фильм'
            required />
          <button
            className='search__form__input-container__button button'
            type='submit' />
        </div>
        <div className='search__form__checkbox-conteiner'>
          <input type='checkbox'
            className='search__form__checkbox'
            id='search__form__checkbox'
            value='yes' />
          <label
            className='search__form__label link'
            htmlFor='search__form__checkbox'>
            Короткометражки
          </label>
        </div>
      </form>

    </section>
  );
}

export default SearchForm;