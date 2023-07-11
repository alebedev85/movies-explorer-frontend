import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';


function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  const cards = [];
  const saveCards = [];

  return (
    <body className="page">
      <Header loggedIn={true}/>
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route path="/movies"
          element={
            <Movies
              loggedIn={loggedIn}
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
