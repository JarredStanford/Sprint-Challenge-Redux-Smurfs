import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions";

class Smurf extends React.Component {
  removeSmurf = e => {
    e.preventDefault();
    this.props.deleteSmurf(this.props.smurf.id);
  };
  render() {
    return (
      <div>
        <h1>{this.props.smurf.name}</h1>
        <h2>{this.props.smurf.age}</h2>
        <h2>{this.props.smurf.height}</h2>
        <button onClick={this.removeSmurf}>Delete</button>
      </div>
    );
  }
}

Smurf.propTypes = {
  smurf: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    height: PropTypes.string.isRequired
  })
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { deleteSmurf }
)(Smurf);
