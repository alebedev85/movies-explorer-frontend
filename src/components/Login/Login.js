import React from 'react';
import logo from '../../images/logo_header.svg';
import { Link } from 'react-router-dom';
import './Login.css';

import useForm from '../hooks/useForm'

function Login({ onLogin, buttonText }) {

  const { form, handleChange, errors } = useForm({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(form)
  }

  return (
    <section className='auth'>
      <div className='auth__container'>
        <Link to="/" className="link">
          <img src={logo} className='logo' alt='Логотип сайта' />
        </Link>
        <h1 className='auth__title'>Рады видеть!</h1>
        <form className='auth__form' name='Login' onSubmit={handleSubmit}>
          <fieldset className='auth__fieldset'>
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
                value={form.email}
                onChange={handleChange}
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
                minLength='2'
                maxLength='30'
                value={form.password}
                onChange={handleChange}
                required />
            </div>
          </fieldset>
          <span className='auth__error auth__error_login'>Что-то пошло не так...</span>
          <button className='auth__button button' type='submit'>Войти</button>
          <div className='auth__question-container'>
            <p className='auth__question'>Ещё не зарегистрированы?</p>
            <Link className='auth__question auth__question_link link' to='/register'>Регистрация</Link>
          </div>
        </form>
      </div>

    </section>
  );
}

export default Login;