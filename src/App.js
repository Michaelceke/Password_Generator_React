import React, { Component } from "react";

import CardDisplay from "./components/CardDisplay";
import CardRange from "./components/CardRange";
import CardInput from "./components/CardInput";
import GeneratePassword from "./components/GeneratePassword";
import "./App.css";

class App extends Component {
  state = {
    settings: {
      uppercase: true,
      lowercase: true,
      numbers: false,
      symbols: false,
    },
    display: "<<<<password will be displayed here >>>>",
    Length: 16,
    passwordIsCopied: false,
  };

  changeIsCopied = () => {
    this.setState({
      passwordIsCopied: true,
    });
  };

  handleToggle = (newValue) => {
    this.setState((prev) => {
      const updateState = {
        ...prev,
        settings: {
          ...this.state.settings,
          [newValue]: !this.state.settings[newValue],
        },
      };
      const newState = { ...prev, ...updateState };
      console.log(newState);

      return newState;
    });
  };

  handleLength = (event) => {
    this.setState({
      Length: parseInt(event.target.value),
    });
    console.log(event.target.value);
  };

  // updateLength=(e)=>{
  //   console.log(e.target.value)
  // }
  handleGeneratePassword = (password) => {
    this.setState({
      display: password,
      passwordIsCopied: false,
    });
  };

  render() {
    // const allInput = this.state.input.map((input) => (
    //   <CardInput key={input.id} name={input} onToggle={this.handleToggle}/>
    // ));

    return (
      <div className="container p-3 my-3  text-white">
        <h3 id="heading" className="center">
            PASSWORD GENERATOR
        </h3>
        <p id="para1" className="center">
          This generates passwords that best fits your requirement
        </p>

        <CardDisplay
          display={this.state.display}
          isPasswordCopied={this.state.passwordIsCopied}
          onChangeIsPasswordCopied={this.changeIsCopied}
        />

        <div>
          Choose Password Length: <span id="val">{this.state.Length}</span>
        </div>

        <CardRange onHandleLength={this.handleLength} />

        <div>Generator Settings:</div>

        <CardInput
          name={"Upper-case"}
          value={"uppercase"}
          onToggle={this.handleToggle}
          isToggled={this.state.settings.uppercase}
        />
        <CardInput
          name={"Lower-case"}
          value={"lowercase"}
          onToggle={this.handleToggle}
          isToggled={this.state.settings.lowercase}
        />
        <CardInput
          name={"Numbers"}
          value={"numbers"}
          onToggle={this.handleToggle}
          isToggled={this.state.settings.numbers}
        />
        <CardInput
          name={"Symbols"}
          value={"symbols"}
          onToggle={this.handleToggle}
          isToggled={this.state.settings.symbols}
        />
        <GeneratePassword
          statey={this.state.settings}
          Lengthy={this.state.Length}
          onGenerate={this.handleGeneratePassword}
        />
      </div>
    );
  }
}

export default App;

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import CardDisplay from "./components/CardDisplay";
// import CardRange from "./components/CardRange";
// import CardInput from "./components/CardInput";
// import "./App.css";

// const App = (props) => {
//   const state = {
//     input: [
//       { id: "1", title: "Upper-case", isToggled: false },
//       { id: "2", title: "Lower-case", isToggled: false },
//       { id: "3", title: "Numbers", isToggled: false },
//       { id: "4", title: "Symbols", isToggled: false },
//     ],
//     display: "show password here . . . .",
//     Length: 4,
//   };
//   // const Input = [
//   //   { id: "1", title: "Upper-case", isToggled: false },
//   //   { id: "2", title: "Lower-case", isToggled: false },
//   //   { id: "3", title: "Numbers", isToggled: false },
//   //   { id: "4", title: "Symbols", isToggled: false },
//   // ];
//   const [genState, setGenState] = useState(state);
//   // const [inputState, setInputState] = useState(Input);

//   const onHandleChange = (value, data) => {
//    if(value === 'Upper-case') {

//    }
//   };

//   return (
//     <div>
//       <div className="container p-3 my-3  text-white">
//         <h1 id="heading" className="center">
//           PASSWORD GENERATOR
//         </h1>
//         <p id="para1" className="center">
//           {" "}
//           This generates passwords that best fits your requirement{" "}
//         </p>

//         <CardDisplay display={genState.display} />

//         <div>
//           Choose Password Length: <span id="val">{}</span>
//         </div>

//         <CardRange />

//         <div>Generator Settings:</div>
//         {genState.input.map((input) => {
//           return (
//             <CardInput
//               key={input.id}
//               name={input}
//               onHandleChange={onHandleChange}
//             />
//           );
//         })}

//         <div className="card bg-secondary text-white">
//           <button
//             type="button"
//             className="btn btn-primary btn-lg btn-block"
//             onClick="myFunction()"
//           >
//             GENERATE PASSWORD
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// App.propTypes = {};

// export default App;
