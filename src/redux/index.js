import { combineReducers, createStore } from "redux";


//types constant
export const types = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  RESET: "RESET",
}


// actions
export const increase =()=>{
  return {
    type: types.INCREASE
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

//initial state in the store
const initState = {
  count: 0
};

// REDUCERS
const counter = (state = initState, action) => {
  switch (action.type) {
    case types.INCREASE:
      return {
        ...state,
        count: state.count + 1
      };
    case types.DECREASE:
      return {
        ...state,
        count: state.count - 1
      };
    case types.RESET:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};

const tasks = (state = initState, action) => {
switch (action.type) {
  default:
    return state
}
}
//create store
// montrer ici cmment faire avec combine reducer
const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// const rootReducer = () => {
//   return combineReducers({
//     counter,
//     tasks,
//   })
// }
// const store = createStore(
//   rootReducer(),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

export default store;
