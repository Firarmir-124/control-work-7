import React from 'react';
import './OrderItems.css';

interface OrderItemsType {
  name: string;
  counter: number;
  prise: number;
  remove: React.MouseEventHandler;
}

const OrderItems:React.FC<OrderItemsType> = (props) => {
  return (
    <div className='orderItems'>
      <h3>{props.name}</h3>
      <div className="blockItems">
        <span className='counterItems'>x{props.counter}</span>
        <span className='priseItems'>{props.prise}KGS</span>
      </div>
      <button onClick={props.remove}></button>
    </div>
  );
};

export default OrderItems;