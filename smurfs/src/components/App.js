import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import FormSmurf from "./FormSmurf";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="main-container">
        <h1>Welcome to Smurfville</h1>
        <img
          src="https://www.bongfish.com/wp-content/uploads/2017/04/SV_header.jpg"
          alt="Smurfville"
        />
        <div className="list-form">
          <SmurfList />
          <FormSmurf />
        </div>
      </div>
    );
  }
}

export default App;
