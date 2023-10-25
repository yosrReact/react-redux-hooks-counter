import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const increaseAsync = createAsyncThunk(
  "counters/increseAsync",
  async (/* object containing data sent from the commponent */) => {
    await delay(2000)
    return { message: "success" }
  }
)
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    name: "",
    age: 18,
    message: "",
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
  extraReducers: (builder) => {
    builder
      .addCase(increaseAsync.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(increaseAsync.fulfilled, (state, action) => {
        state.loading = false
        state.count++
        state.message = action.paylod
      })
      .addCase(increaseAsync.rejected, (state) => {
        state.loading = false
        state.error = true
      })
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
