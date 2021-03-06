import React from "react";

import { useSelector } from "react-redux";

const CounterValue = () => {
  const count = useSelector(store => store.count);
  return <div className="counter-value">{count}</div>;
};

export default CounterValue;
