import React from "react";
import PropTypes from "prop-types";

class Smurf extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.smurf.name}</h1>
        <h2>{this.props.smurf.age}</h2>
        <h2>{this.props.smurf.height}</h2>
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
export default Smurf;
