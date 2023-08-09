import React from 'react';
import './Promo.css';
import { Link } from 'react-scroll';
import logo from '../../images/promo_logo.svg';

function Promo() {
  return (
    <section className="promo" aria-label='Презентация проекта'>
      <div className='promo__container'>
        <img src={logo} className='promo__img' alt='Логотип проекта' />
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className='promo__subtitle'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
      </div>
      <Link className='promo__button link'
      to='about-project'
      spy={true}
      smooth={true}
      duration={400} >
        Узнать больше
      </Link>
    </section>
  );
}

export default Promo;