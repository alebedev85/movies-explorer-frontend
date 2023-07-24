import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({cards}) {
  return (
    <main className="main">
      <SearchForm />
      {cards? <MoviesCardList cards={cards}/> : <Preloader />}
    </main>
  );
}

export default Movies;