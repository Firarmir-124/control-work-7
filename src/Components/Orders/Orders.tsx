import React from 'react';
import './Orders.css';


const Orders:React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div className='orders'>
      {children}
    </div>
  );
};

export default Orders;