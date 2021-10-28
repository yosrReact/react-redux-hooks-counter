import * as types from "../types"

const initialState = {
  count: 0,
  name: "smith",
  age: 18,
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREASE:
      //state.count+=1
      //1ère solution
      // const newState={}
      // newState.count=state.count+1

      //2ème solution
      const newState = { ...state }
      newState.count += 1
      return newState
    case types.DECREASE:
      //   const newState = { ...state }
      //   newState.count -= 1
      //  return newState
      return { ...state, count: state.count - 1 }
    case types.RESET:
      return { ...state, count: 0 }
    case types.INCREASE_ODD_VALUE:
      if (state.count % 2 !== 0) {
        const newState = { ...state }
        newState.count += 1
        return newState
      }
      return state
    case types.INCREASE_SPECIFIC_VALUE:
      return { ...state, count: state.count + action.addedValue }
    default:
      return state
  }
}
export default counter