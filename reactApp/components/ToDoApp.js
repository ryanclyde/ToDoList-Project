import React from 'react';
import InputLine from './InputLine';
import ToDoList from './TodoList';

var dummyData = [{taskText: "figure out the meaning of life", completed: false}, {taskText: "learn to code", completed: true}, {taskText: "Sleep, organization, set goals, productivity", completed: false}];

class ToDoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({todos: dummyData});
  }

  addTodo(str){
    var newObj = {taskText: str, completed: false} //index: dummyData.length
    dummyData.push(newObj);
    this.setState({todos: dummyData});
  }

  removeTodo(index) {
    dummyData.splice(index, 1);
    this.setState({todos: dummyData});
  }

  render() {
    return (
      <div>
        <InputLine submit={(str) => this.addTodo(str)}/>
        <ToDoList todos={this.state.todos} todoXClick={(index) => this.removeTodo(index)}/>
      </div>
    )
  }
}

export default ToDoApp;
