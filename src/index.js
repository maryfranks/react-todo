import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';


var toDos = ["Buy Ice Cream", "Eat Ice Cream", "Go to the Gym"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)
