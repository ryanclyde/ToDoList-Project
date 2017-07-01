import React from 'react';

class ToDo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.task.completed) {
      return(
        <div>
          <button onClick={() => this.props.xClick(this.props.index)}>X</button>
          <li onClick={() => this.props.toggle(this.props.index)} ><strike>{this.props.task.taskText}</strike></li>
        </div>)
      }
    else {
      return (
        <div>
          <button onClick={() => this.props.xClick(this.props.index)}>X</button>
          <li onClick={() => this.props.toggle(this.props.index)} >{this.props.task.taskText}</li>
        </div>)
    }
  }
}

export default ToDo;
