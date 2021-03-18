import React from 'react';
import s from './SecThreeBlock.module.sass';

function SecThreeBlock({text, color}) {
  return (
    <div className={s.secThreeBlock} style={{backgroundColor: color}}>
      <div className={s.line}></div>
      <div className={s.secThreeBlockText}>{text}</div>
    </div>
  );
}

export default SecThreeBlock;
