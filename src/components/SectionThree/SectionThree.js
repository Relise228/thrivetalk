import React from 'react';
import {blockData} from '../../data/data';
import SecThreeBlock from './SecThreeBlock/SecThreeBlock';
import s from './SectionThree.module.sass';

function SectionThree() {
  return (
    <div className={s.secThree}>
      <div className={s.secThreeAbout}>
        <div className={s.secThreeAbTitle}>ABOUT US</div>
        <div className={s.secThreeDescription}>
          We want to help you thrive! Whether you are just looking for someone
          to talk to, or are struggling with a mental wellness issue we’re here
          to help. Our highly talented therapists can help you with a range of
          issues including relationships, sex, PTSD, depression, social anxiety,
          or even just caring for yourself more.
        </div>
      </div>
      <div className={s.secThreeHelp}>WE CAN HELP YOU WITH</div>
      <div className={s.secThreeBlockSec}>
        {blockData.map((b) => (
          <SecThreeBlock {...b} />
        ))}
      </div>
    </div>
  );
}

export default SectionThree;
