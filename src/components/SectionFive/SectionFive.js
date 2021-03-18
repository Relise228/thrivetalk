import React from 'react';
import {blockFive} from '../../data/data';
import s from './SectionFive.module.sass';
import TextBlock from './TextBlock/TextBlock';
function SectionFive() {
  return (
    <div className={s.secFive}>
      {blockFive.map((b) => (
        <TextBlock {...b} />
      ))}
    </div>
  );
}

export default SectionFive;
