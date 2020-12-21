import React, { Component } from "react";
import ReactDOM from "react-dom";

class Card extends Component {
  // Toggles complete
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    console.log(nam);
    console.log(val);
  };

  render() {
    return (
      <div
        className="card  text-white flex-container"
        style={{ marginBottom: "10px" }}
      >
        <span className="card-body">{this.props.name}</span>

        <label className="switch">
          <input
            id="toggle3"
            type="checkbox"
            checked={this.props.isToggled}
            name={this.props.name.title}
            onChange={()=>this.props.onToggle(this.props.value)}
          />
          <span className="slider round"></span>
        </label>
      </div>
    );
  }
}

export default Card;

