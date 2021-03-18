import React from 'react';
import s from './SectionSix.module.sass';
import Img from '../../img/linkedin-sales-navigator-402831.png';

function SectionSix() {
  return (
    <div className={s.secSix}>
      <div className={s.secSixImageWrapper}>
        <img src={Img} alt='' className={s.secSixImage} />
      </div>
      <div className={s.secSixTextBlock}>
        <div className={s.secSixHeader}>YOU SHOULD ALSO KNOW</div>
        <div className={s.secSixTitle}>
          MDD affects more than 16.1 million American adults, or about 6.7%of
          the U.S. population age 18 and older in a given year. We at{' '}
          <span className={s.thrive}>ThriveTalk</span> can help you.
        </div>
        <div className={s.secSixButtonWrap}>
          <button className={s.secSixButton}>GET HELP NOW</button>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
