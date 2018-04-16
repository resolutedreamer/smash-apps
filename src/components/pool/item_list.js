import React from 'react';

const ItemList = (props) => {
  return (
    <ul>
      {
        props.items.map((item, idx) => (
          <li key={idx}>
            {item.itemName}
            {item.itemURL}
            {item.itemDescription}
          </li>
        ))
      }
    </ul>
  )
}

export default ItemList;