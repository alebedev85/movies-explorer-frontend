import React from 'react';
import './AboutProject.css'

function AboutProject() {
  return (
    <section className='about-project' aria-label='Короткое описание проекта'>
      <h2 className="about-project__title">О проекте</h2>
      <div className='about-project__info'>
        <article>
          <h3 className='about-project__subtitle'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__paragraph'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </article>
        <article>
          <h3 className='about-project__subtitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__paragraph'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className='about-project__deadline'>
        <p className='about-project__deadline__stage_1'>1 неделя</p>
        <p className='about-project__deadline__stage_2'>4 недели</p>
        <p className='about-project__deadline__paragraph'>Back-end</p>
        <p className='about-project__deadline__paragraph'>Front-end</p>
      </div>

    </section>
  );
}

export default AboutProject;