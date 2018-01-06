import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem'

class MyList extends Component {
  render() {
    return (
      <div>
        <h1>Stuff to do: </h1>
        <ul>
          <ListItem />
        </ul>
      </div>
    );
  }
}

export default MyList;
