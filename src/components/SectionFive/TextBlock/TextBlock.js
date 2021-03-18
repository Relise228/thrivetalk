import React from 'react';
import s from './TextBlock.module.sass';

function TextBlock({title, description}) {
  return (
    <div className={s.textBlock}>
      <div className={s.textBlockTitle}>{title}</div>
      <div className={s.textBlockDescription}>{description}</div>
    </div>
  );
}

export default TextBlock;
