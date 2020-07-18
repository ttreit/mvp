import React, { Component } from 'react';
import $ from 'jquery';
import MasterList from './MasterList';
import SubForm from './SubForm';


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
      data: this.state.inputText,
      success: (data) => {
        $.ajax({
          type: 'GET',
          url: '/list',
          success: (data) => {
            this.setState({ currentList: data })
            this.setState({ inputText: '' })
          }
        });
      }
    });
  }

  render() {
    return (
      <div>
        <SubForm inputText={this.state.inputText} handleChange={this.handleChange} handleSubmit = {this.handleSubmit}/>
        <MasterList currentList={this.state.currentList} />
      </div>
    );
  }
}

export default App;