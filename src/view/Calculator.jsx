import React, { Component } from "react";

class Calculator extends Component {
  constructor() {
    this.state = {
      displayValue: "",
    }
  }

  componentWillMount() {
    const { model, emitter } = this.props;
    this.model = model;
    this.emitter = emitter;
    this.emitter.on("TotalChanged", _ => this.setState({
      displayValue: this.model.total
    }));
    this.setState({ displayValue: this.model.total });
  }

  render() {
    return (
      <div>
        <div style={displayStyle}>{this.state.displayValue}</div>
        {this.createRow("row1", "AC")}
        {this.createRow("row2", "7", "8", "9", "/")}
        {this.createRow("row3", "4", "5", "6", "*")}
        {this.createRow("row4", "1", "2", "3", "-")}
        {this.createRow("row5", "0", ".", "=", "+")}
      </div>
    )
  }
}

export default Calculator