import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <input placeholder="Search..." className="form-control" type="text" />
        <input type="submit" onClick={() => this.props.submit({taskText: "test task"})} value="Submit" />
      </div>
    )
  }
}

export default InputLine;
