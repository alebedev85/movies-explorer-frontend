import React, { useState } from 'react';

import './Profile.css';

import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import useForm from '../hooks/useForm'

function Profile({logOut}) {

  const { currentUser } = React.useContext(CurrentUserContext);
  const [initChange, setInitChange] = useState(false);

  const { form, handleChange, errors } = useForm({
    name: currentUser.name,
    email: currentUser.email,
  })

  function handleClickEditButton(event) {
    event.preventDefault();
    setInitChange(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setInitChange(false);
  }

  return (
    <section className='profile'>
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form className='profile__form' name='edit' onSubmit={handleSubmit}>
          <fieldset className='profile__fieldset'>
            <div className='profile__input-container'>
              <label className='profile__input-label'>Имя</label>
              <input
                id='name-input'
                className='profile__input profile__input_passward'
                type='name'
                placeholder='Пароль'
                name='name'
                minLength='2'
                maxLength='200'
                value={form.name}
                onChange={handleChange}
                required />
            </div>
            <div className='profile__input-container'>
              <label className='profile__input-label'>E-mail</label>
              <input
                id='email-input'
                className='profile__input profile__input_email'
                type='email'
                placeholder='Email'
                name='email'
                minLength='2'
                maxLength='40'
                value={form.email}
                onChange={handleChange}
                required />
            </div>
            <div className='profile__buttons'>
              {initChange ?
                <button
                  className='profile__button profile__button_submit button'
                  type='submit'
                  onClick={handleSubmit}>
                  Сохранить
                </button>
                :
                <>
                  <button
                    className='profile__button profile__button_edit button'
                    type='button' onClick={handleClickEditButton}>
                    Редактировать
                  </button>
                  <button
                    className='profile__button profile__button_exit button'
                    type='button'>
                    Выйти из аккаунта
                  </button>
                </>
              }
            </div>
          </fieldset>
        </form>
      </div>
    </section >
  )
}

export default Profile;