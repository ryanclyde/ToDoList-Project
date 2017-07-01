// alert('app.js ran!');
import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = [{taskText: "figure out the meaning of life", completed: false}, {taskText: "learn to code", completed: true}, {taskText: "Sleep, organization, set goals, productivity", completed: false}];


class ToDo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.task.completed) {
      return(<li><button>X</button><strike>{this.props.task.taskText}</strike></li>)
    }
    else {
      return (<li><button>X</button>{this.props.task.taskText}</li>)
    }
  }
}
// style={{textDecoration: "line-through"}}

class ToDoList extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ul>
        {this.props.todos.map((task) => <ToDo task = {task}/>)}
      </ul>
    )
  }
}

class InputLine extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <input placeholder="Search..." className="form-control" type="text" />
        <input type="submit" value="Submit" />
      </div>
    )
  }
}

class ToDoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({todos: dummyData});
    console.log(dummyData);
  }

  render() {
    return (
      <div>
        <InputLine/>
        <ToDoList todos={this.state.todos}/>
      </div>
    )
  }
}



ReactDOM.render(<ToDoApp />,
   document.getElementById('root'));
