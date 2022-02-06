import React from 'react';

const Spinner = () => {
  return (
    <div style={{width: '100%', display:'flex', justifyContent:'center'}}>
      <div className='spinner-border m-5' role='status'></div>
    </div>
  );
};

export default Spinner;
