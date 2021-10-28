import { combineReducers } from "redux"
import counter from './counter'
import tasks from './tasks'
const rootReducer = () => {
  return combineReducers({
    counter,
    tasks,
  })
}

export default rootReducer