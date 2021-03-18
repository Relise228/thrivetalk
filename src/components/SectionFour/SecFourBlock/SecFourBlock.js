import React, {useEffect, useState} from 'react';
import s from './SecFourBlock.module.sass';

function SecFourBlock({text, color, hover}) {
  const [showImg, setShowImg] = useState(false);

  const onEnter = () => {
    setShowImg(true);
  };
  const onLeave = () => {
    setShowImg(false);
  };

  return (
    <div
      className={s.secFourBlock}
      style={{
        background: showImg ? hover : color,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className={s.line}></div>
      <div className={s.secFourBlockTitle}>{text}</div>
    </div>
  );
}

export default SecFourBlock;
