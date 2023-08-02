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
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

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
    setEditUserRes('');
    setRegisterError('');
    setLoginError('');
    setProfileErr('');
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
        navigate('/movies', { replace: true });
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
    navigate('/', { replace: true });
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
      })
      .catch(err => {
        if (err === 'Ошибка: 409') {
          setProfileErr('Пользователь с таким email уже существует');
        } else {
          setProfileErr('При обновлении профиля произошла ошибка');
        }
      })
      .finally(() => {
        setIsLoading(false)
        setEditUserRes('Информация о пользователе обновлена');
      });
  }

  return (
    isLoggedIn === null ? <Preloader /> :
      <CurrentUserContext.Provider value={{ currentUser }}>
        <div className="page">
          <Header
            loggedIn={isLoggedIn}
          />
          <Routes>
            <Route path="/"
              element={
                <Main
                  loggedIn={isLoggedIn} />
              }
            />
            <Route path="/register"
              element={
                <Register
                  onRegister={handlerRegUser}
                  error={registerError}
                  buttonText={isLoading ? 'Зарегистрироваться...' : 'Зарегистрироваться'} />} />
            <Route path="/login"
              element={
                <Login
                  onLogin={handlerLogIn}
                  error={loginError}
                  buttonText={isLoading ? 'Войти...' : 'Войти'} />} />
            <Route path="/movies"
              element={<ProtectedRouteElement element={Movies} loggedIn={isLoggedIn} />}
            />
            <Route path="/saved-movies"
              element={<ProtectedRouteElement element={SavedMovies} loggedIn={isLoggedIn} />}
            />
            <Route path="/profile"
              element={<ProtectedRouteElement
                element={Profile}
                loggedIn={isLoggedIn}
                logOut={logOut}
                onEditUser={handleEditUser}
                buttonText={isLoading ? 'Сохранить...' : 'Сохранить'}
                requestErr={profileErr}
                requestRes={editUserRes} />}
            />
            <Route path="/*"
              element={<NotFound />}
            />
          </Routes>
          <Footer />

        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
