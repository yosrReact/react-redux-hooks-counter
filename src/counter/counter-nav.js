import React from "react";

import { useDispatch } from "react-redux";
import * as actions from "../redux";

export const CounterNav = () => {
  const dispatch = useDispatch();
  return (
    <div className="counter-nav">
      <button
        onClick={() => {
          dispatch(actions.decrease());
        }}
      >
        Decrease
      </button>

      <button
        onClick={() => {
          dispatch(actions.reset())
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          dispatch(actions.increase())
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default CounterNav;
