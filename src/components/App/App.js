import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound'

import { moviesApi } from '../../utils/MoviesApi'

function App() {

  const location = useLocation();

  const [isLoggedIn, setLoggedIn] = useState(false);

  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    location.pathname === '/' ? setLoggedIn(false) : setLoggedIn(true)
  }, [])

  // localStorage.setItem('cards', JSON.stringify(cards));
  // array = JSON.parse(localStorage.getItem('cards'));

  useEffect(() => {
    setCards(JSON.parse(localStorage.getItem('cards')));
    console.log(cards)
    if (!cards) {
      moviesApi.getCards()
      .then((res) => {
        setCards(res.slice(0, 9));
        localStorage.setItem('cards', JSON.stringify(res))
        console.log(res);
      })
      .catch((err) => console.log(err));
    }
  }, [])


  return (
    <div className="page">
      <Header
        loggedIn={isLoggedIn}
      />
      <Routes>
        <Route path="/register"
          element={
            <Register />
          }
        />
        <Route path="/login"
          element={
            <Login />
          }
        />
        {/* <Route path="*" element={isLoggedIn ? <Navigate to="/movies" replace /> : <Navigate to="/" replace />} /> */}
        <Route path="/"
          element={
            <Main
              loggedIn={isLoggedIn}
            />
          }
        />
        <Route path="/movies"
          element={
            <Movies
              cards={cards}
            />
          }
        />
        <Route path="/saved-movies"
          element={
            <SavedMovies
              cards={cards}
            />
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
  );
}

export default App;
