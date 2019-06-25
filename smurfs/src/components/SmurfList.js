import React from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { fetchSmurf } from "../actions";

class SmurfList extends React.Component {
  componentDidMount() {
    this.props.fetchSmurf();
  }

  render() {
    return (
      <div className="list-container">
        {this.props.smurfs.map(smurf => {
          return <Smurf smurf={smurf} key={smurf.id} />;
        })}
      </div>
    );
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
