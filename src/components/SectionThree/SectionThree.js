import React from 'react';
import SecThreeBlock from './SecThreeBlock/SecThreeBlock';
import s from './SectionThree.module.sass';

function SectionThree() {
  const blockData = [
    {
      text: 'Weight Lifting',
      color: '#FFE2DE',
    },
    {
      text: 'Running & Spinning',
      color: '#C4E769',
    },
    {
      text: 'Pumping Iron',
      color: '#62D0DF',
    },
    {
      text: 'Pumping Iron',
      color: '#0052C1',
    },
  ];

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
