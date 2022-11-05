import React from 'react';
import './menu-items.css';

interface ItemsType {
  name: string;
  prise: number;
  image: string;
  click: React.MouseEventHandler;
}


const menuItems:React.FC<ItemsType> = (props) => {
  return (
    <div onClick={props.click} className='menu-items'>
      <img src={props.image} alt=""/>
      <h3 className='name'>{props.name}</h3>
      <span className='prise'>{props.prise}KGS</span>
    </div>
  );
};

export default menuItems;