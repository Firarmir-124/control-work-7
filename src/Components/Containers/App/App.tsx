import React, {useState} from 'react';
import './App.css';

import hamburger from '../../../assets/icons/hamburger.svg';
import coffee from '../../../assets/icons/coffee.svg';
import Cheeseburger from '../../../assets/icons/Cheeseburger.svg';
import Tea from '../../../assets/icons/Tea.svg';
import Fries from '../../../assets/icons/fries.svg';
import Cola from '../../../assets/icons/cola.svg';

import Orders from "../../Orders/Orders";
import Items from "../../Items/Items";
import MenuItems from "../../Items/menu-items/menu-items";
import Generation from "../../Orders/generation";

function App() {
  const ITEMS:ItemsType[] = [
    {name: 'Hamburger', prise: 80, image: hamburger, type: 'food',  id: '1'},
    {name: 'Cheeseburger', prise: 90, image: Cheeseburger, type: 'food', id: '2'},
    {name: 'Fries', prise: 45, image: Fries, type: 'food', id: '3'},
    {name: 'coffee', prise: 70, image: coffee, type: 'drink', id: '4'},
    {name: 'Tea', prise: 50, image: Tea, type: 'drink', id: '5'},
    {name: 'Cola', prise: 40, image: Cola, type: 'drink', id: '6'},
  ];

  const [order, setOrder] = useState([
    {name: 'Hamburger', counter: 0},
    {name: 'Cheeseburger', counter: 0},
    {name: 'Fries', counter: 0},
    {name: 'coffee', counter: 0},
    {name: 'Tea', counter: 0},
    {name: 'Cola', counter: 0},
  ]);

  const addItems = (id: string) => {
    const items = ITEMS.findIndex(d => d.id === id);
    const itemsName = ITEMS[items].name;

    const copy = [...order];
    copy.forEach(item => {
      if (itemsName === item.name) item.counter++
    })
    setOrder(copy);
  }

  const removeItem = (id: string) => {
    const items = ITEMS.findIndex(d => d.id === id);
    const itemsName = ITEMS[items].name;

    const copy = [...order];
    copy.forEach(item => {
      if (itemsName === item.name) item.counter = 0
    })
    setOrder(copy);
  }

  const totalPrise = () => {
    let prise = 0;
    order.forEach((item, index) => {
      prise += item.counter * ITEMS[index].prise;
    })
    return prise;
  }


  return (
    <div className="App">
      <Orders>
        <Generation order={order} removeItem={removeItem} ITEMS={ITEMS}/>
        <span className='totalPrise'>Ваша общая стоимость выходит:  {totalPrise()} KGS</span>
      </Orders>

      <Items>
        <h1>Наше меню</h1>
        <div className="food">
          {ITEMS.map((item, index) => (
            item.type === 'food' ?
            <MenuItems
              key={item.id}
              name={item.name}
              prise={item.prise}
              image={item.image}
              click={() => addItems(item.id)}
            /> : null
          ))}
        </div>
        <div className="drink">
          {ITEMS.map((item, index) => (
            item.type === 'drink' ?
              <MenuItems
                key={item.id}
                name={item.name}
                prise={item.prise}
                image={item.image}
                click={() => addItems(item.id)}
              /> : null
          ))}
        </div>
      </Items>
    </div>
  );
}

export default App;
