import React, { useState } from 'react';

import './Profile.css';

import { regEmail } from '../../utils/constants';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import useForm from '../hooks/useForm'

function Profile({ logOut, onEditUser, buttonText, requestErr, requestRes, cleaner }) {

  const { currentUser } = React.useContext(CurrentUserContext);
  const [initChange, setInitChange] = useState(false); //статус начала редактирования профиля
  const [buttonStatus, setButtonStatus] = React.useState(true); //статус кнопки сабмита

  const { form, handleChange, errors } = useForm({
    name: currentUser.name,
    email: currentUser.email,
  })

  //чистка сообщений об ошибках
  React.useEffect(() => {
    cleaner();
  },[])

  //проверка полной валидации формы
  React.useEffect(() => {
    const err = errors.name === '' || errors.email === ''
    setButtonStatus(!err)
  }, [errors])

  //проверка на изменение данных
  React.useEffect(() => {
    const err = form.name !== currentUser.name || form.email !== currentUser.email
    setButtonStatus(!err)
  }, [form])

  //обработчик кнопки Редактировать
  function handleClickEditButton(event) {
    event.preventDefault();
    setInitChange(true);
  }

  //обработчик кнопки сабмита формы
  function handleSubmit(event) {
    event.preventDefault();
    onEditUser(form);
    setInitChange(false);
    cleaner();
  }

  //обработчик кнопки выхода из аккаунта
  function handleLogOut() {
    logOut()
  }

  return (
    <section className='profile'>
      <div className='profile__container'>
        <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
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
                required
                disabled={!initChange} />
              <span className='profile__error'>{errors.name}</span>
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
                pattern={regEmail.toString().slice(1,-1)}
                required
                disabled={!initChange} />
              <span className='profile__error'>{errors.email}</span>
              <span className='profile__error profile__error_res'>{requestErr}</span>
              <span className='profile__error profile__error_res profile_res'>{requestRes}</span>
            </div>
            <div className='profile__buttons'>
              {initChange ?
                <button
                  className='profile__button profile__button_submit button'
                  type='submit'
                  onClick={handleSubmit}
                  disabled={buttonStatus}>
                  {buttonText}
                </button>
                :
                <>
                  <button
                    className='profile__button profile__button_edit button'
                    type='button'
                    onClick={handleClickEditButton}>
                    Редактировать
                  </button>
                  <button
                    className='profile__button profile__button_exit button'
                    type='button'
                    onClick={handleLogOut}>
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