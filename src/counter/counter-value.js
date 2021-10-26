import React from "react";
import { connect } from "react-redux"


const CounterValue = ({count}) => {
  return <div className="counter-value">{count}</div>;
};
const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

export default connect(mapStateToProps, null)(CounterValue)

