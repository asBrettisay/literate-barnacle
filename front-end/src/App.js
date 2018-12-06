import React, { Component } from 'react';
import axios from 'axios';
import NewItemForm from './NewItemForm';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      shoppingList: []
    }

    this.updateShoppingList = this.updateShoppingList.bind(this)
    this.showShoppingList = this.showShoppingList.bind(this)
    this.addNewItem = this.addNewItem.bind(this)
  }

  updateShoppingList(shoppingList) {
    this.setState({
      shoppingList: shoppingList
    })
  }

  showShoppingList () {
    axios.get('/api/shopping-list').then(res => this.updateShoppingList(res.data))
  }

  addNewItem(item) {
    axios.post('/api/shopping-list', {item}).then(this.showShoppingList)
  }

  render() {

    const shoppingList = this.state.shoppingList.map((item, i) => (
      <li key={i}>{item}</li>
    ))

    return (
      <div className="App">
        <h1>Brett's Christmas List</h1>

        <div>
          <ul className="list">
            { shoppingList } 
          </ul>
          <button onClick={this.showShoppingList}>Show shopping list</button>
        </div>

        <div>
          <NewItemForm onSubmit={this.addNewItem}/>
        </div>
      </div>
    );
  }
}

export default App;
