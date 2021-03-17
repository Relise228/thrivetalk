import React from 'react';
import Wrapper from '../../Wrapper/Wrapper';
import s from './Header.module.sass';

function Header() {
  return (
    <div className={s.header}>
      <Wrapper header>
        <div className={s.headerWrapper}>
          <div className={s.logo}>Thrivetalk</div>
          <div className={s.navWrap}>
            <ul className={s.navMenu}>
              <li className={s.navMenuItem}>Home</li>
              <li className={s.navMenuItem}>About</li>
              <li className={s.navMenuItem}>Services</li>
              <li className={s.navMenuItem}>Blog</li>
            </ul>
          </div>
          <div className={s.buttonWrap}>
            <button className={s.buttonContact}>CONTACT US</button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Header;
