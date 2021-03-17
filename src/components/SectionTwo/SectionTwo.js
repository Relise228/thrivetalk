import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import s from './SectionTwo.module.sass';
import Image from '../../img/christopher-campbell-40367.png';

function SectionTwo() {
  return (
    <div className={s.secTwo}>
      <Wrapper>
        <div className={s.secTwoWrapper}>
          <div className={s.secTwoText}>
            <div className={s.secTwoTitle}>Why Thrive?</div>
            <div className={s.secTwoDesc}>
              <strong>
                Want to improve your well-being from the comfort of your own
                couch? Are you having trouble finding the right therapist?
              </strong>
              <span className={s.secTwoSmall}>
                Here at ThriveTalk, our licensed therapists provide the same
                quality care you would get in office from anywhere you can
                access your laptop or mobile phone. Become your best self with
                ThriveTalk. Start therapy now with a licensed therapist!
              </span>
            </div>
          </div>
          <div className={s.secTwoImgWrapper}>
            <img src={Image} alt='' className={s.secTwoImage} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default SectionTwo;
