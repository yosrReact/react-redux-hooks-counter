import { combineReducers, createStore } from "redux"

export const types = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  RESET: "RESET",
  INCREASE_ODD_VALUE: "INCREASE_ODD_VALUE",
  INCREASE_SPECIFIC_VALUE: "INCREASE_SPECIFIC_VALUE",
}
//==> ceci est une action
// const increase = {
//   type: types.INCREASE,
// }
// créateur d'action
export const increase = () => {
  // action =objet avec champ type (au moins)
  return {
    type: types.INCREASE,
  }
}

export const decrease = () => {
  return {
    type: types.DECREASE,
  }
}

export const reset = () => {
  return {
    type: types.RESET,
  }
}

export const increaseOddValue = () => {
  return {
    type: types.INCREASE_ODD_VALUE,
  }
}

export const increaseSpecificValue = (value) => {
  return {
    type: types.INCREASE_SPECIFIC_VALUE,
    // addedValue: value
    payload: {
        addedValue:value
    }
  }
}

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
    case types.INCREASE_SPECIFIC_VALUE:
   
      return { ...state, count: state.count + action.addedValue }
      return state
    default:
      return state
  }
}

const tasks = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = () => {
  return combineReducers({
    counter,
    tasks,
  })
}

const store = createStore(
  rootReducer(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store
