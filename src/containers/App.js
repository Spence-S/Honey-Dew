import React, { Component } from 'react';
import ListContainer from './List';
import ListSelectorContainer from './ListSelector';

class App extends Component {
  render() {
    return (
      <div>
        <ListSelectorContainer />
        <ListContainer />
      </div>
    );
  }
}

export default App;
