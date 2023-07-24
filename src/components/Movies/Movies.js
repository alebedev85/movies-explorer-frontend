import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({cards}) {
  console.log(cards)
  return (
    <main className="main">
      <SearchForm />
      {cards ? <MoviesCardList cards={cards}/> : <></>}
    </main>
  );
}

export default Movies;