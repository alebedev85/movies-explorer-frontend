import React from 'react';

import Header from '../Header/Header';
import NavBar from '../Header/NavBar/NavBar';
import Main from '../Main/Main';
import Promo from '../Main/Promo/Promo'
import AboutProject from '../Main/AboutProject/AboutProject'
import Techs from '../Main/Techs/Techs'

function App() {
  return (
    <body className="page">
      <Header>
        <NavBar />
      </Header>
      <Main>
        <Promo />
        <AboutProject />
        <Techs />
      </Main>
    </body>
  );
}

export default App;
