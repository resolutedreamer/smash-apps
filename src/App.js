import React from 'react';
import { Provider } from 'react-redux';

import Header from './components/header';
import Table from './components/table';
import PoolContainer from './components/pool/pool_container';

const App = ({store}) => (
  <Provider store={store}>
    <div className="App">
      <Header />
      <Table />
      <PoolContainer />
    </div>
  </Provider>
);

export default App;
