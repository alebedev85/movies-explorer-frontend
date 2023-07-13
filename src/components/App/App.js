import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';


function App() {

  const [isLoggedIn, setLoggedIn] = useState(true);

  const cards = Array(8).fill(null)
  const saveCards = [];

  return (
    <body className="page">
      <Header
        loggedIn={isLoggedIn}
      />
      <Routes>
        <Route path="*" element={true ? <Navigate to="/movies" replace /> : <Navigate to="/" replace />} />
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
      </Routes>
      <Footer />
    </body>
  );
}

export default App;
