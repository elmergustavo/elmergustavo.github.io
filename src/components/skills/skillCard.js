/**
 * Copyright (c) Gustavo
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import './skillCard.scss';

const SkillCard = ({ name, image, description, year }) => (
  <div className="skill-card">
    <div className="skill-card__header">
      <div className="skill-card__header--image" style={{
        backgroundImage: `url('${image}')`,
      }} alt={`${name} icon`} />
      <div className="skill-card__header--info">
        <div className="skill-card__header--info__name">
          {name}
        </div>
        <div className="skill-card__header--info__time">
          {year}
        </div>
      </div>
    </div>
    <div className="skill-card__description">
      {description}
    </div>
  </div>
);

export default SkillCard;
