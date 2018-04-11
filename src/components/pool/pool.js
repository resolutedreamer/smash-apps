import React from 'react';
import './pool.css';
import addItemModal from './add_item_modal';

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

  handleChange(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let item = Object.assign({}, this.state);
    this.props.addItemToPool(item);
    this.setState({
      itemName: '',
      itemURL: '',
      itemDescription: ''
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.showModal}>
          Add Item
        </button>
        <addItemModal />
      </div>
    )
  }
}