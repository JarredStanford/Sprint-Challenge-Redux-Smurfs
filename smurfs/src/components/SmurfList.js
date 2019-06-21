import React from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { fetchSmurf } from "../actions";

class SmurfList extends React.Component {
  componentDidMount() {
    this.props.fetchSmurf();
  }

  render() {
    return this.props.smurfs.map(smurf => {
      return <Smurf smurf={smurf} key={smurf.id} />;
    });
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurf }
)(SmurfList);
