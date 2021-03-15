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
            <div className="aboutMe__left--content__shape--name">Daniel Solarte Chaverra</div>
          </div>
        </div>
      </div>
      <div className="aboutMe__right">
        <h1>About me</h1>
        <p>
          Cross-platform software developer with experience in backend and frontend process with JavaScript,
          TypeScript, Rust, NodeJS, ReactJS, Ionic and SASS.
        </p>
        <p>
          Besides, i've made works as freelancer with mobile apps or web apps, and bots for Discord communities.
        </p>
        <p>
          "The life is an adventure without end."
        </p>
        <div className="aboutMe__right--country">
          <div className="aboutMe__right--country__flag" />
          <span>Medellín, Colombia</span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
