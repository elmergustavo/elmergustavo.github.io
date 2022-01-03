/**
 * Copyright (c) Gustavo
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import skillsData from './skillsData';
import SkillCard from './skillCard';
import './skills.scss';

const Skills = ({ observer }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [element, setElement] = React.useState(null);

  const skillsPerPage = 9;

  React.useEffect(() => {
    if (element) {
      observer.observe(element);
    }
  // eslint-disable-next-line
  }, [element]);

  return (
    <section className="skills" ref={setElement} data-page="skills">
      <h1 className="skills__title">Skills</h1>
      <div className="skills__grid">
        {skillsData.sort((a,b ) => b.year - a.year).slice(0, skillsPerPage * currentPage).map((skillData, i) => (
          <SkillCard {...skillData} key={`skill_${i + 1}`} />
        ))}
      </div>
      {((skillsPerPage * currentPage + 1) <= skillsData.length) && <button className="skills__more" onClick={() => {
        setCurrentPage(currentPage + 1);
      }}>Load more skills</button>}
    </section>
  );
};

export default Skills;
