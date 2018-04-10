import React, { Component } from 'react';
import Header from './components/header';
import Table from './components/table';
import PoolContainer from './components/pool/pool_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Table />
        <PoolContainer />
      </div>
    );
  }
}

export default App;
