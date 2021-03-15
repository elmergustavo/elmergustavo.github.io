/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import './projectCard.scss';

const ProjectCard = ({ image, category, name, description, date, onClick }) => (
  <div className="project-card">
    <div className="project-card__image" style={{
      backgroundImage: `url('${image}')`,
      }} alt={`${name} image`}>
      <div className="project-card__image--date">{date}</div>
    </div>
    <div className="project-card__info">
      <button className="project-card__info--category">{category}</button>
      <div className="project-card__info--name">{name}</div>
      <div className="project-card__info--description" dangerouslySetInnerHTML={{ __html: description }} />
      <button className="project-card__info--view-more" onClick={onClick}>
        View project
      </button>
    </div>
  </div>
);

export default ProjectCard;
