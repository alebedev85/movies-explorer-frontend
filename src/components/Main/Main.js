import React from 'react';
import './Main.css';

function Maim({ children }) {
  return (
    <main className="main">
      {children}
    </main>
  );
}

export default Maim;