import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    name: "",
    age: 18,
  },
  reducers: {
    increase: (state, action) => {
      state.count++
    },
    decrease: (state, action) => {
      state.count--
    },
    reset: (state, action) => {
      state.count = 0
    },
    increaseOddValue: (state, action) => {
      if (state.count % 2 === 1) {
        state.count++
      }
    },
    increaseSpecificValue: (state, action) => {
      state.count += action.payload
    },
  },
})
export const {
  increase,
  decrease,
  reset,
  increaseOddValue,
  increaseSpecificValue,
} = counterSlice.actions
export default counterSlice.reducer
