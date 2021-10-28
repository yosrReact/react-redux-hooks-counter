import React from "react"
import { useSelector } from "react-redux"


const CounterValue = () => {
  const counter = useSelector(state => state.counter)
  return <div className="counter-value">{counter.count}</div>
}

export default CounterValue
