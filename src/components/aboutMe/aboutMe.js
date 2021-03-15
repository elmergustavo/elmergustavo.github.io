/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import './aboutMe.scss';

const AboutMe = ({ observer }) => {
  const [element, setElement] = React.useState(null);

  React.useEffect(() => {
    if (element) {
      observer.observe(element);
    }
  // eslint-disable-next-line
  }, [element]);

  return (
    <section className="aboutMe" ref={setElement} data-page="about-me">
      <div className="aboutMe__left">
        <div className="aboutMe__left--bg" />
        <div className="aboutMe__left--content">
          <div className="aboutMe__left--content__shape">
            <div className="aboutMe__left--content__shape--avatar" />
            <div className="aboutMe__left--content__shape--name">Elmer Gustavo Pú</div>
          </div>
        </div>
      </div>
      <div className="aboutMe__right">
        <h1>About me</h1>
        <p>
          Hola me llamo Gustavo, soy estudiante de la universidad Rafael Landívar
        </p>
        <p>
          Inicié mi aprendizaje como programador en 2017. Tengo un especial interés en Desarrolo Web dominando mayormente Front-End, pero también puedo desempeñarme en Back-end. 
          Actualmente he creado varios proyectos como hobbie y también como interés en aportar soluciones a problemas de la vida cotidiana-moderna, adquiriendo conocimientos en el camino.
        </p>
        <p>
          "Nunca pares de aprender"
        </p>
        <div className="aboutMe__right--country">
          <div className="aboutMe__right--country__flag" />
          <span>Escuintla, Guatemala</span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
