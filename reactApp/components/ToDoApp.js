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

  addTodo(obj){
    dummyData.push(obj);
    this.setState({todos: dummyData});
  }

  render() {
    return (
      <div>
        <InputLine submit={(obj) => this.addTodo(obj)}/>
        <ToDoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default ToDoApp;
