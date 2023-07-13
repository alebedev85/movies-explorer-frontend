import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({cards}) {
  return (
    <main className="main">
      <SearchForm />
      <MoviesCardList cards={cards}/>
    </main>
  );
}

export default SavedMovies;