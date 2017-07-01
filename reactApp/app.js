// alert('app.js ran!');
import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = ["Get notes to study", "Conept Tracker", "apply to JPMorg", "Get sleep", "Plan weekend"];


class ToDo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <li><button>X</button>{this.props.task}</li>
    )
  }
}


class ToDoList extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ul>
        {dummyData.map((task) => <ToDo task = {task}/>)}
      </ul>
    )
  }
}

ReactDOM.render(<ToDoList />,
   document.getElementById('root'));
