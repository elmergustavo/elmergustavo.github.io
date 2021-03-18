

import React from 'react';
import AboutMe from '../components/aboutMe/aboutMe';
import Projects from '../components/projects/projects';
import Skills from '../components/skills/skills';
import Contact from '../components/contact/contact';

const Home = ({ observer, theme }) => (
  <div className="container">
    <AboutMe observer={observer} />
    <Projects observer={observer} theme={theme} />
    <Skills observer={observer} />
    <Contact observer={observer} />
  </div>
);

export default Home;
