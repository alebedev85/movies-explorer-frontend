import React from 'react';

import Header from '../Header/Header';
import NavBar from '../Header/NavBar/NavBar';
import Main from '../Main/Main';
import Promo from '../Main/Promo/Promo'

function App() {
  return (
    <body className="page">
      <Header>
        <NavBar />
      </Header>
      <Main>
        <Promo />
      </Main>
    </body>
  );
}

export default App;
