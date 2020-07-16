import React, { Component } from 'react';
import SubmissionForm from './SubmissionForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      currentInput: ''
    }
  }
  render() {
    return(
      <div className='heading'>
        <h1>Homonym Tracker</h1>
        <SubmissionForm />
      </div>
    );
  }
}

export default App;