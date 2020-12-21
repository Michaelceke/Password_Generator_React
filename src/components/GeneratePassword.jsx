import React, { Component } from "react";

class GeneratePassword extends Component {
  getRandomInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  };

  generateNumber = () => {
    // GENERATE RANDOM NUMBER
    let min = 48;
    let max = 57;
    const number = this.getRandomInclusive(min, max);
    return String.fromCharCode(number);
  };

  generateUpperCase = () => {
    //GENERATE RANDOM UPPERCASE
    let min = 65;
    let max = 90;
    const upperCase = this.getRandomInclusive(min, max);
    return String.fromCharCode(upperCase);
  };

  generateLowerCase = () => {
    //GENERATE RANDOM UPPERCASE
    let min = 97;
    let max = 122;
    const lowerCase = this.getRandomInclusive(min, max);
    return String.fromCharCode(lowerCase);
  };

  generateAlphaNum = () => {
    //GENERATE RANDOM ALPHANUMERICS
    let arr = [33, 58, 91, 123]; //minimum values of the array _God Help Me
    let max;
    let min;
    let index = this.getRandomInclusive(0, 3);
    if (index === 0) {
      min = arr[index];
      max = 47;
    } else if (index === 1) {
      min = arr[index];
      max = 64;
    } else if (index === 2) {
      min = arr[index];
      max = 96;
    } else {
      min = arr[index];
      max = 126;
    }
    let range = [min, max];
    const alphaNum = this.getRandomInclusive(...range);
    return String.fromCharCode(alphaNum);
  };

  generate = (uppercasey, lowercasey, numbery, symboly, Lenghty) => {
    let uppercase = uppercasey;
    let lowercase = lowercasey;
    let number = numbery;
    let symbols = symboly;
    let length = Lenghty;

    let functionArray = [
      this.generateUpperCase,
      this.generateLowerCase,
      this.generateNumber,
      this.generateAlphaNum,
    ];

    let password = new Array(length).fill(0); //Initialize password Array
    // array of all  generator functions

    let input = [uppercase, lowercase, number, symbols]; // array of inputs aligned with their corresponding generator

    const activeInput = input
      .map((a, b) => {
        //This produces an array of arrays of input and its position(for record) then filters out input "false"
        if (a === true) return [a, b];
      })
      .filter((each) => {
        return each !== undefined;
      });

    

    const activeFunctions = activeInput.map((a) => {
      return functionArray[a[1]];
    });

    
    if (activeFunctions.length !== 0){

      password = password
      .map((a, b) => {     //a is dummy here
        if (b < activeInput.length) return activeFunctions[b]();  // not so important since the minimum password is 4
        else {
          let index = this.getRandomInclusive(0, activeFunctions.length - 1);
          return activeFunctions[index]();
        }
      })
      .join("");
    }

    else{
      password= "Please select an option from settings"
    }

   return password;
  };




  render() {
    let output = this.generate(
      this.props.statey.uppercase,
      this.props.statey.lowercase,
      this.props.statey.numbers,
      this.props.statey.symbols,
      this.props.Lengthy
    );

    return (
      <div className="card bg-secondary text-white" >
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={()=>this.props.onGenerate(output)}
        >
          GENERATE PASSWORD
        </button>
      </div>
    );
  }
}

export default GeneratePassword;
