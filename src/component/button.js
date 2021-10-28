import React, { Component } from "react";
import "./button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      deltaX: 0,
      deltaY: 0,
    };
    this.myRef = React.createRef();
  }
  x(e) {
    console.log(this.myRef, "this.myRef button");
    let { x, y } = this.myRef.current.getBoundingClientRect();
    let { clientX, clientY } = e;
    let deltaX = clientX - x - 5;
    let deltaY = clientY - y - 5;
    this.setState({
      active: true,  
      deltaX,
      deltaY,
    });
  }

  y() {
    this.setState({
      active: false,
    });
  }

  render() {
    return (
      <button className="d-button" ref={this.myRef} onClick={this.x.bind(this)}>
        <span className="d-button-text">{this.props.value}</span>
        {this.state.active ? (
          <span
            className="d-button-circle"
            style={{ top: this.state.deltaY, left: this.state.deltaX }}
            onAnimationEnd={this.y.bind(this)}
          ></span>
        ) : (
          ""
        )}
      </button>
    );
  }
}
export default Button;
