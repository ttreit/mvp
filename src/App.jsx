import React, { Component } from 'react';
import SubmissionForm from './SubmissionForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }
  render() {
    return(
      <div className='heading'>
        <h1>Treit Family Homonym Tracker</h1>
        <SubmissionForm />
      </div>
    );
  }
}

export default App;