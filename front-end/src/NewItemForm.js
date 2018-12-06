import React, { Component } from 'react';

export default class NewItemForm extends Component {
  constructor() {
    super()

    this.state = {
      newItem: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.newItem);
  }

  handleChange(e) {
    this.setState({
      newItem: e.target.value
    })
  }
    
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}/>
        <button>Add New Item To Shopping List</button>
      </form>
    )
  }

}
