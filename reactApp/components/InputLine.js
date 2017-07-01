import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      typedText: ""
    }
  }

  handleTyping(event) {
    this.setState({typedText: event.target.value})
  }

  handleSubmit() {
    this.props.submit(this.state.typedText);
    this.setState({typedText: ""})
  }

  render() {
    return(
      <div>
        <input type="text" onChange={(event) => this.handleTyping(event)} value={this.state.typedText} placeholder="todo..." className="form-control"  />
        <input type="submit" onClick={() => this.handleSubmit()} value="Submit" />
      </div>
    )
  }
}

export default InputLine;
