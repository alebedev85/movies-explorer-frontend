import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <main className="main">
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}

export default Movies;