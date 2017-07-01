import React from 'react';

class ToDo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.task.completed) {
      return(<li><button onClick={() => this.props.xClick(this.props.index)}>X</button><strike>{this.props.task.taskText}</strike></li>)
    }
    else {
      return (<li><button onClick={() => this.props.xClick(this.props.index)}>X</button>{this.props.task.taskText}</li>)
    }
  }
}

export default ToDo;
