import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute.js";

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import { api } from '../../utils/MainApi.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

import { githubPage } from '../../utils/constants.js';

function App() {

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({ name: '', email: '', _id: '' }); //стейт для тикущего пользователя
  const [token, setToken] = useState(); //стейт для токена
  const [isLoggedIn, setLoggedIn] = useState(null); //стейт для статуса авторизации
  const [isLoading, setIsLoading] = useState(false); //стейт для статуса загруски данных при запросах
  const [editUserRes, setEditUserRes] = useState(''); //положительное состояние ответа при редактирование профиля
  const [registerError, setRegisterError] = useState(''); //сообщение об ошибке при регистрации
  const [loginError, setLoginError] = useState(''); //сообщение об ошибки при логирование
  const [profileErr, setProfileErr] = useState(''); //сообщение об ошибки при редактирование профиля

  //сброс всех сообщений об ошибках, проверки токена
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setToken(jwt);
    } else setLoggedIn(false);
  }, []);

  //получение данных пользователя при обновление токена
  useEffect(() => {
    if (token) {
      api.setToken(token);
      api.getCurrentUser()
        .then((res) => {
          setCurrentUser({ name: res.name, email: res.email, _id: res._id })
          setLoggedIn(true);
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [token]);

  //функция очистки сообщений об ошибках и результатов запросов
  function cleanFormMasseges() {
    setEditUserRes('');
    setRegisterError('');
    setLoginError('');
    setProfileErr('');
  }

  /**
   * Обработчик регистрации пользователя
   * @param {object} - обект с name, email, password.
   */
  function handlerRegUser({ name, email, password }) {
    setIsLoading(true);
    api.register(name, email, password)
      .then((data) => {
        handlerLogIn({ email, password })
      })
      .catch(err => {
        if (err.message === 'Ошибка: 409') {
          setRegisterError('Пользователь с таким email уже существует');
        }
        if (err.message === 'Ошибка: 500') {
          setRegisterError('На сервере произошла ошибка');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  /**
  * Обработчик авторизации пользователя
  * @param {object} - объект с email и password.
  */
  function handlerLogIn({ email, password }) {
    setIsLoading(true);
    api.authorize(email, password)
      .then(({ token }) => {
        localStorage.setItem('jwt', token);
        setToken(token);
        setLoggedIn(true);
        navigate(githubPage + '/movies', { replace: true });
      })
      .catch(err => {
        if (err.message === 'Ошибка: 401') {
          setLoginError('Вы ввели неправильный логин или пароль');
        }
        if (err.message === 'Ошибка: 500') {
          setLoginError('На сервере произошла ошибка');
        }
      })
      .finally(() => setIsLoading(false))
  }

  /**
   * //функция выхода из аккаунта
   */
  function logOut() {
    localStorage.clear();
    setLoggedIn(false);
    api.setToken('');
    navigate(githubPage + '/', { replace: true });
  }

  /**
     * Обработтчик выхода из аккаунта
     * @param {object} - объект с ноавыми name и email.
     */
  function handleEditUser({ name, email }) {
    setIsLoading(true);
    api.setUserInfo(name, email)
      .then((updateUser) => {
        setCurrentUser(updateUser);
        setEditUserRes('Информация о пользователе обновлена');
      })
      .catch(err => {
        if (err.message === 'Ошибка: 409') {
          setProfileErr('Пользователь с таким email уже существует');
        } else {
          setProfileErr('При обновлении профиля произошла ошибка');
        }
      })
      .finally(() => {
        setIsLoading(false)
      });
  }

  return (
    isLoggedIn === null ? <Preloader /> :
      <CurrentUserContext.Provider value={{ currentUser, token }}>
        <div className="page">
          <Header
            loggedIn={isLoggedIn}
          />
          <Routes>
            <Route path={`${githubPage}/`}
              element={
                <Main
                  loggedIn={isLoggedIn} />
              }
            />
            {!isLoggedIn && <Route path={`${githubPage}/register`}
              element={
                <Register
                  onRegister={handlerRegUser}
                  error={registerError}
                  buttonText={isLoading ? 'Зарегистрироваться...' : 'Зарегистрироваться'}
                  cleaner={cleanFormMasseges} />}
            />}
            {!isLoggedIn && <Route path={`${githubPage}/login`}
              element={
                <Login
                  onLogin={handlerLogIn}
                  error={loginError}
                  buttonText={isLoading ? 'Войти...' : 'Войти'}
                  cleaner={cleanFormMasseges} />}
            />}
            <Route path={`${githubPage}/movies`}
              element={<ProtectedRouteElement element={Movies} loggedIn={isLoggedIn} />}
            />
            <Route path={`${githubPage}/saved-movies`}
              element={<ProtectedRouteElement element={SavedMovies} loggedIn={isLoggedIn} />}
            />
            <Route path={`${githubPage}/profile`}
              element={<ProtectedRouteElement
                element={Profile}
                loggedIn={isLoggedIn}
                logOut={logOut}
                onEditUser={handleEditUser}
                buttonText={isLoading ? 'Сохранить...' : 'Сохранить'}
                requestErr={profileErr}
                requestRes={editUserRes}
                cleaner={cleanFormMasseges} />}
            />
            <Route path={`${githubPage}/*`}
              element={<NotFound />}
            />
          </Routes>
          <Footer />

        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
