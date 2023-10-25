// REDUCERS ==> toujours (state, action)=> newState
const initState = {
  count: 0,
  name: "",
  age: 18,
}
export const counter = (state = initState, action) => {
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
          count: state.count + 1,
        }
      } else {
        return state
      }
    case types.INCREASE_SPECIFIC_VALUE:
      return {
        ...state,
        count: state.count + action.value,
      }
    default:
      return state
  }
}
