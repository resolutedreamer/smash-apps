import React, { Component } from 'react';
import Header from './components/header';
import Table from './components/table';
import Controls from './components/controls';
import Tablewrap from './components/tablewrap';
import Overlay from './components/overlay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
		<Controls />
		<Tablewrap />
      </div>
    );
  }
}

export default App;
