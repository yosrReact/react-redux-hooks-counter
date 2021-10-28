import React, { useState } from "react"
import { useDispatch } from "react-redux"
import {
  decrease,
  increase,
  reset,
  increaseOddValue,
  increaseSpecificValue,
} from "../redux/actions/counter"

export const CounterNav = () => {
  const dispatch = useDispatch()
  const [addedValue, setAddedValue] = useState(0)
  return (
    <div className="counter-nav">
      <button
        onClick={() => {
          // setCount(count - 1)
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
          dispatch(increaseOddValue())
        }}
      >
        Increase odd value
      </button>
      <button
        onClick={() => {
          dispatch(increaseSpecificValue(Number(addedValue)))
        }}
      >
        Increase specific value
      </button>
      <input
        type="number"
        value={addedValue}
        onChange={(e) => setAddedValue(e.target.value)}
      />
    </div>
  )
}

export default CounterNav
