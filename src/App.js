import React, { Component } from 'react';
import Header from './components/header';
import Table from './components/table';
import Pool from './components/pool/pool';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Table />
        <Pool />
      </div>
    );
  }
}

export default App;
