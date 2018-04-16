import React from 'react';

class addItemModal extends React.Component {
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
      <div id='addItemModal' className='modal'>
        <form className='modal-content' onSubmit={this.handleSubmit}>
          Item name:
          <input type='text' 
            value={this.state.itemName} 
            onChange={this.handleChange('itemName')} 
          />
          Image URL:
          <input type='text' 
            value={this.state.itemURL} 
            onChange={this.handleChange('itemURL')}
          />
          Description
          <textarea
            value={this.state.itemDescription} 
            onChange={this.handleChange('itemDescription')}
          />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default addItemModal;