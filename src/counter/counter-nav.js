import React, { useState } from "react"

import { useDispatch } from "react-redux"
import {
  increase,
  decrease,
  reset,
  increase_odd_value,
  increase_specific_value,
} from "../redux"

export const CounterNav = () => {
  const dispatch = useDispatch()
  const [val, setVal] = useState(0)
  return (
    <div className="counter-nav">
      <button
        onClick={() => {
          dispatch(decrease())
        }}
      >
        Decrease
      </button>

      <button
        onClick={() => {
          dispatch(reset())
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          dispatch(increase())
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch(increase_odd_value())
        }}
      >
        Increase odd number
      </button>
      <button
        onClick={() => {
          dispatch(increase_specific_value(Number(val)))
        }}
      >
        Increase with specific value
      </button>
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
    </div>
  )
}

export default CounterNav
