import React, { Component } from "react";

class CardDisplay extends Component {
  constructor(props){
    super(props)
  }
  
  
   clicked="click to copy";

 displayWasClicked=()=>{
  var r = document.createRange();
  r.selectNode(document.getElementById("para2"))
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  //document.getElementById("copy").innerHTML="copied"
 // this.setState({clicked:true})
  this.props.onChangeIsPasswordCopied()
 }

 check=(callback)=> {return this.displayWasClicked()}

  render() {
    return (
      <div className="card  text-white">
        <div className="card-body">
          <span id="para2" className="card-body" ref=""disp>
            {this.props.display}
          </span>
          <span id="copy" style={{float:"right"}} onClick={this.displayWasClicked}>{this.props.isPasswordCopied? "copied": "click to copy"}</span>
        </div>
      </div>
    );
  }
}

export default CardDisplay;
