import React from 'react';
import ToDo from './ToDo';

class ToDoList extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ul>
        {this.props.todos.map((task) => <ToDo toggle = {(index) => this.props.toggleClick(index)} task = {task} index={this.props.todos.indexOf(task)} xClick={(index) => this.props.todoXClick(index)}/>)}
      </ul>
    )
  }
}

export default ToDoList;
