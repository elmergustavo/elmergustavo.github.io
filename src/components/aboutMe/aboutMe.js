import React from "react";
import "./aboutMe.scss";

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
            <div className="aboutMe__left--content__shape--name">
              Elmer Gustavo Pú
            </div>
          </div>
        </div>
      </div>
      <div className="aboutMe__right">
        <h1>About me</h1>
        <p>
          I’m a backend Developer coding is my passion and my new professional
          career focus. Developing applications for the web has become my drive.
          I am currently a student at Universidad Rafael Landívar. I started my
          apprenticeship as a programmer in 2017. dominating mainly the
          Back-end, but I can also work in Frontend . Currently I have created
          several projects as a hobby and also as an interest in providing
          solutions to problems of modern everyday life. I have also worked with
          Apis-rest and microservices.
        </p>
        <p></p>
        <p>"Never stop learning"</p>
        <div className="aboutMe__right--country">
          <div className="aboutMe__right--country__flag" />
          <span>Escuintla, Guatemala</span>
        </div>
        <div className="aboutMe__right--country">
          <a
            type="submit"
            href="https://drive.google.com/file/d/1Pj_uesOX65a7EjGEnb4H7QmgsHQTbhB0/view?usp=sharing"
            target="_blank"
          >
            <button className="Btn-currim">Download CV</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
