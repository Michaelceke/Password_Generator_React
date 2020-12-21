import React, { Component } from "react";

class CardRange extends Component {
  state = {};

  
  render() {

    return (
      <div>
        
        <div className="card text-white wi">
          <form className="range-field my-4 px-2 wi d-flex">
            <span className="font-weight-bold purple-text mr-2 mt-1">4</span>
            <input
              id={"myRange"}
              className="wi"
              type="range"
              min={4}
              max={100}
              step={1}
              defaultValue={10}
              onInput={this.props.onHandleLength}
            />
            <span className="font-weight-bold purple-text ml-2 mt-1">100</span>
          </form>
        </div>
      </div>
    );
  }
}

export default CardRange;
