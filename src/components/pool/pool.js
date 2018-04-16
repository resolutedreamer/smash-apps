import React from 'react';
import './pool.css';
import AddItemModal from './add_item_modal';
import ItemList from './item_list';

const showModal = () => {
  let modal = document.getElementById('addItemModal');
  modal.style.display = 'block';
}


const Pool = (props) => {
  return (
    <div>
      <button onClick={showModal}>
        Add Item
      </button>
      <AddItemModal addItemToPool={props.addItemToPool} />
      <ItemList items={props.items} />
    </div>
  )
}

export default Pool;