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
    // implement this tempArray to modify this.todos instead of modifying dummyData after I get toggle to work
    // var tempArray = this.state.todos
    dummyData.splice(index, 1);
    this.setState({todos: dummyData});
  }

  toggleTodo(index){
    // console.log(this.state.todos[index]);
    var tempObj = this.state.todos[index];
    console.log(tempObj);
    tempObj.completed = !tempObj.completed;
    console.log(tempObj);
    dummyData.splice(index, 1, tempObj);
    this.setState({todos: dummyData});
  }

  render() {
    return (
      <div>
        <InputLine submit={(str) => this.addTodo(str)}/>
        <ToDoList todos={this.state.todos} toggleClick={(index) => this.toggleTodo(index)} todoXClick={(index) => this.removeTodo(index)}/>
      </div>
    )
  }
}

export default ToDoApp;
