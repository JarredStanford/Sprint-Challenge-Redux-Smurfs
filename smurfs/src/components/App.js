import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import Smurfform from "./Smurfform";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div>
        <SmurfList />
        <Smurfform />
      </div>
    );
  }
}

export default App;
