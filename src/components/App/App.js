import React from 'react';

import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Main from '../Main/Main';


function App() {
  return (
    <body className="page">
      <Header>
        <NavBar />
      </Header>
      <Main />
    </body>
  );
}

export default App;
