import React from 'react';
import Logo from '../../images/logo_header.svg';
import { Link } from 'react-router-dom';
import './Register.css';

// import useForm from '../hooks/useForm'

function Register() {
  return (
    <section className='auth'>
      <div className='auth__container'>
        <img src={Logo} className='header__logo' alt='Логотип сайта' />
        <h1 className='auth__title'>Добро пожаловать!</h1>
        <form className='auth__form' name='register'>
          <fieldset className='auth__fieldset'>
            <div className='auth__input-container'>
              <label className='auth__input-label' >Имя</label>
              <input
                type='text'
                id='name-input'
                className='auth__input'
                placeholder='Введите ваше имя'
                name='name'
                minLength='2'
                maxLength='30'
                value='Виталий'
                // value={form.name}
                // onChange={handleChange}
                required />
            </div>
            <div className='auth__input-container'>
              <label className='auth__input-label' >E-mail</label>
              <input
                type='email'
                id='email-input'
                className='auth__input'
                placeholder='Введите ваш email'
                name='email'
                minLength='5'
                maxLength='30'
                value='pochta@yandex.ru'
                // value={form.name}
                // onChange={handleChange}
                required />
            </div>
            <div className='auth__input-container'>
              <label className='auth__input-label' >Пароль</label>
              <input
              type='password'
              id='auth__input-password'
              className='auth__input'
              placeholder='Введите пароль'
              name='password'
              minLength='8'
              maxLength='30'
              value='111111111111'
              // value={form.name}
              // onChange={handleChange}
              required />
            </div>
          </fieldset>
          <span className='auth__error'>Что-то пошло не так...</span>
          <button className='auth__button button' type='submit'>Зарегистрироваться</button>
          <div className='auth__question-container'>
            <p className='auth__question'>Уже зарегистрированы?</p>
            <Link className='auth__question auth__question_link link' to='/signin'>Войти</Link>
          </div>
        </form>
      </div>

    </section>
  );
}

export default Register;