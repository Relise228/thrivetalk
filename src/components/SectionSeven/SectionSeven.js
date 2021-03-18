import React from 'react';
import s from './SectionSeven.module.sass';
import Img from '../../img/charles-etoroma-390119.png';

function SectionSeven() {
  return (
    <div className={s.secSeven}>
      <div className={s.secSevenTextBlock}>
        <div className={s.secSevenHeader}>CONTACT US</div>
        <div className={s.secSevenHead}>Ready. Set. Smile</div>
        <div className={s.secSevenTitle}>
          Take the free online assessment to see if you are a candidate and get
          started on your journey.
        </div>
        <div className={s.secSevenButtonWrap}>
          <button className={s.secSevenButton}>GET HELP NOW</button>
        </div>
      </div>
      <div className={s.secSevenImageWrapper}>
        <img src={Img} alt='' className={s.secSevenImage} />
      </div>
    </div>
  );
}

export default SectionSeven;
