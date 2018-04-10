import React from 'react';
import './pool.css';

export default class Pool extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      itemURL: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);

    window.onclick = (event) => {
      let modal = document.getElementById('addItemModal');
      if (event.target === modal) {
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
          <input type='text' 
            value={this.state.itemName} 
            onChange={this.handleChange('itemName')} 
          />
          Image URL:
          <input type='text' 
            value={this.state.itemURL} onChange={this.handleChange('itemURL')}
          />
          <input type='submit' />
        </form>
      </div>
    )
  }

  handleChange(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let item = Object.assign({}, this.state);
    this.props.addItemToPool(item);
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