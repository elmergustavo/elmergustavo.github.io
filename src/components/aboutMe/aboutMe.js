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
          Hello, my name is Gustavo, I am a student at Rafael Landívar University.
        </p>
        <p>
          I started my apprenticeship as a programmer in 2017. I have a special interest in Web Development, mostly dominating Front-End, but I can also work in Back-end.
          Currently I have created several projects as a hobby and also as an interest in providing solutions to problems of everyday-modern life, acquiring knowledge along the way.
        </p>
        <p>
          "never stop learning"
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
