const addItemModal = () => {
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

export default addItemModal;