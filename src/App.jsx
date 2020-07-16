import React, { Component } from 'react';
import SubmissionForm from './SubmissionForm';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      inputText: '',  //inputText
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({inputText: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //AJAX
    $.ajax({
      type: 'POST',
      url: '/',
      data: this.state.inputText
    })
  }

  render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Homonyms:
        <input type='string' value={this.state.inputText} onChange={this.handleChange} />
      </label>
      <input type='submit' value='Enter Homonyms!' />
    </form>
  );
}



  // render() {
  //   return(
  //     <div className='heading'>
  //       <h1>Homonym Tracker</h1>
  //       <SubmissionForm />
  //     </div>
  //   );
  // }
}

export default App;