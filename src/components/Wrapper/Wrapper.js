import React from 'react';

function Wrapper({children, header}) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
        height: header ? '100%' : '',
      }}
    >
      {children}
    </div>
  );
}

export default Wrapper;
