import React from "react";
import { addSmurf } from "../actions";
import { connect } from "react-redux";

class FormSmurf extends React.Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postSmurf = e => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height
    };
    this.props.addSmurf(newSmurf);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.postSmurf}>
        <input
          placeholder="Name"
          onChange={this.handleChanges}
          value={this.state.name}
          name="name"
        />
        <input
          placeholder="Age"
          onChange={this.handleChanges}
          value={this.state.age}
          name="age"
          type="number"
        />
        <input
          placeholder="Height"
          onChange={this.handleChanges}
          value={this.state.height}
          name="height"
        />
        <button>Add Smurf</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: ""
  };
};
export default connect(
  mapStateToProps,
  { addSmurf }
)(FormSmurf);
