import React from 'react';
import OrderItems from "./OrderItems/OrderItems";

interface GenerationType {
  order: OrderType[];
  removeItem: (id: string) => void;
  ITEMS: ItemsType[];

}

const Generation:React.FC<GenerationType> = ({order, removeItem, ITEMS}) => {


  let generation:React.ReactNode[] = [<span key={'text'} className='modal-text'>Выберите что-то из меню</span>];

  order.map((item, index) => {
    if (item.counter > 0) {
      generation.push (
        <OrderItems
          remove={() => removeItem(ITEMS[index].id)}
          key={ITEMS[index].id}
          name={item.name}
          counter={item.counter}
          prise={ITEMS[index].prise}
        />
      )
      generation[0] = '';
    }
  })


  return (
    <div>
      {generation}
    </div>
  );
};

export default Generation;