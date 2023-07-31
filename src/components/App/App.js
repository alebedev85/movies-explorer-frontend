import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate, Navigate } from 'react-router-dom';
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute.js";

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound'

import * as MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function App() {

  const location = useLocation();
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = React.useState({ name: '', about: '' }); //State for current user info
  const [isSuccess, setSucces] = React.useState(false); //State for seccessfull registration or login
  const [token, setToken] = React.useState(); //State for token
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = React.useState({ email: '', _id: '' });//State for user regiztration data
  const [isLoading, setIsLoading] = React.useState(false); //State for standart button text

  /**
   * Handler to user registration
   * @param {object} - email and password.
   */
  function handlerRegUser({ name, email, password }) {
    setIsLoading(true);
    MainApi.register(name, email, password)
      .then((data) => {
        console.log(data)
        setUserData({ name: data.email, email: data.email, _id: data._id });
        setSucces(true);
        navigate('/login', { replace: true });
      })
      .catch(err => {
        console.log(err);
        setSucces(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  /**
  * Handler to user authorizetion
  * @param {object} - email and password.
  */
  function handlerLogIn({ email, password }) {
    setIsLoading(true);
    MainApi.authorize(email, password)
      .then(({ token }) => {
        localStorage.setItem('jwt', token);
        setToken(token);
      })
      .catch(err => {
        console.log(err)
        setSucces(false);
      })
      .finally(() => setIsLoading(false))
  }

  /**
   * logOut function
   */
  function logOut() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setUserData({ email: '', _id: '' });
    MainApi.setToken('');
    navigate('/register', { replace: true });
  }

  React.useEffect(() => {
    // Check token
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setToken(jwt);
      MainApi.setToken(jwt);
      //Get user info
      MainApi.getUserData()
        .then((res) => {
          setCurrentUser(res); //Set currentUser
        })
        .catch(err => {
          console.log(err);
        });
    };
  }, []);

  React.useEffect(() => {
    if (token) {
      MainApi.getUserData(token)
        .then((res) => {
          const data = res;
          setUserData({ email: data.email, _id: data._id });
          setCurrentUser(res)
          setLoggedIn(true);
          navigate('/', { replace: true });
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [token]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          loggedIn={isLoggedIn}
        />
        <Routes>
          <Route path="/register"
            element={
              <Register
                onRegister={handlerRegUser}
                buttonText={isLoading ? 'Зарегистрироваться...' : 'Зарегистрироваться'} />} />
          <Route path="/login"
            element={
              <Login
                onLogin={handlerLogIn}
                buttonText={isLoading ? 'Войти...' : 'Войти'} />} />
          <Route path="*" element={isLoggedIn ? <Navigate to="/movies" replace /> : <Navigate to="/" replace />} />
          <Route path="/"
            element={
              <Main
                loggedIn={isLoggedIn}
              />
            }
          />
          <Route path="/movies"
            element={
              <Movies />
            }
          />
          <Route path="/saved-movies"
            element={
              <SavedMovies />
            }
          />
          <Route path="/profile"
            element={
              <Profile />
            }
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
