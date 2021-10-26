import React, { useState } from "react"

import {actions} from "../redux"
import { connect } from "react-redux"



export const CounterNav = ({
  increase,
  decrease,
  reset,
  increaseOddValue,
  increaseSpecificValue,
}) => {
  const [val, setVal] = useState(0)
  return (
    <div className="counter-nav">
      <button
        onClick={() => {
          decrease()
        }}
      >
        Decrease
      </button>

      <button
        onClick={() => {
          reset()
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          increase()
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          increaseOddValue()
        }}
      >
        Increase odd number
      </button>
      <button
        onClick={() => {
          increaseSpecificValue(Number(val))
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

// first parameter: mapStateTopProps the selected data of the store
// second parameter: mapDispatchTopProps the actions

export default connect(null, actions)(CounterNav)
