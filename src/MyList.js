import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem'

class MyList extends Component {

  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList
    }
  }

  clearList (e) {
    console.log("Clearing List...");
    this.setState({
      toDoItemArray: []
    });
  }

  render() {
    let todoItems = this.state.toDoItemArray.map( (item, index) => (
      <ListItem doThis={item} key={index} />
    ))
    return (
      <div>
        <h1>Stuff to do: </h1>
        <ul>
          {todoItems}
        </ul>
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
      </div>
    );
  }
}

export default MyList;
