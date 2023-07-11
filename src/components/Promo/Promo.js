import React from 'react';
import './Promo.css';
import logo from '../../images/promo_logo.svg';

function Promo() {
  return (
    <section className="promo">
      <div className='promo__grid'>
        <img src={logo} className='promo__logo' alt='Логотип проекта' />
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className='promo__subtitle'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>

      </div>
      <button className='promo__button'>
        Узнать больше
      </button>
    </section>
  );
}

export default Promo;