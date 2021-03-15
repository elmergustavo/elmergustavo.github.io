/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import projectsData from './projectsData';
import ProjectCard from './projectCard';
import ProjectInfo from './projectInfo';
import './projects.scss';

const Projects = ({ observer, theme }) => {
  const [element, setElement] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const [dataActive, setDataActive] = React.useState(projectsData);
  const [projectsFilter, setProjectsFilter] = React.useState({ category: 'all' });
  const [projectActive, setProjectActive] = React.useState(-1);

  const projectsPerPage = 6;

  React.useEffect(() => {
    if (element) {
      observer.observe(element);
    }
  // eslint-disable-next-line
  }, [element]);

  React.useEffect(() => {
    if (projectsFilter.category.toLowerCase() === 'all') {
      setDataActive(projectsData);
    } else {
      setDataActive(projectsData.filter((project) => project.category.toLowerCase().startsWith(projectsFilter.category.toLowerCase())));
    }
  }, [projectsFilter]);

  React.useEffect(() => {
    if (projectActive >= projectsData.length) {
      setProjectActive(-1);
    }

    document.body.style.overflow = projectActive >= 0 ? 'hidden' : 'auto';
  }, [projectActive]);

  return (
    <>
      {(projectActive >= 0 && projectActive < projectsData.length) && (
        <ProjectInfo {...projectsData[projectActive]} onClick={() => setProjectActive(-1)} theme={theme} />
      )}
      <section className="projects" ref={setElement} data-page="projects">
        <h1 className="projects__title">Projects</h1>
        <div className="projects__filter">
          <div className="projects__filter--select">
            <span>Category</span>
            <select defaultValue={projectsFilter.category.toLowerCase()} onChange={(e) => {
              setProjectsFilter({
                ...projectsFilter,
                category: e.target.options[e.target.selectedIndex].value,
              });
            }}>
              <option value="all">All</option>
              <option value="meetings">Meetings</option>
              <option value="design">Design</option>
              <option value="fullstack">FullStack</option>
              <option value="frontend">FrontEnd</option>
              <option value="backend">BackEnd</option>
              <option value="mobile">Mobile</option>
            </select>
          </div>
        </div>
        <div className="projects__grid">
          {dataActive.slice(0, projectsPerPage * page).map((project, i) => (
            <ProjectCard {...project} key={`project_${i + 1}`} onClick={() => setProjectActive(i)} />
          ))}
        </div>
        {((projectsPerPage * page + 1) <= dataActive.length) && <button className="projects__more" onClick={() => {
          setPage(page + 1);
        }}>Load more projects</button>}
      </section>
    </>
  );
};

export default Projects;
