import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }
  render() {
    return(
      <div className='App'>
        <h1>Treit Family Homonym Tracker</h1>
      </div>
    );
  }
}

export default App;