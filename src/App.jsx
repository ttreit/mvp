import React, { Component } from 'react';
import SubmissionForm from './SubmissionForm';
import $ from 'jquery';
import MasterList from './MasterList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      inputText: '',  //inputText
      currentList: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/list',
      success: (data) => {
        this.setState({ currentList: data })
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
          <MasterList />
        </div>
      </div>
    );
  }
}

export default App;