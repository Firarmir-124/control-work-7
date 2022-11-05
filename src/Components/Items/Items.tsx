import React from 'react';
import './Items.css';

const Items:React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div className='items'>
      {children}
    </div>
  );
};

export default Items;