import React from 'react';
import SecFourBlock from './SecFourBlock/SecFourBlock';
import s from './SectionFour.module.sass';
import {blockFour} from '../../data/data';

function SectionFour() {
  return (
    <div className={s.secFour}>
      {blockFour.map((b) => (
        <SecFourBlock {...b} />
      ))}
    </div>
  );
}

export default SectionFour;
