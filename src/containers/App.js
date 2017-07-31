import React, { Component } from 'react';
import List from './List';
import ListSelector from './ListSelector';

class App extends Component {
  render() {
    return (
      <div>
        <ListSelector />
        <List />
      </div>
    );
  }
}

export default App;
