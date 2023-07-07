import React from 'react';

import Header from '../Header/Header';
import NavBar from '../Header/NavBar/NavBar';
import Main from '../Main/Main';
import Promo from '../Main/Promo/Promo'
import AboutProject from '../Main/AboutProject/AboutProject'

function App() {
  return (
    <body className="page">
      <Header>
        <NavBar />
      </Header>
      <Main>
        <Promo />
        <AboutProject />
      </Main>
    </body>
  );
}

export default App;
