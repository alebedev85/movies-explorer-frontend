import React from 'react';
import logo from '../../images/logo_header.svg';
import { Link } from 'react-router-dom';
import './Register.css';

import useForm from '../hooks/useForm'

function Register({ onRegister, buttonText, success }) {

  const { form, handleChange, errors } = useForm({
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(form)
  }
  return (
    <section className='auth'>
      <div className='auth__container'>
        <Link to="/" className="link">
          <img src={logo} className='logo' alt='Логотип сайта' />
        </Link>
        <h1 className='auth__title'>Добро пожаловать!</h1>
        <form className='auth__form'
          name='Register'
          onSubmit={handleSubmit}
          noValidate >
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
                value={form.name}
                onChange={handleChange}
                required />
              <span className='auth__error'>{errors.name}</span>
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
                value={form.email}
                onChange={handleChange}
                required />
              <span className='auth__error'>{errors.email}</span>
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
              <span className='auth__error'>{errors.password}</span>
              {success && <span className='auth__error auth__error_res'>Что-то пошло не так...</span>}
            </div>
          </fieldset>
          <button className='auth__button button'
            type='submit'
            disabled={!Object.values(errors).every(err => err === '')}>
            {buttonText}
          </button>
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