import React, { Component } from 'react';
import SubmissionForm from './SubmissionForm';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      inputText: '',  //inputText
      outputText: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/list',
      success: (data) => {
        const setItem = data.map((item) => {
          this.setState({ outputText: item.set });
        });
      }
    });
  }

  handleChange(event) {
    this.setState({ inputText: event.target.value });
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Homonyms:
        <input type='string' value={this.state.inputText} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Enter Homonyms!' />
        </form>
        <h1 id='listHeading'>We Have</h1>
        <div id='list'>
          <h4>
            { this.state.outputText }
          </h4>
        </div>
      </div>
    );
  }
}

export default App;