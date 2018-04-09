import React from 'react';
import './pool.css';

export default class Pool extends React.Component {

  constructor(props) {
    super(props);
    window.onclick = (event) => {
      let modal = document.getElementById('addItemModal');
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }
  }

  showModal() {
    let modal = document.getElementById('addItemModal');
    modal.style.display = 'block';
  }

  addItemModal() {
    return (
      <div id='addItemModal' className='modal'>
        <form className='modal-content' onSubmit={this.handleSubmit}>
          Item name:
          <input type='text' />
          Image URL:
          <input type='text' />
        </form>
      </div>
    )
  }

  handleSubmit() {

  }

  render() {
    return (
      <div>
        <button onClick={this.showModal}>
          Add Item
        </button>
        {this.addItemModal()}
      </div>
    )
  }
}