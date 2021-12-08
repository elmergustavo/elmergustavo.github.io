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
        Actualmente soy estudiante de la Universidad Rafael Landívar. Comencé mi aprendizaje como programador en 2017. Tengo un interés especial en el desarrollo web, dominando principalmente el Back-end, pero también puedo trabajar en Frontend.     . Actualmente he creado varios proyectos como hobby y también como interés en dar soluciones a problemas de la vida cotidiana moderna adquiriendo conocimientos en el camino y nunca parar de aprender. 
        </p>
        <p>
          
        </p>
        <p>
          "Nunca pares de aprender"
        </p>
        <div className="aboutMe__right--country">
          <div className="aboutMe__right--country__flag" />
          <span>Escuintla, Guatemala</span>
        </div>
        <div className="aboutMe__right--country">
         <a  type="submit" href="https://drive.google.com/file/d/1Pj_uesOX65a7EjGEnb4H7QmgsHQTbhB0/view?usp=sharing" target="_blank">
           <button className="Btn-currim">Descargar CV</button>
         </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
