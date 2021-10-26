import { combineReducers, createStore } from "redux"

//types constant
export const types = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  RESET: "RESET",
  INCREASE_ODD_VALUE: "INCREASE_ODD_VALUE",
  INCREASE_SPECIFIC_VALUE: "INCREASE_SPECIFIC_VALUE",
}

// actions
// action = objet
const increase = () => {
  //action
  return {
    // type: "INCREASE"
    type: types.INCREASE,
  }
}
const decrease = () => {
  return {
    type: types.DECREASE,
  }
}

const reset = () => {
  return {
    type: types.RESET,
  }
}

const increaseOddValue = () => {
  return {
    type: types.INCREASE_ODD_VALUE,
  }
}

const increaseSpecificValue = (valueToIncrement) => {
  return {
    type: types.INCREASE_SPECIFIC_VALUE,
    value: valueToIncrement,
  }
}
export const actions = {
  increase,
  decrease,
  reset,
  increaseOddValue,
  increaseSpecificValue,
}

//initial state in the store
const initState = {
  count: 0,
  name: "",
  age: 18,
}
// REDUCERS ==> toujours (state, action)=> newState
const counter = (state = initState, action) => {
  switch (action.type) {
    case types.INCREASE:
      // state.count+=1// noooooooon

      // 1ère solution (non recommandé)
      // const newState={}
      // newState.count=state.count+1
      // return newState

      // 2ème solution
      // const newState={...state}
      // newState.count+=1
      // return newState

      // 3ème solution
      const newState = {
        ...state, // count :0 , age:18, name:""
        count: state.count + 1,
      }
      return newState

    case types.DECREASE:
      return {
        ...state,
        count: state.count - 1,
      }
    case types.RESET:
      return {
        ...state,
        count: 0,
      }

    case types.INCREASE_ODD_VALUE:
      if (state.count % 2 === 1) {
        return {
          ...state,
          count: state.count+1,
        }
      } else {
        return state
      }
    case types.INCREASE_SPECIFIC_VALUE:
      return {
        ...state,
        count: state.count +action.value,
      }
    default:
      return state
  }
}

const tasks = (state = initState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

// montrer ici comment faire avec combine reducer
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
