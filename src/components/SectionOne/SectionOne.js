import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Header from './Header/Header';
import s from './SectionOne.module.sass';
import Image from '../../img/sec-one-photo.png';
import classNames from 'classnames';

function SectionOne() {
  return (
    <div className={s.sectionOne}>
      <Header />
      <Wrapper>
        <div className={s.secOneWrapper}>
          <div className={s.secOneMain}>
            <div className={s.secOneLogo}>Thrivetalk</div>
            <div className={s.secOneTitle}>
              HELPING YOU THRIVE
              <br /> IN ALL AREAS OF LIFE
            </div>
            <div className={s.secOneDesc}>
              Our highly talented therapists can help you <br />
              with a range of issues including relationships, <br /> sex, PTSD,
              depression, social anxiety, or even
              <br /> just caring for yourself more.
            </div>
            <div className={s.secOneButtons}>
              <button className={classNames(s.secOneButton, s.secOneOrange)}>
                WHO AM I
              </button>
              <button
                className={classNames(s.secOneButton, s.secOneTransparent)}
              >
                WHAT DO I DO
              </button>
            </div>
          </div>
          <div className={s.secOnePhotoWrapper}>
            <img src={Image} alt='' className={s.secOnePhoto} />
          </div>
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              width: '600px',
              height: '600px',
              position: 'absolute',
              top: '0',
              right: 0,
            }}
          >
            {' '}
            <div className={s.secOneBlue}></div>
          </div>
          <div className={s.secOneWhite}></div>
        </div>
      </Wrapper>
    </div>
  );
}

export default SectionOne;
