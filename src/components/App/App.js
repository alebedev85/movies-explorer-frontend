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

function App() {

  const location = useLocation();

  const [isLoggedIn, setLoggedIn] = useState(false);

  const cards = Array(5).fill(null)

  useEffect(() => {
    location.pathname === '/' ? setLoggedIn(false) : setLoggedIn(true)
  })

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
