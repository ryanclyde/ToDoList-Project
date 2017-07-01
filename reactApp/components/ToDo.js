import React from 'react';

class ToDo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.task.completed) {
      return(<li onClick={() => this.props.toggle(this.props.index)} ><button onClick={() => this.props.xClick(this.props.index)}>X</button><strike>{this.props.task.taskText}</strike></li>)
    }
    else {
      return (<li onClick={() => this.props.toggle(this.props.index)} ><button onClick={() => this.props.xClick(this.props.index)}>X</button>{this.props.task.taskText}</li>)
    }
  }
}

export default ToDo;
