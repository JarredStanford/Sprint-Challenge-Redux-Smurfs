import React from "react";

class Smurf extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.smurf.name}</h1>
        <h2>{this.props.smurf.age}</h2>
        <h2>{this.props.smurf.email}</h2>
      </div>
    );
  }
}
export default Smurf;
